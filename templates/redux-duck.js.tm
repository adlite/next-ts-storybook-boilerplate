// Internals
import {Api} from 'classes/Api';
import {getApiErrorMessage} from 'utils';

// Action names
export const FETCH = '@${TM:DUCK_NAME}/FETCH';
export const FETCH_OK = '@${TM:DUCK_NAME}/FETCH_OK';
export const FETCH_ERR = '@${TM:DUCK_NAME}/FETCH_ERR';

// Action creators
const fetchStart = () => {
  return {type: FETCH};
};

const fetchOk = data => ({
  type: FETCH_OK,
  payload: data,
});

const fetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const fetch = () => (dispatch, getState) => {
  dispatch(fetchStart());

  return Api.get({
    url: '/',
    onResponse: res => {
      dispatch(fetchOk(res));
    },
    onReject: err => {
      dispatch(fetchErr(getApiErrorMessage(err)));
    },
  });
};

// Reducer
const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_OK:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_ERR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
