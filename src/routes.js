/**
 * @flow
 */

import React, {Component} from 'react';
import {
	Animated, AppState, Easing,
	Linking, Platform, StatusBar, StyleSheet,
	View, Text,
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import {RouteConfig} from './routeList'
import {connect} from 'react-redux'
import {Toast} from 'antd-mobile-rn'
import {getPageParams} from "./tools/tool"
import {isIphoneX} from "./tools/checkDevices"
import Share from "./components/common/share"

const Height = isIphoneX() ? 44 : Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const Page = createStackNavigator(RouteConfig, {
	initialRouteName: 'MainScreen',
	// initialRouteName: 'ScanCode',

	headerMode: 'screen',
	initialRouteParams: {
		title: ''
	},
	mode: 'card',
	navigationOptions: {
		gesturesEnabled: true,
		header: () => (
			<View style={{height: Height, backgroundColor: '#fff'}}/>
		)
	},

	transitionConfig: (): any => ({
		transitionSpec: {
			duration: 350,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
		},
		screenInterpolator: sceneProps => {
			const {layout, position, scene} = sceneProps;
			const {index, route} = scene;
			const params = route.params || {};
			const direction = params.direction || 'X';
			const height = layout.initHeight;
			const width = layout.initWidth;
			const translateX = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [direction === 'X_UP' ? -width : width, direction === 'X_UP' ? -width * .2 : 0, 0],
			});
//如果是X_UP  就从左边滑出占据80%的宽度
			let translateY = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [direction === 'Y_UP' ? height : -height, 0, 0],
			});

			const opacity = position.interpolate({
				inputRange: [index - 1, index - 0.5, index],
				outputRange: [0, 1, 1],
			});

			const scale = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [4, 1, 1]
			});

			const transform = direction === 'Y_UP_S' ? [{translateY}, {scaleX: scale}, {scaleY: scale}] : direction === 'Y_UP' ? [{translateY}] : direction === 'X' ? [{translateX}] : [{translateX}];
			return {
				opacity,
				transform: transform
			};
		},
	}),
});


type Props = {
	loginState: boolean,
	navigation: Object
};


const prefix = 'find://app/';
const MainApp = () => <Page uriPrefix={prefix}/>;

class App extends Component<Props, any> {
	setState: Function;
	constructor (props) {
		super(props);
		this.state = {
			states: ''
		};
	}

	componentDidMount () {

		Linking.getInitialURL().then((url) => {
			if (url) {
				Toast.info(`${JSON.stringify(getPageParams(url))}`, 4);
			}
		}).catch(err => console.error('An error occurred', err));
		AppState.addEventListener('change', this._handleAppStateChange);
	}

	componentWillUnmount () {
		AppState.removeEventListener('change', this._handleAppStateChange);
	}

	_handleAppStateChange = (nextState) => {
		if (nextState === 'active') {
			this.setState({states: `${this.state.states}\n active`})
		}
		if (nextState === 'background') {
			this.setState({states: `${this.state.states}\n background`})
		}
	};

	render () {
		return (
			<View style={styles.container}>
				<StatusBar
					translucent={true}
					hidden={false}
					barStyle={'dark-content'}
					backgroundColor={'transparent'}
					animated/>
				<MainApp/>
				<Share/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

function mapState () {
	return {}
}

export default connect(mapState)(App)

