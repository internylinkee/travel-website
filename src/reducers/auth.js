import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const initialState = cookies.get('authState') || {
  token: null,
  user: {}
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
