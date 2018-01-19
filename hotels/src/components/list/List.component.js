import React from 'react';
import './List.css';

import Hotel from './Item.component';

const ListComponent = ({ results }) => (
  <div
    className="list"
  >
    {results && results.map(hotel => (
      <Hotel
        data={hotel}
        key={hotel.id}
      />
    ))}
  </div>
);

export default ListComponent;
