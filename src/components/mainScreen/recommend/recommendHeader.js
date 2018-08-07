/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Image
} from 'react-native'

type Props = {}

class RecommendHeader extends React.Component<Props, any> {
	render () {
		return (
			<View style={styles.header_container}>
				<View style={styles.header_left}>
					<Text style={styles.header_luo}>落</Text>
					<View>
						<Text style={styles.header_title}>星期三</Text>
						<Text style={styles.header_title}>大晴天</Text>
					</View>
				</View>
				<View style={styles.header_right}>
					<Image style={styles.header_search} source={require('../images/recommend/search.png')}/>
					<Image style={styles.header_more} source={require('../images/recommend/more.png')}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header_container: {
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
	},
	header_left: {
		flexDirection: 'row',
		height: 80,
		alignItems: 'center'
	},
	header_luo: {
		fontSize: 20,
		color: '#000',
		marginRight: 10
	},
	header_title: {
		fontSize: 12,
		color: 'rgba(0,0,0,.8)',
	},
	header_right: {
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
	},
	header_search: {
		width: 18,
		height: 18,
		padding: 4
	},
	header_more: {
		width: 18,
		height: 18,
		padding: 4,
		marginLeft: 16
	}
});

export default RecommendHeader