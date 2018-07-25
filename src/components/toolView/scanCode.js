/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Text
} from 'react-native'
import RefreshControls from "../common/refreshControls";
import ChatHeader from '../common/chatHeader'

type Props = {
	navigation: Object
}

class ScanCode extends React.Component<Props, any> {

	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1}}>
				<ChatHeader value renderRight={() => <Text>right</Text>} back navigation={navigation} title={'测试下拉刷新'}/>
				<RefreshControls/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	rectangleContainer: {},
	rectangle: {},
	camera: {}
});
export default ScanCode