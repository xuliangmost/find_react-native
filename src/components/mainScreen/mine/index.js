/**@flow*/
import {FlatList, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import * as React from 'react'
import {connect} from 'react-redux'
import {HomePageAction} from "./actions";
import {CommonActions} from "../../common/actions";
import MessageList from './messageList'
import {getMessageList} from "./reuestAction";
import {Toast} from 'antd-mobile-rn'
import ChatView from "../chatView";
import {store} from "../../../../App";
import {OpenShare} from "../../../tools/shareAPI";

type Props = {
	navigation: Object,
	add: () => void,
	reduce: () => void,
	needLogin: (state: boolean, callback: any) => void
}

class Message extends React.Component<Props, any> {
	navigator: Object;
	setState: Function;
	viewDidAppear: Object;
	lastBackPressed: number;
	backHandlers: Object;
	state = {
		messages: [],
		drawerOpen: false,
		drawerDisabled: false,
	};

	login = () => {
		this.props.navigation.navigate('Login', {direction: 'Y_UP_S', callBack: () => this.getList()})
	};

	componentDidMount () {

	}

	getList = async () => {
		Toast.loading('', 0);
		let messages = await getMessageList();
		this.setState({messages: this.state.messages.concat(messages)});
		Toast.hide();
	};

	_keyExtractor = (item) => item.id;

	render () {
		const {navigation} = this.props;
		const {messages} = this.state;
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={this.login}
				>
					<Text style={Styles.btn}>
						login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => navigation.replace('Music', {direction: 'X'})}
				>
					<Text style={Styles.btn}>
						Music
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => {
						OpenShare()
					}}
				>
					<Text style={Styles.btn}>
						Share
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => {
						console.log(this.props)
						this.props.navigation.navigate('Found')
					}}
				>
					<Text style={Styles.btn}>
						Share
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => navigation.navigate('FindNote', {direction: 'X'})}
				>
					<Text style={Styles.btn}>
						打开Find 笔记
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => {
						Linking.canOpenURL('weixin://').then(supported => {
							if (supported) {
								Linking.openURL('weixin://');
							} else {
								Toast.info(`请先安装XXX`);
							}
						});
					}}
				>
					<Text style={Styles.btn}>
						打开微信
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{width: '50%', backgroundColor: '#B1E7FF', alignSelf: 'center'}}
					onPress={() => navigation.navigate('WebView', {direction: 'X'})}
				>
					<Text style={Styles.btn}>
						打开webView
					</Text>
				</TouchableOpacity>

				<FlatList
					getItemLayout={(data, index) => ({length: 56, offset: 56 * index, index})}
					data={messages}
					keyExtractor={this._keyExtractor}
					extraData={this.state}
					renderItem={({item}) => (
						<MessageList
							navigation={navigation}
							onPress={() => {
								navigation.navigate('ChatView', {title: item.name, direction: 'X'})
							}}
							value={item}
						/>
					)}
				/>

			</View>
		)
	}
}

const Styles = StyleSheet.create({
	btn: {
		padding: 10,
		backgroundColor: '#ffffff'
	},
});

function mapState () {
	return {}
}

export default connect(mapState, {...HomePageAction, ...CommonActions})(Message)