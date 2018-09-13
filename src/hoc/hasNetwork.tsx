import * as React from 'react';
import produce from "immer";
import { NetInfo, Platform } from 'react-native';
import {ErrorText} from '../components/ErrorText';

interface Props {}

interface States {
  isChecking: boolean;
  isConnectable: boolean;
}

const hasNetwork = (Component: React.ComponentType) =>
  class hasNetworkHOC extends React.Component<Props, States> {
    constructor(props) {
      super(props);
      this.state = {
        isChecking: true,
        isConnectable: false
      }
    }

    updateConnection = (isConnected) => {
      this.setState(produce(draft => {
            draft.isChecking = false;
            draft.isConnectable = isConnected;
        })
      );
    }

    handleFirstConnectivityChange = (isConnected) => {
      this.updateConnection(isConnected);
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
    }

    async componentWillMount() {
      if (Platform.OS === 'ios') {
  	     NetInfo.isConnected.addEventListener('connectionChange', this.handleFirstConnectivityChange);
      } else {
        NetInfo.isConnected.fetch().then(isConnected => {
          this.updateConnection(isConnected);
        });
      }
    }

    render() {
      const {isChecking, isConnectable} = this.state;
      return !isChecking && (isConnectable ?<Component {...this.props}/>:<ErrorText>No internet connection detected</ErrorText>);
    }
  }

export default hasNetwork;
