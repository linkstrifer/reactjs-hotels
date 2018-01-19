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
    filtered: []
  }

  componentWillMount() {
    getData()
      .then(data => {
        this.setState({
          ...data
        })
      })
      .catch(error => console.log(error));
  }

  searchHandler = query => {
    search(query)
      .then(data => {
        this.setState({
          ...data
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { results } = this.state;
    const { searchHandler } = this;

    return (
      <div className="App">
        <Header />
        <main
          role="main"
          className="container"
        >
          <Filter
            searchHandler={searchHandler}
          />
          <HotelList
            results={results}
          />
        </main>
      </div>
    );
  }
}

export default App;
