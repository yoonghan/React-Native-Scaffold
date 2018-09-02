import React from 'react';
import { PermissionsAndroid } from 'react-native';
import {ErrorText} from '../components/ErrorText';
import { requestLocationPermission } from '../utils/RequestPermission';

interface Props {
}

interface States {
  allowed: boolean;
}

const hasLocationPermission = (Component: React.ComponentType) =>
  class LocationPermissionHOC extends React.Component<Props, States> {
    constructor(props) {
      super(props);
      this.state = {
        allowed: false
      }
    }

    async componentWillMount() {
      var allowedResult = await requestLocationPermission();
      if(allowedResult) {
        this.setState((prevState) => ({
          allowed: allowedResult
        }));
      }
    }

    render() {
      return this.state.allowed?<Component {...this.props}/>:<ErrorText>Can't access location</ErrorText>;
    }
  }


export default hasLocationPermission;
