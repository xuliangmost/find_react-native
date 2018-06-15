/** @flow*/
import {combineReducers} from 'redux'
import * as homePageReducer from './components/mainScreen/message/reducer'
import * as commonReducer from './components/common/reducer'

export default combineReducers(Object.assign({}, {
  ...homePageReducer,
  ...commonReducer
}))