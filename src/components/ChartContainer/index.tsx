import React from "react";
import {Switch} from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { CandleStickChart} from './CandleStickChart';
import PropTypes from 'prop-types';
import { BarChart} from './BarChart';

interface Props {}
interface State {
  isBarChart: boolean
}

export class ChartContainer extends React.PureComponent<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      isBarChart: false
    }
  }

  _convertDateToTime = (dateTime:Date) => dateTime ? dateTime.toLocaleString() : '';

  _toggleSwitch = () => {
    this.setState((prevState) => ({
      isBarChart: !prevState.isBarChart
    }));
  }

  _displayChart = (isBarChart) => {
    if(isBarChart) {
      return <BarChart items={this.props.items}/>
    }
    else {
      return <CandleStickChart items={this.props.items}/>
    }
  }

  render() {
    return (
        <View style={styles.carrot}>
          <Text style={styles.lemon}>Updated {this.props.cryptType} On: {this._convertDateToTime(this.props.lastUpdatedDate)}</Text>
          <Switch
              onValueChange = {this._toggleSwitch}
              value = {this.state.isBarChart}/>
          <View style={styles.cabbage}>
            {this._displayChart(this.state.isBarChart)}
          </View>
        </View>);
    }
}

const styles = StyleSheet.create({
  carrot: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  orange: {
    fontSize: 10,
    color: '#333333',
    textAlign: "center",
    alignItems: "center"
  },
  lemon: {
    fontSize: 14,
    color: '#333333',
    paddingLeft: 10
  },
  cabbage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export const ChartContainerProps = {
  cryptType: PropTypes.string.isRequired,
  lastUpdatedDate: PropTypes.object.isRequired,
};

ChartContainer.propTypes = ChartContainerProps;
