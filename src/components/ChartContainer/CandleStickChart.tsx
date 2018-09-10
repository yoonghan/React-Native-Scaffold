import React from 'react';
import PropTypes from 'prop-types';
import { VictoryAxis, VictoryCandlestick, VictoryChart, VictoryTheme } from "victory-native";
import {BtcHistoryItemI} from '../../interfaces/BtcHistoryListI';

interface Props {
  items: Array<BtcHistoryItemI>;
}

export const CandleStickChart: React.SFC<Props> = (props) => {
  return(
    <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 8 }}
        scale={{ x: "time" }}
      >
      <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth() + 1}`}/>
      <VictoryAxis dependentAxis/>
      <VictoryCandlestick
        candleColors={chartStyles}
        data={props.items}
      />
    </VictoryChart>
  );
}

const chartStyles = { positive: "#5bff5b", negative: "#c43a31" };

export const CandleStickChartItemProps = {
  x: PropTypes.object.isRequired,
  open: PropTypes.number.isRequired,
  close: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}

export const CandleStickChartProps = {
  items: PropTypes.arrayOf(PropTypes.shape(CandleStickChartItemProps)).isRequired,
};

CandleStickChart.propTypes = CandleStickChartProps;
