/**@flow*/

import * as React from 'react'
import {Text, View} from 'react-native'


type Props = {
	navigation: Object
}


class Found extends React.Component<Props> {

	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1}}>
				<Text>found</Text>
			</View>
		)
	}
}

export default Found