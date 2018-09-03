import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import withBtcConnectivity from '../../hoc/withBtcConnectivity';
import {withBtcConnectivityI} from '../../hoc/withBtcConnectivity';
import {BtcCurrentPriceItemI} from '../../interfaces/BtcCurrentPriceI';

interface Props extends BtcCurrentPriceItemI, withBtcConnectivityI  {}

const ClickableScrollItemComponent: React.SFC<Props> = (props) => {

  _renderPrice = (price:number) => price.toFixed(2)

  _onPressButton = (exchange) => props.clickAndFetchBtcHistory(exchange)

  return(
    <TouchableOpacity onPress={() => this._onPressButton(props.fromExchange)}>
      <View style={styles.pineapple}>
         <Text style={styles.peach}>{props.fromExchange}</Text>
         <Text style={styles.peach}>{props.toCurrency} {this._renderPrice(props.price)}</Text>
      </View>
    </TouchableOpacity>
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

export const ClickableScrollItem = withBtcConnectivity(ClickableScrollItemComponent);
