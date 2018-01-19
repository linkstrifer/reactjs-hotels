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
    total: 0,
    results: [],
    filtered: [],
    filterParams: [],
    query: null,
    currentPage: 0,
  }

  componentWillMount() {
    const { filter, scrollHandler } = this;

    search()
      .then(data => {
        this.setState(prevState => ({
          ...data,
          filtered: filter(data.results, prevState.filterParams)
        }))
      })
      .catch(error => console.log(error));

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

    search(query, 0)
      .then(data => {
        const { filter } = this;

        this.setState(prevState => ({
          ...data,
          filtered: filter(data.results, prevState.filterParams),
          query,
          currentPage: 0,
        }))
      })
      .catch(error => console.log(error));
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

  render() {
    const { filtered } = this.state;
    const { searchHandler, filterHandler } = this;

    return (
      <div className="App">
        <Header />
        <main
          role="main"
          className="container"
        >
          <Filter
            searchHandler={searchHandler}
            filterHandler={filterHandler}
          />
          <HotelList
            results={filtered}
          />
        </main>
      </div>
    );
  }
}

export default App;
