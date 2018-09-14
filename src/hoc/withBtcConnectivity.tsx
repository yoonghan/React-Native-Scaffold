import * as React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchBtcHistory} from '../ducks/BtcHistory';

export interface withBtcConnectivityI {
  clickAndFetchBtcHistory(cryptoType:string): void;
}

interface Props {}

interface States {}

const withBtcConnectivity = (Component: React.ComponentType) =>
  class BtcConnectivity extends React.Component<Props, States> {
    constructor(props) {
      super(props);
    }

    clickAndFetchBtcHistory = (cryptoType:string) => {
        fetchBtcHistory(cryptoType)(this.props.dispatch);
    }

    render() {
      const {dispatch, ...functions} = this.props;
      return <Component {...functions} clickAndFetchBtcHistory={this.clickAndFetchBtcHistory}/>
    }
  }

const mapStateToProps = state => ({});

export default compose(
  connect(mapStateToProps),
  withBtcConnectivity
);
