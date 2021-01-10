import React from 'react';
import { winds } from '../common/consts';
import { dtToDate } from '../common/functions';

export const Day = ({ weather, offset }) => {
  const deg = Math.round(weather.wind_deg / 45) * 45;

  return (
    <div>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <div>
          <span style={{ 'fontSize': '20px' }}>{dtToDate(weather.dt, offset)}</span>
        </div>
        <div>
          {Math.round(weather.temp.day)}&deg;C / {Math.round(weather.temp.night)}&deg;C
        </div>
        <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].main}
          />
          {weather.weather[0].main}
        </div>
        <div>
          <span style={{ 'fontFamily': 'Arial' }}>{winds[deg]}</span> {Math.round(weather.wind_speed)} m/s
        </div>
      </div>
      <hr />
    </div>
  );
};