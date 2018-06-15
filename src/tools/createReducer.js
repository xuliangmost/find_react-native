/** @flow*/

export default function createReducer (initialState: any, handlers: Object) {
  return function reducer (state: Object = initialState, action: Object): any {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
