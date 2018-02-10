import * as api from '../services/api';

const GET_DATA = 'GET_DATA';
const GET_DATA_PENDING = 'GET_DATA_PENDING';
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED';

const initialState = {
  data: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return 'CLICKED!';

    case GET_DATA_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_DATA_FULFILLED:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

export function getData() {
  return {
    type: GET_DATA,
    payload: api.fetch()
  };
}
