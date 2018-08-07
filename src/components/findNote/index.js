/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Alert
} from 'react-native'
import ChatHeader from '../common/chatHeader'
import NoteList from './noteList'
import {localStorageS} from "../../tools/localStorage";

type Props = {
	navigation: Object
}

class FindNote extends React.Component<Props, any> {
	state = {
		deleteVisible: false,
		list: [],
		noteList: {}
	};
	_keyExtractor = (item) => item.id;

	componentDidMount () {
		this.getlist()
	}

	getlist = () => {
		localStorageS.getString('noteList').then(value => {
			const list = Object.keys(value).map(ele => {
				return value[ele]
			});
			this.setState({list, noteList: value})
		}).catch(e => {
		})
	};

	deltetNote = (id: string) => {
		let {noteList, list} = this.state;
		console.log(id);
		delete noteList[id];
		list = list.filter(ele => {
			return ele.id !== id
		});
		localStorageS.save('noteList', noteList).then(res => {
			Alert.alert(`删除成功`);
			this.setState({list})
		}).catch(e => {
			Alert.alert('操作失败');
		});

	};

	render () {
		const {navigation} = this.props;
		const {deleteVisible, list} = this.state;
		return (
			<View style={{flex: 1}}>
				<ChatHeader
					value
					renderRight={() => (
						<TouchableOpacity
							activeOpacity={.7}>
							<Text style={styles.header_edit}>+</Text>
						</TouchableOpacity>
					)}
					back
					navigation={navigation}
					title={'FindNote'}/>

				<FlatList
					getItemLayout={(data, index) => ({length: 56, offset: 56 * index, index})}
					data={list}
					keyExtractor={this._keyExtractor}
					extraData={this.state}
					renderItem={({item}) => (
						<NoteList
							deltetNote={id => this.deltetNote(id)}
							deleteVisible={deleteVisible}
							navigation={navigation}
							onPress={() => navigation.navigate('EditAndAddNote', {direction: 'Y_UP', id: item.id, callBack: () => this.getlist()})}
							value={item}
						/>
					)}
				/>

				<View style={styles.box}>
					<TouchableOpacity
						onPress={() => this.setState({deleteVisible: !deleteVisible})}
						activeOpacity={.7}>
						<View style={styles.control_btn}>
							<Text style={styles.control_btn_text}>{deleteVisible ? '完成' : '编辑'}</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate('EditAndAddNote', {direction: 'Y_UP', callBack: () => this.getlist()})}
						activeOpacity={.7}>
						<View style={styles.control_btn}>
							<Text style={styles.control_btn_text}>新建</Text>
						</View>
					</TouchableOpacity>

				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	header_edit: {
		color: '#1890ff',
		padding: 6,
		marginRight: 8,
		fontSize: 18
	},
	box: {
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		flexDirection: 'row',
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	control_btn: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 150,
		height: 40,
		borderWidth: .7,
		borderColor: 'rgba(0,0,0,.2)',
		borderRadius: 8
	},
	control_btn_text: {
		color: '#1890ff',
	}
});

export default FindNote