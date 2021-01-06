import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App/App';
import { rootReducer } from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadCities, saveCities } from './common/functions';
import { BrowserRouter as Router } from 'react-router-dom';

const initialState = {
  cities: loadCities(),
  error: false,
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
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);