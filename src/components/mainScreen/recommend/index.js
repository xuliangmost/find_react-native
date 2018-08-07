/**@flow*/
import {
	BackHandler, StyleSheet,
	ToastAndroid, View,
	ScrollView,
	Image
} from 'react-native'
import * as React from 'react'
import {connect} from 'react-redux'
import {HomePageAction} from "./actions";
import {CommonActions} from "../../common/actions";
import RecommendHeader from "./recommendHeader";
import SubTitle from "./subTitle";
import Carousels from './carousel'

type Props = {
	navigation: Object,
	add: () => void,
	reduce: () => void,
	needLogin: (state: boolean, callback: any) => void
}

class Message extends React.Component<Props, any> {
	setState: Function;
	viewDidAppear: Object;
	lastBackPressed: number;
	backHandlers: Object;
	state = {};

	login = () => {
		// this.props.navigation.navigate('Login', {direction: 'Y_UP_S', callBack: () => this.getList()})
	};

	componentDidMount () {
		this.viewDidAppear = this.props.navigation.addListener(
			'willFocus',
			() => {
				this.backHandlers = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
			}
		);
		this.viewDidAppear = this.props.navigation.addListener(
			'willBlur',
			() => {
				this.backHandlers && this.backHandlers.remove();
			}
		)
	}

	onBackAndroid = (): boolean => {
		if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
			BackHandler.exitApp();
		}
		this.lastBackPressed = Date.now();
		ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
		return true;
	};

	render () {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<ScrollView>
					<RecommendHeader/>
					<View style={styles.header_image_box}>
						<Image style={styles.header_image} source={{uri: 'http://i.dyt7.cc/5e/6b/98/84/94/3d/f2/42/80/c3/64/4c/18/d9/6d/47.jpg'}}/>
					</View>
					<SubTitle title={'最新期刊'}/>
					<Carousels/>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header_image_box: {
		paddingLeft: 10,
		paddingRight: 10,
		shadowOffset: {width: 0, height: 2},
		shadowColor: '#000',
		shadowOpacity: .2,
		shadowRadius: 2,
	},
	header_image: {
		height: 160,
		borderRadius: 10
	}
});

function mapState () {
	return {}
}

export default connect(mapState, {...HomePageAction, ...CommonActions})(Message)