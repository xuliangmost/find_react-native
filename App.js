/** @flow*/

import React from 'react'
import App from './src/routes'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './src/reducer'


function configureStore (initialState: Object): Function {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
const Page = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
export default Page
export {store}