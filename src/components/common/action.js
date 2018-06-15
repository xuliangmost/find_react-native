/**@flow*/
import * as types from './types'


export function needLogin (state: boolean, callBack: any) {
//  调起登录界面  登录成功有回调函数 默认是 null
  return (dispatch: Function) => {
    dispatch(setLoginState(state));
    dispatch(setLoginCallBack(callBack));
  }
}

export function setLoginState (state: boolean): Object {
  return {
    type: types.SET_LOGIN_STATE,
    payload: state
  }
}

export function setLoginCallBack (state: any): Object {
  return {
    type: types.SET_LOGIN_CALL_BACK,
    payload: state
  }
}