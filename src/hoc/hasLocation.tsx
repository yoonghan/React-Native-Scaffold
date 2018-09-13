import * as React from 'react';
import produce from "immer";
import { PermissionsAndroid } from 'react-native';
import {Loader} from '../components/Loader';
import {ErrorText} from '../components/ErrorText';

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface Props {}

interface States {
  isLoading: boolean;
  isError: boolean;
  coords: Coordinates;
}

const hasLocation = (timeout:number) => (Component: React.ComponentType) =>
  class LocationHOC extends React.Component<Props, States> {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isError: false,
        coords:{longitude:0, latitude: 0}
      }
    }

    _setSuccess = (response) => {
      this.setState(produce(draft => {
            draft.isLoading = false;
        })
      );
    }

    _setFailure = (response) => {
      this.setState(produce(draft => {
            draft.isLoading = false;
            draft.isError = true
        })
      );
    }

    async componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        this._setSuccess,
        this._setFailure,
        {enableHighAccuracy: true, timeout: timeout});
    }

    render() {
      return (this.state.isLoading ? <Loader/>:
        this.state.isError? <ErrorText>Can't get your location, please check your location setting</ErrorText>:<Component {...this.state}/>);
    }
  }

export default hasLocation;
