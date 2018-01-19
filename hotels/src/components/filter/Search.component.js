import React from 'react';

import Accordion from './Accordion.component';

const SearchComponent = ({ search }) => {
  let queryInput = null;

  return (
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
  )
};

export default SearchComponent;
