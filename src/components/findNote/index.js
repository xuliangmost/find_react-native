/**@flow*/
import * as React from 'react'
import {
	View,
	Text
} from 'react-native'
import ChatHeader from '../common/chatHeader'

type Props = {
	navigation: Object
}

class FindNote extends React.Component<Props, any> {
	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1}}>
				<ChatHeader value renderRight={() => <Text>right</Text>} back navigation={navigation} title={'FindNote'}/>
				<Text>find note</Text>
			</View>
		)
	}
}

export default FindNote