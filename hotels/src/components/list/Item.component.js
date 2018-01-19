import React from 'react';
import './Item.css';
import {
  getHotelUrl,
  mapNumber,
} from './../../helpers/utils.helper';

const ItemComponent = ({ data }) => (
  <article className="hotel">
    <figure className="hotel-image-container">
      <img
        alt={data.name}
        className="hotel-image"
        src={`${process.env.PUBLIC_URL}/assets/images/hotels/${data.image}`}
      />
    </figure>
    <div className="hotel-data">
      <h2 className="hotel-name">
        {data.name}
      </h2>      
      <div className="hotel-stars">
        {mapNumber(data.stars, (item, index) => (
          <img
            alt=""
            className="hotel-star"
            key={`${data.name}-star-${index}`}
            src={`${process.env.PUBLIC_URL}/assets/icons/filters/star.svg`}
          />
        ))}
      </div>
      <div className="hotel-amenities">
        {data.amenities.map((amenity, index) => (
          <img
            alt={amenity}
            className="hotel-amenity"
            key={`${data.name}-amenity-${amenity}`}
            src={`${process.env.PUBLIC_URL}/assets/icons/amenities/${amenity}.svg`}
          />
        ))}
      </div>
    </div>
    <div className="hotel-sidebar">
      <span className="hotel-price-copy">
        Precio por noche por habitación
      </span>
      <span className="hotel-price-container">
        <span className="hotel-currency">
          ARS
        </span>
        <strong className="hotel-price">
          {Math.ceil(data.price).toLocaleString()}
        </strong>
      </span>
      <a
        className="hotel-cta"
        href={getHotelUrl(data)}
        target="_blank"
      >
        Ver hotel
      </a>
    </div>
  </article>
);

export default ItemComponent;