import React, { Component } from 'react';
import './App.css';

import { getData } from './helpers/data.helper';

import Header from './components/header/Header.component';
import HotelList from './components/list/List.component';
import Filter from './components/filter/Filter.component';

class App extends Component {
  state = {
    total: 0,
    results: []
  }

  componentWillMount() {
    getData('//localhost:8010/')
      .then(data => {
        this.setState({...data})
      })
      .catch(error => console.log(error));
  }

  render() {
    const { results } = this.state;

    return (
      <div className="App">
        <Header />
        <main
          role="main"
          className="container"
        >
          <Filter />
          <HotelList
            results={results}
          />
        </main>
      </div>
    );
  }
}

export default App;
