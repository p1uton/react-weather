import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { removeCityAction } from '../../actions/actions';
import { City } from '../City/City';

export const CityContainer = () => {
  const { cityId } = useParams();

  const city = useSelector(state => state.cities.find(city => parseInt(city.id) === parseInt(cityId)));

  const [weather, setWeather] = useState(null);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${process.env.REACT_APP_APPID}`);
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, [cityId]);

  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(removeCityAction(id));
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={'/'} />
    );
  }

  return (
    <div className="pt-3">
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <NavLink to="/">&larr; Back</NavLink>
        <button className="btn btn-primary" onClick={() => handleClick(cityId)}>
          Remove city
        </button>
      </div>
      <hr />
      <h1>{city.name}, {city.country}</h1>
      {null !== weather ? <City weather={weather} /> : <div>Loading...</div>}
    </div>
  );
};