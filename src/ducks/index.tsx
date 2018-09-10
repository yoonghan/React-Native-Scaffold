import { combineReducers } from 'redux';
import * as BtcHistory from './BtcHistory';
import * as BtcCurrentPrice from './BtcCurrentPrice';

export default combineReducers({
  btcHistory : BtcHistory.reducer,
  btcCurrent : BtcCurrentPrice.reducer
});
