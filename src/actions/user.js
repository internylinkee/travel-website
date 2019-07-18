/* -------- User actions -------- */
import {
  API_FETCH,
  API_DEFAULT,
  API_FAILED
} from 'constants/actionTypes';

// Danh sách user
export const getUserList = params => dispatch => dispatch({
  types: [API_FETCH, API_DEFAULT, API_FAILED],
  payload: {
    request: {
      url: '/v1/users',
      method: 'GET',
      params
    }
  }
});

// Thông tin chi tiết user
export const getUserDetail = userId => (dispatch, getState) => dispatch({
  types: [API_FETCH, API_DEFAULT, API_FAILED],
  payload: {
    request: {
      url: `/v1/users/${userId}`,
      headers: {
        Authorization: `${getState().auth.token.type} ${getState().auth.token.accessToken}`
      },
      method: 'GET'
    }
  }
});
