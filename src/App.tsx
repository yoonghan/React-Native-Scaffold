/**
 * Code starts here.
 */
import * as React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import BtcContainer from './components/BtcContainer';
import SampleFetch from './components/SampleFetch';
import reducer from './ducks';
import loggerMiddleware from './middleware/logging';
import fetchMiddleware from './middleware/fetch';

//if there are logging, add into it via
//applyMiddleware(thunk, loggerMiddleware);
const createStoreWithMiddleware = applyMiddleware(fetchMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

interface Props{}
interface States{}

export default class App extends React.Component<Props, States> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <SampleFetch/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  potato: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});
