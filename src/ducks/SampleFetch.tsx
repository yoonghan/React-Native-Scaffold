export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBegin = () => ({
  type: FETCH_BEGIN
});

export const fetchSuccess = success => ({
  type: FETCH_SUCCESS,
  payload: { success }
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

const initialState:BtcHistoryI = {
  items: [],
  error: null
};

export function fetchData() {
    return {
        types: [FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE],
        fetchConfig: {
            path: 'https://www.walcron.com',
            method: "GET",
            success: function(json) {
              return {data: json};
            }
        }
    }
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        error: null,
        items: []
      };
    case FETCH_SUCCESS:
      console.warn(action.payload);
      return {
        ...state,
        items: action.payload.data
      };
    case FETCH_FAILURE:
      console.warn("ERROR");
      console.warn(action.payload);
      return {
        ...state,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
