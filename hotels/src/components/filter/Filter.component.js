import React from 'react';
import './Filter.css';

import Search from './Search.component';
import Stars from './Stars.componen';

const FilterComponent = ({ searchHandler: search, filterHandler: filter }) => (
  <aside className="filter">
    <div className="filter-box">
      <span className="filter-title">
        Filtros
      </span>
    </div>
    <Search
      search={search}
    />
    <Stars
      filter={filter}
    />
  </aside>
);

export default FilterComponent;
