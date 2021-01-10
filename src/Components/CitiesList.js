import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCityByCoordsAction, setCityAction } from '../actions/actions';
import { Search } from './Search';

export const CitiesList = () => {
  const cities = useSelector(state => state.cities);

  const dispatch = useDispatch();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLocationSuccess);
    }
  };
  
  const getLocationSuccess = position => {
    dispatch(addCityByCoordsAction(position.coords.latitude, position.coords.longitude));
  };
  
  if (0 === cities.length) {
    getLocation();
  }

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