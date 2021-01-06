import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const CitiesList = () => {

  const cities = useSelector(state => state.cities);

  return (
    <div className="list-group">
      {
        cities.map(
          city =>
            <NavLink
              type="button"
              className="list-group-item list-group-item-action"
              key={city.id}
              to={`/${city.id}`}
            >
              {city.name}, {city.country}
            </NavLink>
        )
      }
    </div>
  );
};