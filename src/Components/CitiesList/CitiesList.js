import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCityAction } from '../../actions/actions';

export const CitiesList = () => {

  const cities = useSelector(state => state.cities);

  const dispatch = useDispatch();

  // const handleClick = id => {
  //   dispatch(removeCityAction(id));
  // };

  return (
    <div className="list-group">
      {
        cities.map(
          city =>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              key={city.id}
            >
              {city.name}, {city.country}
            </button>
        )
      }
    </div>
  );
};