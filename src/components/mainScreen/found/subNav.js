/**@flow*/
import * as React from 'react'
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native'

type Props = {}

class SubNav extends React.Component<Props, any> {

	_scroll: any;

	_renderItem = ({item, index}) => (
		<List scrollToElement={this.scrollToElement} data={item} index={index}/>
	);

	scrollToElement = (index: number) => {
		this._scroll && this._scroll.scrollToIndex({index: index, animated: true, viewPosition: .5});
	};

	render () {
		return (
			<View>
				<FlatList
					ref={scroll => this._scroll = scroll}
					data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]}
					extraData={this.state}
					horizontal={true}
					renderItem={this._renderItem}
					keyExtractor={(item, index) => item.id}
					showsHorizontalScrollIndicator={false}
					snapToAlignment={'center'}
					snapToInterval={80}
				/>
			</View>
		)
	}

}

type ListProps = {
	index: number,
	data: Object,
	scrollToElement: Function
}

class List extends React.Component<ListProps, any> {

	componentWillMount () {

	}

	state = {
		index: this.props.index,
		data: this.props.data,
	};

	componentWillReceiveProps (nextProps) {
		if (this.props.index !== nextProps.index) {
			this.setState({
				index: this.props.index,
			})
		}
		if (this.props.data !== nextProps.data) {
			this.setState({
				data: this.props.data,
			})
		}
	}

	render () {
		const {index} = this.state;
		return (
			<TouchableOpacity
				onPress={() => {
					this.props.scrollToElement(index)
				}}
				activeOpacity={.7}>
				<View style={styles.list_container}>
					<Image
						source={{uri: 'http://img4.imgtn.bdimg.com/it/u=574338445,611051433&fm=200&gp=0.jpg'}}
						style={{width: '100%', height: '100%', borderRadius: 4,}}
					/>
					<View style={styles.mask}>
						<Text style={styles.mask_title}>民谣</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	list_container: {
		width: 80,
		height: 50,
		margin: 10,
	},
	mask: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(190,140,140,.4)',
		justifyContent: 'flex-end'
	},
	mask_title: {
		fontSize: 10,
		color: '#fff',
		fontWeight: '600',
		marginBottom: 6,
		marginLeft: 6
	}
});
export default SubNav