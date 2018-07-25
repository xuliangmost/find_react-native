/**@flow*/
import * as React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList
} from 'react-native'
import ChatHeader from '../common/chatHeader'
import NoteList from './noteList'

type Props = {
	navigation: Object
}

class FindNote extends React.Component<Props, any> {
	state = {
		deleteVisible: false,
		list: [{id: '123'}, {id: '12'}]
	};
	_keyExtractor = (item) => item.id;

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
							<Text style={styles.header_edit}>Note</Text>
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
							deleteVisible={deleteVisible}
							navigation={navigation}
							onPress={() => {
							}}
							value={item}
						/>
					)}
				/>

				<View style={styles.box}>
					<TouchableOpacity
						onPress={() => this.setState({deleteVisible: !deleteVisible})}
						activeOpacity={.7}>
						<View style={styles.control_btn}>
							<Text style={styles.control_btn_text}>编辑</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
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
		marginRight: 8
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