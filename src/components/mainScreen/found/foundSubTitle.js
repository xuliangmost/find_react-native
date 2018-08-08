/**@flow*/
import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'

type Props = {
	title: string,
	rightTitle?: string
}

class FoundSubTitle extends React.Component<Props, any> {

	state = {
		title: this.props.title,
		rightTitle: this.props.rightTitle,
	};

	render () {
		const {title, rightTitle} = this.state;
		return (
			<View style={styles.sub_title}>
				<Text style={styles.sub_title_left}>
					{title}
				</Text>
				<View style={styles.sub_title_right}>
					<Text style={{color: '#CBCBCB'}}>{rightTitle || '全部'}</Text>
				</View>
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
	},
	sub_title_right: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	right_image: {
		width: 10,
		height: 10
	}
});
export default FoundSubTitle