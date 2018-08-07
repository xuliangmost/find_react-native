/**@flow*/
import * as React from 'react'
import MainScreen from './components/mainScreen'
import ChatView from './components/mainScreen/chatView'
import Login from './components/login'
import Music from './components/music/home/index'
import WebView from './components/_webView'
import FindNote from "./components/findNote";

import EditAndAddNote from "./components/findNote/editAndAddNote";

const MainRoute = {
	MainScreen: {
		screen: MainScreen,
		path: 'mainScreen/:id/name'
	},
	Login: {
		screen: Login,
		path: 'login'
	},
	ChatView: {
		screen: ChatView,
		path: 'charView/:title'
	},
	WebView: {
		screen: WebView,
		path: 'WebView/:id'
	},
	WebView_: {
		screen: WebView,
		path: 'WebView_/:id'
	},
	FindNote: {
		screen: FindNote
	},
	EditAndAddNote: {
		screen: EditAndAddNote
	}
};

const MusicRoute = {
	Music: {
		screen: Music,
		path: 'music'
	},
};

export const RouteConfig = {...MainRoute, ...MusicRoute,};