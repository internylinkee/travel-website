import axios from 'axios';
import { API_URL, API_AUTH, API_FILE_URL } from 'constants/api';
import { camelizeKeys } from 'humps';
import { getActionTypes } from 'redux-axios-middleware';
import { logout } from 'actions';
import { isArray, get } from 'lodash';

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0
      },
      transformResponse: [function onConvertResponse(data) {
        if (data) {
          return camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
        }
        return {};
      }]
    })
  },
  auth: {
    client: axios.create({
      baseURL: API_AUTH,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0
      },
      transformResponse: [function convertResponse(data) {
        if (data) {
          return camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
        }
        return {};
      }]
    })
  },
  file: {
    client: axios.create({
      baseURL: API_FILE_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0
      },
      transformRequest: [(data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          if (data[key] && data[key]) {
            if (isArray(data[key])) {
              data[key].forEach((value) => {
                formData.append(key, value);
              });
            } else {
              formData.append(key, data[key], get(data, `${key}.name`));
            }
          }
        });
        return formData;
      }],
      transformResponse: [function onConvertResponse(data) {
        if (data) {
          return camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
        }
        return {};
      }]
    })
  },
  download: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: -1
      }
    })
  }
};

export const apiMiddlewareConfig = {
  interceptors: {
    request: [
      function onConvertRequest({ getState, dispatch, getSourceAction }, req) {
        // req: contains information about request object
        return req;
      }
    ]
  },

  onSuccess: ({ action, next, response }, options) => {
    const nextAction = {
      type: getActionTypes(action, options)[1],
      payload: response.data,
      meta: {
        previousAction: action
      }
    };
    next(nextAction);
    return nextAction;
  },
  onError: ({
    action, next, error, dispatch
  }, options) => {
    if (error.response && error.response.status === 401) {
      return dispatch(logout());
    }
    let errorObject;
    if (error && !error.response) {
      errorObject = {
        data: error.message,
        status: 0
      };
      if (process.env.NODE_ENV !== 'production') {
        console.error('HTTP Failure in Axios', error);
      }
    } else {
      errorObject = error.response;
    }
    const nextAction = {
      type: getActionTypes(action, options)[2],
      error: errorObject,
      meta: {
        previousAction: action
      }
    };
    next(nextAction);
    return nextAction;
  }
};
