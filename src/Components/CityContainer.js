import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCityAction, setCityAction } from '../actions/actions';
import { getWeather } from '../common/functions';
import { City } from './City';

export const CityContainer = () => {
  const cityId = useSelector(state => state.cityId);

  const city = useSelector(state => state.cities.find(city => parseInt(city.id) === parseInt(cityId)));

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      if (undefined !== city) {
        const weather = await getWeather(city);
        setWeather(weather);
      }
    }
    fetchWeather();
  }, [city]);

  const dispatch = useDispatch();

  const handleRemoveClick = id => {
    dispatch(removeCityAction(id));
    dispatch(setCityAction(null));
  };

  const handleBackClick = () => {
    dispatch(setCityAction(null));
  };

  return (
    <div className="pt-3">
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <button
          className="btn btn-link"
          onClick={() => handleBackClick()}
        >
          &larr; Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleRemoveClick(cityId)}
        >
          Remove city
        </button>
      </div>
      <hr />
      <h1>{city.name}, {city.country}</h1>
      {null !== weather ? <City weather={weather} /> : <div>Loading...</div>}
    </div>
  );
};