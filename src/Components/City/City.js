import React from 'react';

const winds = {
  '0': <span>&darr;</span>,
  '45': <span>&#8601;</span>,
  '90': <span>&larr;</span>,
  '135': <span>&#8598;</span>,
  '180': <span>&uarr;</span>,
  '225': <span>&#8599;</span>,
  '270': <span>&rarr;</span>,
  '315': <span>&#8600;</span>,
  '360': <span>&darr;</span>,
};

export const City = ({ weather }) => {

  const deg = Math.round(weather.wind.deg / 45) * 45;

  return (
    <div>
      <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
        <div style={{ 'fontSize': '48px' }}>
          {Math.round(weather.main.temp)}&deg;C
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
          />
        </div>
        <div>
          <div>
            {weather.weather[0].main}
          </div>
          <div>
            <span style={{'fontFamily':'Arial'}}>{winds[deg]}</span> {weather.wind.speed} m/s
          </div>
        </div>
      </div>
    </div>
  );
};