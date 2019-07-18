/* -------- Auth actions -------- */
import {
  API_FETCH,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  API_FAILED
} from 'constants/actionTypes';

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

// Register
export const register = data => dispatch => dispatch({
  types: [API_FETCH, AUTH_LOGIN, API_FAILED],
  payload: {
    client: 'auth',
    request: {
      url: '/v1/auth/register',
      method: 'POST',
      data
    }
  }
});

export const logout = () => ({
  type: AUTH_LOGOUT
});
