/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Checkbox} from 'antd-mobile-rn';

const CheckboxItem = Checkbox.CheckboxItem;
type Props = {
	deleteVisible: boolean,
	checked?: boolean,
}

class NoteList extends React.Component<Props, any> {

	state = {
		deleteVisible: this.props.deleteVisible,
		checked: this.props.checked
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

	render () {
		const {deleteVisible, checked} = this.state;
		return (
			<View style={[styles.note_container]}>
				<Animatable.View transition={'marginLeft'} style={[styles.delete_container, {marginLeft: deleteVisible ? 0 : -50}]}>
					<CheckboxItem
						checked={checked}
						onChange={(event: any) => {
							this.setState({checked: event.target.checked});
						}}
					/>
				</Animatable.View>
				<View style={styles.note_content}>
					<Text style={styles.note_description}>123</Text>
					<TouchableOpacity>
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
		width: 200,
	},
	note_copy: {
		color: '#1890ff',
		padding: 6,
		width: 50,
		textAlign: 'center',
	}
});

export default NoteList