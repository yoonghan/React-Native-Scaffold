import 'react-native';
import {reducer} from '../BtcHistory'; //reducer
import {fetchBtcHistoryBegin, fetchBtcHistoryError, fetchBtcHistorySuccess} from '../BtcHistory'; //action
import {FETCH_BTC_HISTORY_BEGIN, FETCH_BTC_HISTORY_SUCCESS, FETCH_BTC_HISTORY_FAILURE} from '../BtcHistory'; //constants

describe('actions', () => {
  it('when query begins', () => {
    const expectedAction = {
      type: FETCH_BTC_HISTORY_BEGIN
    }
    expect(fetchBtcHistoryBegin()).toEqual(expectedAction)
  });
  it('when query fails', () => {
    const error = "ERROR";
    const expectedAction = {
      type: FETCH_BTC_HISTORY_FAILURE,
      payload: { error }
    }
    expect(fetchBtcHistoryError(error)).toEqual(expectedAction)
  });
  it('when query successful', () => {
    const btchistory = "successful";
    const expectedAction = {
      type: FETCH_BTC_HISTORY_SUCCESS,
      payload: { btchistory }
    }
    expect(fetchBtcHistorySuccess(btchistory)).toEqual(expectedAction)
  });
})

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
    expect(reducer(undefined, {type: FETCH_BTC_HISTORY_SUCCESS, payload: {btchistory: {data: ['test'], time: 1, cryptType: 'test'}}})).toEqual(
      {
        error: null,
        items: ['test'],
        cryptType: 'test',
        lastUpdatedDate: 1
      }
    )
  })
})
