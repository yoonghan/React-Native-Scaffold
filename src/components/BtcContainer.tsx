import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PriceListContainer from './PriceListContainer';
import PriceHistoryContainer from './PriceHistoryContainer';
import {Label} from './Label';

const BtcContainer: React.SFC<Props> = (props) => {
  return (
    <View style={styles.durian}>
      <View style={styles.jackfruit}>
        <Label text={"Current Price"}/>
        <PriceListContainer/>
      </View>
      <View style={styles.papaya}>
        <Label text={"BTC Trend 30days"}/>
        <PriceHistoryContainer/>
      </View>
    </View>);
}

export default BtcContainer;

const styles = StyleSheet.create({
  durian: {
    flex: 2,
    flexDirection: 'column'
  },
  jackfruit: {
    flex: 1
  },
  papaya: {
    flex: 1
  }
});
