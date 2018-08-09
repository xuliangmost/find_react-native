/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Text
} from 'react-native'
import RefreshControls from "../common/refreshControls";

type Props = {
	navigation: Object
}
const list = [];
for (let i = 0; i < 20; i++) {
	list.push(i)
}
class ScanCode extends React.Component<Props, any> {

	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1}}>
				<RefreshControls>
					{
						list.map(ele => {
							return (
								<Text style={styles.text} key={ele}>{ele}</Text>
							)
						})
					}
				</RefreshControls>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	rectangleContainer: {},
	rectangle: {},
	camera: {},
	text: {height: 80, textAlign: 'center'}
});
export default ScanCode