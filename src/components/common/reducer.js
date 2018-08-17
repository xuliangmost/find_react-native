/**@flow*/
import createReducer from '../../tools/createReducer'
import * as types from './types'

export const shareModalVisible = createReducer(false, {
	[types.SET_SHARE_MODAL] (state: Object, action: Object) {
		return action.payload
	}
});