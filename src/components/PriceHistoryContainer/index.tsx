import * as React from 'react';
import {compose} from 'redux';
import hasNetwork from '../../hoc/hasNetwork';
import hasLoadedList from "../../hoc/hasLoadedList";
import {fetchBtcHistory} from '../../ducks/BtcHistory';
import {fromExchange} from '../../utils/Const';
import {ChartContainer} from '../ChartContainer';

interface Props {}
interface State {
  isBarChart: boolean
}

const PriceHistoryContainer: React.SFC<Props> = (props) => {
  return <ChartContainer
     {...props}
  />
}

const mapStateToProps = state => (
{
  items: state.btcHistory.items,
  cryptType: state.btcHistory.cryptType,
  lastUpdatedDate: state.btcHistory.lastUpdatedDate,
  error: state.btcHistory.error
});

export default compose(
  hasNetwork,
  hasLoadedList(fetchBtcHistory(fromExchange), mapStateToProps)
)(PriceHistoryContainer);
