import { ADD_CITY, HIDE_ERROR, REMOVE_CITY, SHOW_ERROR } from '../actions/types';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            id: action.payload.id,
            name: action.payload.name,
            country: action.payload.sys.country,
            lat: action.payload.coord.lat,
            lon: action.payload.coord.lon,
          }
        ],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => parseInt(city.id) !== parseInt(action.payload)),
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};