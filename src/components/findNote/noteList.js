/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Clipboard,
	Alert,

} from 'react-native'

type Props = {
	deleteVisible: boolean,
	navigation: Object,
	value: Object,
	onPress?: Function,
	deltetNote?: Function,
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

	copyToCli = async (content: string) => {
		Alert.alert('复制成功', '');
		await  Clipboard.setString(content);
	};

	render () {
		const {deleteVisible} = this.state;
		const {value, onPress, deltetNote} = this.props;
		return (
			<View style={[styles.note_container]}>
				<TouchableOpacity
					onPress={() => {
						deltetNote && deltetNote(value.id)
					}}
					activeOpacity={.7}>
					<View style={[styles.delete_container, {marginLeft: deleteVisible ? 0 : -50}]}>
						<Text style={{color: '#fff', fontSize: 14}}>删除</Text>
					</View>
				</TouchableOpacity>

				<View style={styles.note_content}>
					<TouchableOpacity
						onPress={() => onPress && onPress()}
						style={{flex: 1, justifyContent: 'center'}} activeOpacity={.7}>
						<Text numberOfLines={2} style={styles.note_title}>{value.title}</Text>
						<Text numberOfLines={2} style={styles.note_description}>{value.content}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () => {
							await this.copyToCli(value.content)
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
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red'
	},
	note_container: {
		backgroundColor: '#fff',
		height: 50,
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
	note_title: {
		fontSize: 18,
		color: '#000',
		flex: 1,
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