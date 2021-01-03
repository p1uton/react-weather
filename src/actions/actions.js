import { ADD_CITY, HIDE_ERROR, REMOVE_CITY, SHOW_ERROR } from './types';

export const addCityAsyncAction = cityName => {
  return async dispatch => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_APPID}`);
      const city = await response.json();
      if ('id' in city) {
        dispatch(addCityAction(city));
      } else {
        dispatch(showErrorAction());
      }
    } catch (error) {
      dispatch(showErrorAction());
    }
  }
};

export const addCityAction = city => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};

export const removeCityAction = id => {
  return {
    type: REMOVE_CITY,
    payload: id,
  };
};

export const showErrorAction = () => {
  return {
    type: SHOW_ERROR,
  };
}

export const hideErrorAction = () => {
  return {
    type: HIDE_ERROR,
  };
};