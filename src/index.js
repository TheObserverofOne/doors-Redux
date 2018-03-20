import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import lockReducer from './reducers/lockReducer';
import openReducer from './reducers/openReducer';

const rootReducer = combineReducers({
  isOpen: openReducer,
  isLocked: lockReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
