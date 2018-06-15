/**@flow*/
import createReducer from '../../tools/createReducer'
import * as types from './types'

export const loginState = createReducer(false, {
  [types.SET_LOGIN_STATE] (state, action) {
    return action.payload
  }
});

export const loginCallBack = createReducer(null, {
  [types.SET_LOGIN_CALL_BACK] (state, action) {
    return action.payload
  }
});