import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }

  return next(action);
};

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  reducer,
  compose(
    applyMiddleware(stringMiddleware, logMiddleware),
    reduxDevTools && reduxDevTools()
  )
);

export default store;
