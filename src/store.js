import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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
    applyMiddleware(thunk, stringMiddleware, logMiddleware),
    reduxDevTools && reduxDevTools()
  )
);

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: 'DELAYED_ACTION',
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(3000));
export default store;
