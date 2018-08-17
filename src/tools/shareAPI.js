import {store} from "../../App";


function OpenShare () {
	store.dispatch({type: 'SET_SHARE_MODAL', payload: true})
}

function CloseShare () {
	store.dispatch({type: 'SET_SHARE_MODAL', payload: false})
}

export {
	OpenShare,
	CloseShare
}