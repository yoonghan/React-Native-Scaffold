import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollItem, ScrollItemProps } from './ScrollItem';

export const PriceScrollItemContainer: React.SFC<Props> = (props) => {
  _onPressButton = (exchange) => props.itemClicked(exchange)

  _renderItem = (itemInList) => {
    const {item} = itemInList;
    return (
      <TouchableOpacity onPress={() => _onPressButton(item.fromExchange)}>
        <ScrollItem {...item} itemClicked={props.itemClicked}/>
      </TouchableOpacity>);
  }

  _keyExtractor = (item, index) => '_'+index;

  return <FlatList
    style={styles.durian}
    data={props.items}
    renderItem={_renderItem}
    keyExtractor={_keyExtractor}
  />
}

export const PriceScrollItemContainerProps = {
  items: PropTypes.arrayOf(PropTypes.shape(ScrollItemProps)).isRequired,
  itemClicked: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  durian: {
    alignSelf: 'stretch'
  }
});

PriceScrollItemContainer.propTypes = PriceScrollItemContainerProps;
