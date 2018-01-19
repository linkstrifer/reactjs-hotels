import React, { Component } from 'react';
import './App.css';

import {
  getData,
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
  }

  componentWillMount() {
    const { filter } = this;

    getData()
      .then(data => {
        this.setState(prevState => ({
          ...data,
          filtered: filter(data.results, prevState.filterParams)
        }))
      })
      .catch(error => console.log(error));
  }

  searchHandler = query => {
    search(query)
      .then(data => {
        const { filter } = this;

        this.setState(prevState => ({
          ...data,
          filtered: filter(data.results, prevState.filterParams)
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
