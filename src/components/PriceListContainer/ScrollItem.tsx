import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BtcCurrentPriceItemI} from '../../interfaces/BtcCurrentPriceI';

interface Props extends BtcCurrentPriceItemI {}

export const ScrollItem: React.SFC<Props> = (props) => {

  _renderPrice = (price:number) => price.toFixed(2)
  return(
    <View style={styles.pineapple}>
       <Text style={styles.peach}>{props.fromExchange}</Text>
       <Text style={styles.peach}>{props.toCurrency} {this._renderPrice(props.price)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pineapple: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#424242',
    borderColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  peach: {
    color: '#FFFFFF',
    fontSize: 30
  }
});
