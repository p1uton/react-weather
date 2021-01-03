import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCityAsyncAction } from '../../actions/actions';
import { Error } from '../../Components/Error/Error';

export const Search = () => {
  const [cityName, setCityName] = useState('');

  const dispatch = useDispatch();

  const error = useSelector(state => state.error);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCityAsyncAction(cityName));
    setCityName('');
  };

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
      <div className="input-group mb-3 pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          value={cityName}
          onChange={event => setCityName(event.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
        >
          Add city
        </button>
      </div>
      </form>
      {
        error
          ? <Error />
          : null
      }
    </div>
  );
}