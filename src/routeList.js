/**@flow*/
import * as React from 'react'
import MainScreen from './components/mainScreen'
import ChatView from './components/mainScreen/chatView'
import Login from './components/login'
import Music from './components/music/home/index'
import WebView from './components/_webView'
import ScanCode from "./components/toolView/scanCode";
import FindNote from "./components/findNote";

import Camera from "./components/camera/index"
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
	ScanCode: {
		screen: ScanCode,
		path: 'ScanCode/:id'
	},
	FindNote: {
		screen: FindNote
	}
};

const MusicRoute = {
	Music: {
		screen: Music,
		path: 'music'
	},
};

const CameraRoute = {
  Camera: {
    screen: Camera,
    path: 'Camera'
  },
};

export const RouteConfig = {...MainRoute, ...MusicRoute,...CameraRoute};