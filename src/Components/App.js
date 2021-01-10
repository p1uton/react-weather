import React from 'react';
import { useSelector } from 'react-redux';
import { CitiesList } from './CitiesList';
import { CityContainer } from './CityContainer';

export const App = () => {
  const cityId = useSelector(state => state.cityId);

  return (
    <div className="container">
      {
        null !== cityId
          ? <CityContainer />
          : <CitiesList />
      }
    </div>
  );
};