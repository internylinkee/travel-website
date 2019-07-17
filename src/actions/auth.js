/* -------- Auth actions -------- */
import {
  API_FETCH,
  API_DEFAULT,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  API_FAILED
} from 'constants/actionTypes';
import Helpers from 'helpers';
import axios from 'axios';

const { CancelToken } = axios;
const canceledList = [];

export const cancelAuthAPI = () => () => {
  if (canceledList.length > 0) {
    canceledList.map(item => item.canceled.cancel(`cancel_API-${item.key}`));
  }
};

// Login
export const login = data => dispatch => dispatch({
  types: [API_FETCH, AUTH_LOGIN, API_FAILED],
  payload: {
    client: 'auth',
    request: {
      url: '/v1/auth/login',
      method: 'POST',
      data
    }
  }
});

// TODO: Rap API logout
export const logout = data => dispatch => dispatch({
  types: [API_FETCH, AUTH_LOGOUT, API_FAILED],
  payload: {
    client: 'auth',
    request: {
      url: '/v1/auth/logout',
      method: 'POST',
      data
    }
  }
});
