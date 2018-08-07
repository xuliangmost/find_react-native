/** @flow*/
import createReducer from '../../../tools/createReducer'
import * as types from './types'

export const value = createReducer(0, {
  [types.SET_VALUE] (state: Object, action: Object): string | number {
    return action.payload
  }
});