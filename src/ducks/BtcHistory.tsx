import {btc_history_url, keyReplacement} from '../utils/Const';
import {Connector} from '../utils/Connector';
import {BtcHistoryItemI, BtcHistoryI} from '../interfaces/BtcHistoryListI';

export const FETCH_BTC_HISTORY_BEGIN   = 'FETCH_BTC_HISTORY_BEGIN';
export const FETCH_BTC_HISTORY_SUCCESS = 'FETCH_BTC_HISTORY_SUCCESS';
export const FETCH_BTC_HISTORY_FAILURE = 'FETCH_BTC_HISTORY_FAILURE';

const createHistoryData = (unixTimestamp: number, open: number, close: number, low: number, high: number):BtcHistoryItemI => {
  const decimalAccuracy = 2;
  const _date = unixTimeToDate(unixTimestamp);
  const _open = Number(open);
  const _close = Number(close);
  const _low = Number(low);
  const _high = Number(high);
  return {x:_date, open:_open, close:_close, low:_low, high:_high};
}

const unixTimeToDate = (unixTimestamp: number) => {
  const miliseconds = 1000;
  return new Date(unixTimestamp * miliseconds);
}

const reformatData = ccType => data => {
  const lastFetchTime = unixTimeToDate(data.TimeTo);
  const historyData = data.Data;
  const historicalDatas = [];
  for(let i = 0; i<historyData.length; i++) {
    const perDayData = historyData[i];

    const translateData = createHistoryData(perDayData.time, perDayData.open, perDayData.close, perDayData.low, perDayData.high);
    historicalDatas.push(translateData);
  }
  return {time:lastFetchTime, data:historicalDatas, cryptType: ccType};
};

const formatUrlExchange = (url, exchange) =>
  url.replace(keyReplacement, exchange);

export const fetchBtcHistory = (ccType) => (dispatch) => {
  dispatch({
      types: [FETCH_BTC_HISTORY_BEGIN, FETCH_BTC_HISTORY_SUCCESS, FETCH_BTC_HISTORY_FAILURE],
      fetchConfig: {
          path: formatUrlExchange(btc_history_url, ccType),
          method: "GET",
          success: reformatData(ccType)
      }
  });
}

function handleErrors(data) {
  if (!data || !data.Data || data.Response !== 'Success') {
    throw Error("THERE ARE NO VALID DATA");
  }
  return data;
}

const initialState:BtcHistoryI = {
  items: [],
  cryptType: '',
  lastUpdatedDate: 0,
  error: null
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BTC_HISTORY_BEGIN:
      return {
        ...state,
        error: null,
        items: []
      };
    case FETCH_BTC_HISTORY_SUCCESS:
      return {
        ...state,
        items: action.payload.data.data,
        cryptType: action.payload.data.cryptType,
        lastUpdatedDate: action.payload.data.time
      };
    case FETCH_BTC_HISTORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
