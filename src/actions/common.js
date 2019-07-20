/* -------- Common actions -------- */
import {
  API_FETCH,
  API_FAILED,
  GET_LIST_CATEGORY,
  GET_LIST_LOCATION
} from 'constants/actionTypes';
import Helpers from 'helpers';
import axios from 'axios';

const { CancelToken } = axios;
const canceledList = [];

export const cancelCommonAPI = () => () => {
  if (canceledList.length > 0) {
    canceledList.map(item => item.canceled.cancel(`cancel_API-${item.key}`));
  }
};

// Danh sach địa điểm
export const getListLocation = params => (dispatch, getState) => {
  canceledList.push({
    key: Helpers.generateKeyAPI(),
    canceled: CancelToken.source()
  });
  const cancelToken = canceledList[canceledList.length - 1].canceled.token;
  return dispatch({
    types: [API_FETCH, GET_LIST_LOCATION, API_FAILED],
    payload: {
      request: {
        url: '/v1/locations',
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

// Danh sach thẻ
export const getListCategory = params => (dispatch, getState) => {
  canceledList.push({
    key: Helpers.generateKeyAPI(),
    canceled: CancelToken.source()
  });
  const cancelToken = canceledList[canceledList.length - 1].canceled.token;
  return dispatch({
    types: [API_FETCH, GET_LIST_CATEGORY, API_FAILED],
    payload: {
      request: {
        url: '/v1/categories',
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
