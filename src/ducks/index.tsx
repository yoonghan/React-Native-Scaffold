import { combineReducers } from 'redux';
import { fetchBtcHistoryReducer } from './BtcHistory';
import { fetchBtcCurrentPriceReducer } from './BtcCurrentPrice';

export default combineReducers({
  btcHistory : fetchBtcHistoryReducer,
  btcCurrent : fetchBtcCurrentPriceReducer
});
