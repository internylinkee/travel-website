import { Cookies } from 'react-cookie';
import { get } from 'lodash';
import variables from 'constants/variables';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT
} from 'constants/actionTypes';

const cookies = new Cookies();
const initialState = cookies.get(variables.COOKIES_NAME.AUTH, variables.COOKIES_OPTION) || {
  isAuthenticated: false,
  token: {
    type: 'Bearer',
    accessToken: null
  },
  user: {}
};

export default function auth(state = initialState, action = {}) {
  let authState = { ...state };
  let isUpdatedAuth = false;
  switch (action.type) {
    case AUTH_LOGIN:
      authState = {
        ...state,
        isAuthenticated: !!get(action.payload, 'accessToken'),
        token: {
          ...state.token,
          accessToken: get(action.payload, 'accessToken')
        },
        user: get(action.payload, 'user')
      };
      isUpdatedAuth = true;
      break;
    case AUTH_LOGOUT:
      authState = {
        isAuthenticated: false,
        token: {
          type: 'Bearer',
          accessToken: null
        },
        user: {}
      };
      isUpdatedAuth = true;
      break;
    default:
  }
  if (isUpdatedAuth) {
    // save auth info to cookies
    cookies.set(variables.COOKIES_NAME.AUTH, authState, variables.COOKIES_OPTION);
  }
  return authState;
}
