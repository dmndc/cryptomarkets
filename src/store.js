import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import data from './ducks/data';
import filters from './ducks/filters';

const rootReducer = combineReducers({
  data,
  filters
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware(), logger)));

export default store;
