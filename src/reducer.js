/** @flow*/
import {combineReducers} from 'redux'
import * as commonReducer from './components/common/reducer'

export default combineReducers(Object.assign({}, {
	...commonReducer,
}))