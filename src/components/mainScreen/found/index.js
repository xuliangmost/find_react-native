/**@flow*/

import * as React from 'react'
import {Text, View} from 'react-native'
import FoundSubTitle from "./foundSubTitle";


type Props = {
	navigation: Object
}


class Found extends React.Component<Props> {

	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text>found</Text>
				<FoundSubTitle title={'期刊专题'}/>
			</View>
		)
	}
}

export default Found