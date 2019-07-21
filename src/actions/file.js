/* -------- File actions -------- */
import {
  API_DEFAULT,
  API_FETCH,
  API_FAILED
} from 'constants/actionTypes';

export const donwload = () => ({});

export const uploadFiles = files => (dispatch, getState) => {
  const data = {
    images: files
  };

  return dispatch({
    types: [API_FETCH, API_DEFAULT, API_FAILED],
    payload: {
      client: 'file',
      request: {
        url: '/v1/upload',
        method: 'POST',
        headers: {
          Authorization: `${getState().auth.token.type} ${getState().auth.token.accessToken}`,
          'X-API-VERSION': 1
        },
        data
      }
    }
  });
};
