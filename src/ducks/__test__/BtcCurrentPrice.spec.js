import 'react-native';
import {reducer} from '../BtcCurrentPrice'; //reducer
import {fetchBtcCurrentBegin, fetchBtcCurrentError, fetchBtcCurrentSuccess} from '../BtcCurrentPrice'; //action
import {FETCH_BTC_CURRENT_FAILURE, FETCH_BTC_CURRENT_BEGIN, FETCH_BTC_CURRENT_SUCCESS} from '../BtcCurrentPrice'; //constants

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        items: [],
        error: null
      }
    )
  })
  it('should return action reducers', () => {
    expect(reducer(undefined, {type: FETCH_BTC_CURRENT_FAILURE, payload: {error: 'Error'}})).toEqual(
      {
        items: [],
        error: 'Error'
      }
    )
    expect(reducer(undefined, {type: FETCH_BTC_CURRENT_BEGIN, items: []})).toEqual(
      {
        items: [],
        error: null
      }
    )
    expect(reducer(undefined, {type: FETCH_BTC_CURRENT_SUCCESS, payload: {data:'test'}})).toEqual(
      {
        items: ['test'],
        error: null
      }
    )
  })
})
