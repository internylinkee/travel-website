import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import common from './common';

const rootReducer = history => combineReducers({
  auth,
  common,
  router: connectRouter(history)
});

export default rootReducer;
