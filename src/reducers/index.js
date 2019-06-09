import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import counter from './counter';

const rootReducer = history => combineReducers({
  auth,
  counter,
  router: connectRouter(history)
});

export default rootReducer;
