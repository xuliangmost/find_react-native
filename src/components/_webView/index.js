/**@flow*/
import * as React from 'react'
import {
	StyleSheet,
	WebView,
	Text,
	View,
} from 'react-native'
import {js, resolveMessage} from "./injectJacvascript";
import ChatHeader from '../common/chatHeader'
import web from './web.html'

type Props = {
	navigation: Object
}


class WebView_ extends React.Component<Props, any> {

	state = {
		url: this.props.navigation.state.params.url || null,
	}

	onMessage = (e: Object) => {
		let obj = JSON.parse(e.nativeEvent.data, (k, v) => {
			if (v.indexOf && v.indexOf('function') > -1) {
				return eval("(function(){return " + v + " })()")
			}
			return v;
		});
		resolveMessage(obj, this.props.navigation);
	};

	componentWillUnmount () {
		this.props.navigation.state.params.callBack &&
		this.props.navigation.state.params.callBack()
	}

	render () {
		const {url} = this.state;
		const {navigation} = this.props;
		return (
			<View style={{flex: 1}}>

				<ChatHeader value renderRight={() => <Text>right</Text>} back navigation={navigation} title={'webView'}/>

				<WebView
					style={styles.webView}
					injectedJavaScript={js}
					javaScriptEnabled={true}
					onMessage={this.onMessage}
					source={url ? {uri: url} : web}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	webView: {
		flex: 1,
	}
})

export default WebView_