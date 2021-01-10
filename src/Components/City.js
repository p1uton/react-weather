import React from 'react';
import { winds } from '../common/consts';
import { dtToDateTime } from '../common/functions';
import { Day } from './Day';

export const City = ({ weather }) => {

  const deg = Math.round(weather.current.wind_deg / 45) * 45;

  return (
    <div>
      <div>
        {dtToDateTime(weather.current.dt, weather.timezone_offset)}
      </div>
      <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
        <div style={{ 'fontSize': '48px' }}>
          {Math.round(weather.current.temp)}&deg;C
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt={weather.current.weather[0].main}
          />
        </div>
        <div>
          <div>
            {weather.current.weather[0].main}
          </div>
          <div>
            <span style={{ 'fontFamily': 'Arial' }}>{winds[deg]}</span> {Math.round(weather.current.wind_speed)} m/s
          </div>
        </div>
      </div>
      <hr />
      {weather.daily.map(dayWeather => <Day key={dayWeather.dt} weather={dayWeather} offset={weather.timezone_offset} />)}
    </div>
  );
};