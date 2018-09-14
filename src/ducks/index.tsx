import { combineReducers } from 'redux';
import * as BtcHistory from './BtcHistory';
import * as BtcCurrentPrice from './BtcCurrentPrice';
import * as SampleFetch from './SampleFetch';

export default combineReducers({
  btcHistory : BtcHistory.reducer,
  btcCurrent : BtcCurrentPrice.reducer,
  sampleFetch: SampleFetch.reducer
});
