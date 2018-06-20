/** @flow*/
import {combineReducers} from 'redux'
import * as homePageReducer from './components/mainScreen/message/reducer'

export default combineReducers(Object.assign({}, {
  ...homePageReducer,
}))