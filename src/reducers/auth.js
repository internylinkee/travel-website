import { Cookies } from 'react-cookie';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT
} from 'constants/actionTypes';
import { get } from 'lodash';

const cookies = new Cookies();
const initialState = cookies.get('authInfo') || {
  token: {
    type: 'Bearer',
    accessToken: null
  },
  user: {}
};

export default function auth(state = initialState, action = {}) {
  let authState = { ...state };
  switch (action.type) {
    case AUTH_LOGIN:
      authState = {
        ...state,
        token: {
          ...state.token,
          accessToken: get(action.payload, 'accessToken')
        },
        user: get(action.payload, 'user')
      };
      break;
    case AUTH_LOGOUT:
      authState = {
        token: {
          type: 'Bearer',
          accessToken: null
        },
        user: {}
      };
      break;
    default:
      authState = state;
  }
  // save auth info to cookies
  cookies.set('authInfo', authState);
  return authState;
}
