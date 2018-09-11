import * as React from 'react';
import {compose} from 'redux';
import {PriceScrollItemContainer} from '../PriceScrollItemContainer';
import hasNetwork from '../../hoc/hasNetwork';
import hasLoadedList from "../../hoc/hasLoadedList";
import {location_url} from '../../utils/Const';
import withBtcConnectivity from '../../hoc/withBtcConnectivity';
import {fetchBtcCurrentPrice} from '../../ducks/BtcCurrentPrice';
import {BtcCurrentPriceI} from '../../interfaces/BtcCurrentPriceI';

interface Props extends BtcCurrentPriceI {
}

const PriceListContainer: React.SFC<Props> = (props) => {
  return <PriceScrollItemContainer
     items={props.items}
     itemClicked={props.clickAndFetchBtcHistory}
  />
}

const mapStateToProps = state => (
{
  items: state.btcCurrent.items,
  error: state.btcCurrent.error
});

export default compose(
  hasNetwork,
  hasLoadedList(fetchBtcCurrentPrice, mapStateToProps),
  withBtcConnectivity
)(PriceListContainer);
