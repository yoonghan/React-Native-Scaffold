import 'react-native';
import {reducer} from '../BtcHistory'; //reducer
import {fetchBtcHistoryBegin, fetchBtcHistoryError, fetchBtcHistorySuccess} from '../BtcHistory'; //action
import {FETCH_BTC_HISTORY_BEGIN, FETCH_BTC_HISTORY_SUCCESS, FETCH_BTC_HISTORY_FAILURE} from '../BtcHistory'; //constants

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        items: [],
        cryptType: '',
        lastUpdatedDate: 0,
        error: null
      }
    )
  })
  it('should return action reducers', () => {
    expect(reducer(undefined, {type: FETCH_BTC_HISTORY_FAILURE, payload: {error: 'Error'}})).toEqual(
      {
        items: [],
        cryptType: '',
        lastUpdatedDate: 0,
        error: 'Error'
      }
    )
    expect(reducer(undefined, {type: FETCH_BTC_HISTORY_BEGIN, items: []})).toEqual(
      {
        error: null,
        items: [],
        cryptType: '',
        lastUpdatedDate: 0
      }
    )
    expect(reducer(undefined, {type: FETCH_BTC_HISTORY_SUCCESS, payload: {data: {data: ['test'], time: 1, cryptType: 'test'}}})).toEqual(
      {
        error: null,
        items: ['test'],
        cryptType: 'test',
        lastUpdatedDate: 1
      }
    )
  })
})
