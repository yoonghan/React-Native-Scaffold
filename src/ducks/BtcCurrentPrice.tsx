import {btc_current_url, listOfExchange, exchange, keyReplacement} from '../utils/Const';
import produce from "immer";
import {Connector} from '../utils/Connector';
import {BtcCurrentPriceI, BtcCurrentPriceItemI} from '../interfaces/BtcCurrentPriceI';

export const FETCH_BTC_CURRENT_BEGIN   = 'FETCH_BTC_CURRENT_BEGIN';
export const FETCH_BTC_CURRENT_SUCCESS = 'FETCH_BTC_CURRENT_SUCCESS';
export const FETCH_BTC_CURRENT_FAILURE = 'FETCH_BTC_CURRENT_FAILURE';

const reformatData = (fromExchange):BtcCurrentPriceItemI => (data) => ({
  fromExchange: fromExchange,
  toCurrency: exchange,
  price: data[exchange]
});

const formatUrlExchange = (url, exchange) => url.replace(keyReplacement, exchange);

export function fetchBtcCurrentPrice(dispatch) {
  for(let i=0; i<listOfExchange.length; i++) {
    dispatch({
        types: [FETCH_BTC_CURRENT_BEGIN, FETCH_BTC_CURRENT_SUCCESS, FETCH_BTC_CURRENT_FAILURE],
        fetchConfig: {
            path: formatUrlExchange(btc_current_url, listOfExchange[i]),
            method: "GET",
            success: reformatData(listOfExchange[i])
        }
    })
  }
}

const initialState:BtcCurrentPriceI = {
  items: [],
  error: null
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BTC_CURRENT_BEGIN:
      return {
        ...state,
        error: null
      };
    case FETCH_BTC_CURRENT_SUCCESS:
      return {
        ...state,
        items: produce(state.items, draftState => {
            draftState.push(action.payload.data)
        })
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
