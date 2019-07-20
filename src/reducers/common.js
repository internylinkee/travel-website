import {
  GET_LIST_CATEGORY,
  GET_LIST_LOCATION
} from 'constants/actionTypes';

const initialState = {
  categories: [],
  locations: []
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {
    case GET_LIST_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };
    case GET_LIST_LOCATION:
      return {
        ...state,
        locations: action.payload
      };
    default:
      return state;
  }
}
