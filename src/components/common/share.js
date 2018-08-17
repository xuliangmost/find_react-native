/**@flow*/
import * as React from 'react'
import {connect} from 'react-redux'
import {
	View,
	Modal,
	Text,
	StyleSheet,
	StatusBar, PanResponder
} from 'react-native'
import {CloseShare} from "../../tools/shareAPI";

type Props = {
	shareModalVisible: boolean
}

class Share extends React.Component<Props, any> {

	_panResponder: Object;

	constructor (props) {
		super(props);
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderRelease: CloseShare,
		});
	}

	state = {
		shareModalVisible: this.props.shareModalVisible
	};

	componentWillReceiveProps (nextProps: Object) {
		if (this.props.shareModalVisible !== nextProps.shareModalVisible) {
			this.setState({shareModalVisible: nextProps.shareModalVisible})
		}
	}

	renderShare = () => {
		return (
			<View
				{...this._panResponder.panHandlers}
				style={styles.shareModal}>
				<StatusBar
					translucent={true}
					hidden={false}
					barStyle={'dark-content'}
					backgroundColor={'rgba(0,0,0,.3)'}
					animated/>
				<View style={styles.shareMask}>
					<Text>123</Text>
				</View>
			</View>
		)
	};

	render () {
		const {shareModalVisible} = this.state;
		return (
			<Modal
				onRequestClose={() => {
					CloseShare()
				}}
				transparent={true}
				visible={shareModalVisible}
				animationType={'fade'}
			>
				{this.renderShare()}
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	shareModal: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	shareMask: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: '#fff',
		width: '100%',
		height: 200
	}
});

function mapState (state) {
	return {
		shareModalVisible: state.shareModalVisible
	}
}

export default connect(mapState)(Share)