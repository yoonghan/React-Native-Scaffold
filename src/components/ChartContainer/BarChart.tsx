import React from 'react';
import PropTypes from 'prop-types';
import {VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
import {BtcHistoryItemI} from '../../interfaces/BtcHistoryListI';

interface Props {
  items: Array<BtcHistoryItemI>;
}

export const BarChart: React.SFC<Props> = (props) => {
  _getBarChartWithPriceAsClosingPrice = (items) => {
    var arr = [];
    for(let i=0; i<items.length; i++) {
      let item = items[i]
      let data = {x: item.x, y: item.close, y0: 1};
      arr.push(data);
    }
    return arr;
  }

  return(
    <VictoryChart
      domainPadding={10}
      scale={{ x: "time" }}
    >
      <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth() + 1}`}/>
      <VictoryAxis dependentAxis/>
      <VictoryBar
        animate={{ duration: 2000, onLoad: { duration: 1000 }}}

        data={_getBarChartWithPriceAsClosingPrice(props.items)}
      />
    </VictoryChart>
  );
}

export const BarChartItemProps = {
  x: PropTypes.object.isRequired,
  close: PropTypes.number.isRequired
}

export const BarChartProps = {
  items: PropTypes.arrayOf(PropTypes.shape(BarChartItemProps)).isRequired,
};

BarChart.propTypes = BarChartProps;
