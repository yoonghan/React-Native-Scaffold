import React from 'react';
import {compose} from 'redux';
import {FlatList, Text} from 'react-native';
import hasNetwork from '../../hoc/hasNetwork';
import hasLoadedList from "../../hoc/hasLoadedList";
import {ClickableScrollItem} from './ClickableScrollItem';
import {location_url} from '../../utils/Const';
import {fetchBtcCurrentPrice} from '../../ducks/BtcCurrentPrice';
import {BtcCurrentPriceI} from '../../interfaces/BtcCurrentPriceI';

interface Props extends BtcCurrentPriceI {
}

const PriceListContainer: React.SFC<Props> = (props) => {
  _renderItem = (itemInList) => {
    const {item} = itemInList;
    return <ClickableScrollItem {...item}/>;
  }

  _keyExtractor = (item, index) => '_'+index;

  return <FlatList
     data={props.items}
     renderItem={_renderItem}
     keyExtractor={_keyExtractor}
  />
}

const mapStateToProps = state => (
{
  items: state.btcCurrent.items,
  error: state.btcCurrent.error
});

export default compose(
  hasNetwork,
  hasLoadedList(fetchBtcCurrentPrice, mapStateToProps)
)(PriceListContainer);
