import React, { Component } from 'react';
import './App.css';

import {
  search,
} from './helpers/data.helper';

import Header from './components/header/Header.component';
import HotelList from './components/list/List.component';
import Filter from './components/filter/Filter.component';

class App extends Component {
  state = {
    currentPage: 0,
    error: null,
    filterParams: [],
    filtered: [],
    loading: false,
    query: null,
    results: [],
    total: 0,
  }

  componentWillMount() {
    const { filter, scrollHandler } = this;

    this.setState({
      loading: true,
    });

    search()
      .then(data => {
        this.setState(prevState => ({
          ...data,
          filtered: filter(data.results, prevState.filterParams),
          loading: false,
        }))
      })
      .catch(error => this.setState({
        error,
        loading: false,
      }));

    window.addEventListener('scroll', scrollHandler)
  }

  componentWillUnmount() {
    const { scrollHandler } = this;
    window.removeEventListener('scroll', scrollHandler);
  }

  scrollHandler = () => {
    const position = document.querySelector('body').getBoundingClientRect().bottom
      - window.innerHeight
      - 300;

    if (position < 0) {
      const { currentPage, query } = this.state;
      const { filter, scrollHandler } = this;
      const nextPage = currentPage + 1;

      search(query, nextPage)
        .then(data => {
          if (data.total === 0) {
            window.removeEventListener('scroll', scrollHandler);
          } else {
            this.setState(prevState => {
              const results = [...prevState.results, ...data.results];
    
              return ({
                results,
                total: prevState.total + data.total,
                currentPage: nextPage,
                filtered: filter(results, prevState.filterParams),
              });
            })
          }
        })
    }
  }

  searchHandler = query => {
    const { scrollHandler } = this;

    window.addEventListener('scroll', scrollHandler);

    this.setState({
      loading: true,
    });

    search(query, 0)
      .then(data => {
        const { filter } = this;

        this.setState(prevState => ({
          ...data,
          currentPage: 0,
          filtered: filter(data.results, prevState.filterParams),
          loading: false,
          query,
        }))
      })
      .catch(error => this.setState({
        error,
        loading: false,
      }));
  }

  filter = (results, filterParams) => {
    const filtered = filterParams.length > 0
      ? results.filter(result => filterParams.some(param => result[param.name] === param.value))
      : results;

    return filtered;
  }

  filterHandler = (param, remove) => {
    this.setState(prevState => {
      const exist = prevState.filterParams.find(filterParam => JSON.stringify(filterParam) === JSON.stringify(param));
      const newState = {...prevState};
      const { filter } = this;

      if (!exist && !remove) {
        newState.filterParams.push(param);
      } else if (remove) {
        newState.filterParams = prevState.filterParams.filter(filterParam => JSON.stringify(filterParam) !== JSON.stringify(param));
      }

      newState.filtered = filter(prevState.results, newState.filterParams);

      return newState;
    })
  }

  renderError = () => (
    <div className="error">
      Error: {this.state.error}
    </div>
  )

  render() {
    const { filtered, loading, error } = this.state;
    const { searchHandler, filterHandler, renderError } = this;

    return (
      <div className="App">
        <Header />
        { error && renderError() }
        <main
          role="main"
          className="container"
        >
          <Filter
            searchHandler={searchHandler}
            filterHandler={filterHandler}
          />
          { !loading && (
            <HotelList
            results={filtered}
          />
          )}
          { loading && (
            <div className="loading-text">
              Cargando resultados
            </div>
          ) }
        </main>
      </div>
    );
  }
}

export default App;
