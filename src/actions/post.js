/* -------- Post actions -------- */
import {
  API_FETCH,
  API_DEFAULT,
  API_FAILED
} from 'constants/actionTypes';
import Helpers from 'helpers';
import axios from 'axios';

const { CancelToken } = axios;
const canceledList = [];

export const cancelPostAPI = () => () => {
  if (canceledList.length > 0) {
    canceledList.map(item => item.canceled.cancel(`cancel_API-${item.key}`));
  }
};

// Danh sách bài viết
export const getListPost = params => (dispatch, getState) => {
  canceledList.push({
    key: Helpers.generateKeyAPI(),
    canceled: CancelToken.source()
  });
  const cancelToken = canceledList[canceledList.length - 1].canceled.token;
  return dispatch({
    types: [API_FETCH, API_DEFAULT, API_FAILED],
    payload: {
      request: {
        url: '/v1/posts',
        method: 'GET',
        headers: {
          Authorization: `${getState().auth.token.type} ${getState().auth.token.accessToken}`
        },
        cancelToken,
        params
      }
    }
  });
};

// TODO: Ráp API Danh sách bài viết nổi bật
export const getListFeaturedPost = params => (dispatch, getState) => {
  canceledList.push({
    key: Helpers.generateKeyAPI(),
    canceled: CancelToken.source()
  });
  const cancelToken = canceledList[canceledList.length - 1].canceled.token;
  return dispatch({
    types: [API_FETCH, API_DEFAULT, API_FAILED],
    payload: {
      request: {
        url: '/v1/posts/hot',
        method: 'GET',
        headers: {
          Authorization: `${getState().auth.token.type} ${getState().auth.token.accessToken}`
        },
        cancelToken,
        params
      }
    }
  });
};

// Tạo bài viết
export const postPost = data => (dispatch, getState) => {
  canceledList.push({
    key: Helpers.generateKeyAPI(),
    canceled: CancelToken.source()
  });
  const cancelToken = canceledList[canceledList.length - 1].canceled.token;
  return dispatch({
    types: [API_FETCH, API_DEFAULT, API_FAILED],
    payload: {
      request: {
        url: '/v1/posts',
        method: 'POST',
        headers: {
          Authorization: `${getState().auth.token.type} ${getState().auth.token.accessToken}`
        },
        cancelToken,
        data
      }
    }
  });
};
