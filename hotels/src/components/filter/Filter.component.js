import React, { Component } from 'react';
import './Filter.css';

import Accordion from './Accordion.component';

class FilterComponent extends Component {
  toggleAccordion() {}

  render() {
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
          <input
            className="filter-input"
            placeholder="Nombre del hotel"
          />
          <button
            className="filter-button"
            type="button"
          >
            Buscar
          </button>
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
  }
}

export default FilterComponent;
