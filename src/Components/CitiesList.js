import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCityAction } from '../actions/actions';
import { Search } from './Search';

export const CitiesList = () => {
  const cities = useSelector(state => state.cities);

  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(setCityAction(id));
  };

  return (
    <div className="list-group">
      <Search />
      {
        cities.map(
          city =>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              key={city.id}
              onClick={() => handleClick(city.id)}
            >
              {city.name}, {city.country}
            </button>
        )
      }
    </div>
  );
};