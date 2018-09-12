import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

export const ScrollItem: React.SFC<Props> = (props) => {
  _renderPrice = (price:number) => price.toFixed(2)

  return(
    <View style={styles.pineapple}>
       <Text style={styles.peach}>{props.fromExchange}</Text>
       <Text style={styles.peach}>{props.toCurrency} {_renderPrice(props.price)}</Text>
    </View>
  );
}

ScrollItem.propTypes = ScrollItemProps;

export const ScrollItemProps = {
  price: PropTypes.number.isRequired,
  fromExchange: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired
};

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
