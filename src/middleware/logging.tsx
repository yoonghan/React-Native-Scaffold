//**Useful only for debugging purposes**/

const loggerMiddleware = store => next => action => {
  console.warn(store);
  next(action);
}

export default loggerMiddleware;
