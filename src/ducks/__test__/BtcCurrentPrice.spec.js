import 'react-native';
import {reducer} from '../BtcCurrentPrice'; //reducer
import {fetchBtcCurrentBegin, fetchBtcCurrentError, fetchBtcCurrentSuccess} from '../BtcCurrentPrice'; //action
import {FETCH_BTC_CURRENT_FAILURE, FETCH_BTC_CURRENT_BEGIN, FETCH_BTC_CURRENT_SUCCESS} from '../BtcCurrentPrice'; //constants

describe('actions', () => {
  it('when query begins', () => {
    const expectedAction = {
      type: FETCH_BTC_CURRENT_BEGIN
    }
    expect(fetchBtcCurrentBegin()).toEqual(expectedAction)
  });
  it('when query fails', () => {
    const error = "ERROR";
    const expectedAction = {
      type: FETCH_BTC_CURRENT_FAILURE,
      payload: { error }
    }
    expect(fetchBtcCurrentError(error)).toEqual(expectedAction)
  });
  it('when query successful', () => {
    const btccurrent = "successful";
    const expectedAction = {
      type: FETCH_BTC_CURRENT_SUCCESS,
      payload: { btccurrent }
    }
    expect(fetchBtcCurrentSuccess(btccurrent)).toEqual(expectedAction)
  });
})

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
    expect(reducer(undefined, {type: FETCH_BTC_CURRENT_SUCCESS, payload: {btccurrent: 'test'}})).toEqual(
      {
        items: ['test'],
        error: null
      }
    )
  })
})
