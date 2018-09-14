import * as React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {ErrorText} from '../components/ErrorText';
import {Loader} from '../components/Loader';

interface Props {}

interface States {}

const hasLoadedList = (dispatchFunc) => (Component: React.ComponentType) =>
  class LoaderHOC extends React.Component<Props, States> {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
        dispatchFunc(this.props.dispatch); 
    }

    _isEmpty = (items) => {
        if(!items || items === null || items.length == 0) {
          return true;
        }
        return false;
    }

    _isError = (error) => {
      if(error) {
        return true;
      }
      return false;
    }

    render() {
      const {loading, error, dispatch, ...values} = this.props;
      return (this._isEmpty(values.items) ? (this._isError(error) ? <ErrorText>{error}</ErrorText> : <Loader/>):<Component {...values}/>)
    }
  }

const composedHoc = (fetchFunc, mapStateToProps) => {
  return compose(
    connect(mapStateToProps),
    hasLoadedList(fetchFunc)
  )
};

export default composedHoc;
