import React from 'react';
import './Filter.css';

import Accordion from './Accordion.component';

const FilterComponent = ({ searchHandler: search }) => {
  let queryInput = null;

  return (
    <aside className="filter">
      <div className="filter-box">
        <span className="filter-title">
          Filtros
        </span>
      </div>
      <Accordion
        label={(
          <div>
            <img
              alt="search"
              className="filter-icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/filters/search.svg`}
            />
            Nombre del hotel
          </div>
        )}
      >
        <form
          className="filter-box-content"
          onSubmit={(event) => {
            event.preventDefault();
            search(queryInput.value);
          }}
        >
          <input
            ref={input => { queryInput = input }}
            className="filter-input"
            placeholder="Nombre del hotel"
          />
          <button
            className="filter-button"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </Accordion>
      <Accordion
        label={(
          <span>
            Estrellas
          </span>
        )}
      >
        <div>
          content
        </div>
      </Accordion>
    </aside>
  )
};

export default FilterComponent;
