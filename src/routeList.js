/**@flow*/
import * as React from 'react'
import MainScreen from './components/mainScreen'
import ChatView from './components/mainScreen/chatView'
import Login from './components/login'
import Music from './components/music/home/index'
import WebView from './components/_webView'
import FindNote from "./components/findNote";
import ScanCode from "./components/toolView/scanCode";

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
	FindNote: {
		screen: FindNote
	},
	EditAndAddNote: {
		screen: EditAndAddNote
	},
	ScanCode: {
		screen: ScanCode
	},
};

const MusicRoute = {
	Music: {
		screen: Music,
		path: 'music'
	},
};

export const RouteConfig = {...MainRoute, ...MusicRoute,};