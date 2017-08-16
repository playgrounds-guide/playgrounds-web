// action types
const FETCH__BEGIN = 'playgrounds/FETCH__BEGIN';
const FETCH__SUCCESS = 'playgrounds/FETCH__SUCCESS';
const FETCH__FAIL = 'playgrounds/FETCH__FAIL';

// action creators
const fetchBegin = () => ({
  type: FETCH__BEGIN
});;

const fetchSuccess = data => ({
  type: FETCH__SUCCESS,
  data
});

const fetchFail = error => ({
  type: FETCH__FAIL,
  error
});

// Fetching data from server (using redux-thunk)
export const fetchPlaygrounds = () => dispatch => {
  dispatch(fetchBegin());
  return fetch(
    process.env.PUBLIC_URL + '/data/data.json'
  ).then(
    response => response.json()
  ).then(
    data => dispatch(fetchSuccess(data))
  ).catch(
    error => dispatch(fetchFail(error))
  )
};

// initial state
const initialState = {
  data: null,
  fetching: false,
  error: null
};

// reducer
export default (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH__SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data
      };
    case FETCH__FAIL:
      return {
        ...state,
        error: action.error,
        fetching: false
      };
    default:
      return state
  }
}