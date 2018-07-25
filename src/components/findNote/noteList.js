/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Clipboard
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Toast} from 'antd-mobile-rn'

type Props = {
	deleteVisible: boolean,
}

class NoteList extends React.Component<Props, any> {

	state = {
		deleteVisible: this.props.deleteVisible,
	};

	componentWillReceiveProps (nextProps: Object) {
		if (this.props.deleteVisible !== nextProps.deleteVisible) {
			this.setState({
				deleteVisible: nextProps.deleteVisible
			})
		}
	}

	componentDidMount () {
	}

	copyToCli = async () => {
		Clipboard.setString('Most is cool man');
		const str = await Clipboard.getString();
		if (str === 'Most is cool man') {
			Toast.success('复制成功', 1.5)
		} else {
			Toast.fail('复制失败', 1.5)
		}
	};

	render () {
		const {deleteVisible} = this.state;
		return (
			<View style={[styles.note_container]}>
				<TouchableOpacity activeOpacity={.7}>
					<Animatable.View transition={'marginLeft'} style={[styles.delete_container, {marginLeft: deleteVisible ? 0 : -50}]}>
						<Text style={{color: '#fff', fontSize: 14}}>删除</Text>
					</Animatable.View>
				</TouchableOpacity>

				<View style={styles.note_content}>
					<TouchableOpacity
						style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} activeOpacity={.7}>
						<Text style={styles.note_description}>123</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							this.copyToCli()
						}}
						activeOpacity={.7}>
						<Text style={styles.note_copy}>复制</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	delete_container: {
		width: 50,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red'
	},
	note_container: {
		backgroundColor: '#fff',
		height: 40,
		flexDirection: 'row',
	},
	note_content: {
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		borderTopWidth: .7,
		borderColor: 'rgba(0,0,0,.1)'
	},
	note_description: {
		fontSize: 14,
		color: '#666',
		flex: 1,
	},
	note_copy: {
		color: '#1890ff',
		padding: 6,
		width: 50,
		textAlign: 'center',
	}
});

export default NoteList