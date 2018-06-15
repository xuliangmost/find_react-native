/**@flow*/
import * as types from './types'

export function add () {
  return (dispatch: Function, getState: Function): any => {
    dispatch(setValue(getState().value + 1))
  }
}

export function reduce () {
  return (dispatch: Function, getState: Function): any => {
    dispatch(setValue(getState().value - 1))
  }
}

export function setValue (state: number) {
  return {
    type: types.SET_VALUE,
    payload: state
  }
}