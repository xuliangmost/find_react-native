/**@flow*/
import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'

type Props = {
	title: string,
}

class FoundSubTitle extends React.Component<Props, any> {

	state = {
		title: this.props.title,
	};

	render () {
		const {title} = this.state;
		return (
			<View style={styles.sub_title}>
				<Text style={styles.sub_title_left}>
					{title}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sub_title: {
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10
	},
	sub_title_left: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
export default FoundSubTitle