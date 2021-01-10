import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { rootReducer } from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadCities, saveCities } from './common/functions';

const initialState = {
  cities: loadCities(),
  error: false,
  cityId: null,
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveCities(store.getState().cities);
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);