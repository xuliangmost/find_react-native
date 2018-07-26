/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	TextInput,
	Alert
} from 'react-native'
import ChatHeader from '../common/chatHeader'
import uuid from 'uuid/v4'
import {localStorageS} from "../../tools/localStorage";

type Props = {
	navigation: Object,
	callBack: Function
}

class EditAndAddNote extends React.Component<Props, any> {
	noteList: any;

	constructor (props: Object) {
		super(props);
		this.state = {
			id: props.navigation.state.params.id || '',
			hiddenBtn: false,
			title: '',
			content: '',
			noteList: null
		}
	}

	async componentDidMount () {
		localStorageS.getString('noteList').then(response => {
			if (this.state.id) {
				this.setState({
					title: response[this.state.id].title,
					content: response[this.state.id].content,
					noteList: response
				});
			} else {
				this.setState({
					noteList: response
				});
			}
		}).catch(e => {
		});
	}

	save = () => {
		let {title, content, noteList} = this.state;
		if (title === '') {
			Alert.alert('标题不能为空');
			return false
		}
		noteList = noteList || {};
		const id = this.state.id || uuid();
		noteList[id] = {
			title,
			content,
			id
		};
		localStorageS.save('noteList', noteList).then(res => {
			Alert.alert(`${this.state.id ? '修改成功' : '储存成功'}`)
		}).catch(e => {
			Alert.alert('操作失败');
		});
	};

	componentWillUnmount () {
		this.props.navigation.state.params.callBack()
	}

	render () {
		const {navigation} = this.props;
		const {title, content} = this.state;
		return (
			<View style={{flex: 1}}>
				<ChatHeader
					value
					back
					navigation={navigation}
					renderRight={() => (
						<TouchableOpacity
							onPress={this.save}
							activeOpacity={.7}>
							<Text style={styles.header_edit}>保存</Text>
						</TouchableOpacity>
					)}
					title={'FindNote'}/>
				<ScrollView
					keyboardShouldPersistTaps={'handled'}
				>
					<TextInput
						onChange={(event) => this.setState({
							title: event.nativeEvent.text
						})}
						value={title}
						placeholder="请输入标题"
						underlineColorAndroid='transparent'
						style={styles.text_title}/>
					<TextInput
						onChange={(event) => this.setState({
							content: event.nativeEvent.text
						})}
						value={content}
						placeholder="请输入内容"
						ref='input_2'
						underlineColorAndroid='transparent'
						multiline style={styles.text_content}/>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header_edit: {
		color: '#1890ff',
		padding: 6,
		marginRight: 8,
		fontSize: 14
	},
	text_title: {
		backgroundColor: '#fff',
		height: 60,
		marginTop: 10,
	},
	text_content: {
		marginTop: 20,
		backgroundColor: '#fff',
		minHeight: 200,
		padding: 0,
		lineHeight: 16,
		textAlignVertical: 'top'
	},
});
export default EditAndAddNote