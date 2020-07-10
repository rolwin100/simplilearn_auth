import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { hot } from 'react-hot-loader/root';
import Routing from '../routes';
import rootSagas from './combineSagas';

import rootReducer from './combineReducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);


const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSagas);

const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default hot(App);
