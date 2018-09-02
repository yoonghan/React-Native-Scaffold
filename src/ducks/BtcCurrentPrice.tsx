import {btc_current_url, listOfExchange, exchange, keyReplacement} from '../utils/Const';
import update from 'immutability-helper';
import {Connector} from '../utils/Connector';
import {BtcCurrentPriceI, BtcCurrentPriceItemI} from '../interfaces/BtcCurrentPriceI';

export const FETCH_BTC_CURRENT_BEGIN   = 'FETCH_BTC_CURRENT_BEGIN';
export const FETCH_BTC_CURRENT_SUCCESS = 'FETCH_BTC_CURRENT_SUCCESS';
export const FETCH_BTC_CURRENT_FAILURE = 'FETCH_BTC_CURRENT_FAILURE';

export const fetchBtcCurrentBegin = () => ({
  type: FETCH_BTC_CURRENT_BEGIN
});

export const fetchBtcCurrentSuccess = btccurrent => (
  {
  type: FETCH_BTC_CURRENT_SUCCESS,
  payload: { btccurrent }
  }
);

export const fetchBtcCurrentError = error => ({
  type: FETCH_BTC_CURRENT_FAILURE,
  payload: { error }
});

const reformatData = (data) => (fromExchange):BtcCurrentPriceItemI => ({
  fromExchange: fromExchange,
  toCurrency: exchange,
  price: data[exchange]
});

const formatUrlExchange = (url, exchange) =>
  url.replace(keyReplacement, exchange);

const triggerUrl = (dispatch, idx) => {
  Connector.get(formatUrlExchange(btc_current_url, listOfExchange[idx]))
    .then(res => res.data)
    .then(handleErrors)
    .then(json => reformatData(json))
    .then(formattedData => {
      dispatch(fetchBtcCurrentSuccess(formattedData(listOfExchange[idx])));
    })
    .catch(error => dispatch(fetchBtcCurrentError(error.message)));
}

export function fetchBtcCurrentPrice() {
  return dispatch => {
    dispatch(fetchBtcCurrentBegin());
    for(let i=0; i<listOfExchange.length; i++) {
      triggerUrl(dispatch, i);
    }
  };
}

function handleErrors(data) {
  if (!data) {
    throw Error("THERE ARE NO VALID DATA");
  }
  return data;
}

const initialState:BtcCurrentPriceI = {
  items: [],
  error: null
};

export function fetchBtcCurrentPriceReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BTC_CURRENT_BEGIN:
      return {
        ...state,
        error: null
      };
    case FETCH_BTC_CURRENT_SUCCESS:
      return {
        ...state,
        items: update(state.items, {$push: [action.payload.btccurrent]})
      };
    case FETCH_BTC_CURRENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
