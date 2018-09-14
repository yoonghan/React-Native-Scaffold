/**
 * Middleware service for fetching data from user.
 * Dispatch a message, by referring to SampleFetch component.
 **/
import {Connector} from '../utils/Connector';

handleErrors = data => {
  if (!data) {
    throw Error("THERE ARE NO VALID DATA");
  }
  return data;
}

createSuccessDispatcherMessage = (successType, data) => {
  return {
    type: successType,
    payload: {data}
  }
}

createFailedDispatcherMessage = (errorType, error) => {
  return {
    type: errorType,
    payload: {error}
  }
}

const fetchMiddleware = store => next => action => {
    if (!action || !action.fetchConfig) {
        return next(action)
    }

    let dispatch = store.dispatch
    let config = action.fetchConfig

    const path = config.path || "/"
    const method = config.method || "GET"
    const headers = config.headers
    const body = config.body
    const successHandler = config.success
    const [pendingType, successType, errorType] = action.types;
    dispatch({ type: pendingType });
    Connector({
      method: method,
      url: path,
      data: body,
      headers: headers
    })
    .then(res => res.data)
    .then(handleErrors)
    .then(json => successHandler(json) )
    .then(formattedData => {
      dispatch(createSuccessDispatcherMessage(successType, formattedData));
      //return Promise.resolve(store.getState());
    })
    .catch( error => {
      dispatch(createFailedDispatcherMessage(errorType, error));
      //return Promise.reject(error);
    });
}

export default fetchMiddleware
