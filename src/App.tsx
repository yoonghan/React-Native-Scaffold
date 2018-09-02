/**
 * Code starts here.
 */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import BtcContainer from './components/BtcContainer';
import reducer from './ducks';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
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
        <ScrollView>
          <View style={styles.potato}>
            <BtcContainer/>
          </View>
        </ScrollView>
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
