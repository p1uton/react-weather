import { ADD_CITY, HIDE_ERROR, REMOVE_CITY, SHOW_ERROR } from '../actions/types';

const initialState = {
  cities: [],
  error: false,
};

export const rootReducer = (state = initialState, action) => {
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
          }
        ],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload),
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