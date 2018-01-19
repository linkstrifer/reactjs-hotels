import React from 'react';

import { mapNumber } from '../../helpers/utils.helper';

import Accordion from './Accordion.component';

const StarsComponent = ({ filter }) => {
  let allStarsInput = null;
  let starInputs = [];

  const changeAllStars = remove => {
    mapNumber(5, (item, index) => {
      filter({name: 'stars', value: index + 1}, remove);
    });
  }

  return (
    <Accordion
      label={(
        <span>
          Estrellas
        </span>
      )}
    >
      <div className="filter-box-content no-flex">
        <label
          className="filter-label"
        >
          <input
            type="checkbox"
            ref={input => allStarsInput = input}
            defaultChecked={true}
            onChange={event => {
              const { checked } = event.target;

              changeAllStars(!checked);
  
              if (checked) {
                starInputs.forEach(input => {
                  input.checked = false;
                })
              }
            }}
          />
          Todas las estrellas
        </label>
        {mapNumber(5, (item, index) => (
          <label
            className="filter-label"
            key={`label-${index}`}
          >
            <input
              type="checkbox"
              onChange={event => {
                const { checked } = event.target;
                
                if (allStarsInput.checked) {
                  allStarsInput.checked = false;
                  changeAllStars(true);
                }
                
                filter({name: 'stars', value: index + 1}, !checked)
              }}
              ref={input => starInputs.push(input)}
            />
            {mapNumber(index + 1, (star, starNumber) => (
              <img
                className="filter-icon"
                alt=""
                key={`star-${starNumber}-${index}`}
                src={`${process.env.PUBLIC_URL}/assets/icons/filters/star.svg`}
              />
            ))}
          </label>
        ))}
      </div>
    </Accordion>
  );
}

export default StarsComponent;
