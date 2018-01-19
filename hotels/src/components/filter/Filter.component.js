import React from 'react';
import './Filter.css';

import Search from './Search.component';
import Stars from './Stars.componen';
import Accordion from './Accordion.component';

const FilterComponent = (props) => (
  <aside className="filter">
    {render(props)}
  </aside>
);

const render = (props) => (
  window.innerWidth < 1024 ? renderMobile(props) : renderDesktop(props)
)

const renderMobile = ({ searchHandler: search, filterHandler: filter }) => (
  <Accordion
    label={(
      <span>
        Filtros
      </span>
    )}
    open={false}
  >
    <Search
      search={search}
    />
    <Stars
      filter={filter}
    />
  </Accordion>
);

const renderDesktop = ({ searchHandler: search, filterHandler: filter }) => (
  <div>
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
  </div>
);

export default FilterComponent;
