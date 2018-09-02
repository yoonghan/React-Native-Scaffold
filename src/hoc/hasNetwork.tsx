import React from 'react';
import { NetInfo } from 'react-native';
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

    async componentWillMount() {
      NetInfo.isConnected.fetch().then(isConnected => {
        this.setState((prevState) => ({
          isChecking: false,
          isConnectable: isConnected
        }));
      });
    }

    render() {
      const {isChecking, isConnectable} = this.state;
      return !isChecking && (isConnectable ?<Component {...this.props}/>:<ErrorText>No internet connection detected</ErrorText>);
    }
  }


export default hasNetwork;
