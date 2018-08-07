/** @flow*/
import {combineReducers} from 'redux'
import * as homePageReducer from './components/mainScreen/recommend/reducer'

export default combineReducers(Object.assign({}, {
  ...homePageReducer,
}))