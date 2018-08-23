/**@flow*/
import * as React from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Platform,
	Text,
	Image
} from 'react-native'

type Props = {
	navigation: Object,
	jumpTo: Function,
	activeTintColor: string,
	inactiveTintColor: string,
	renderIcon: any,
	getLabelText: any
}

class TabBar extends React.Component<Props, any> {

	renderItem = (route: Object, index: number) => {
		const {
			navigation,
			jumpTo,
		} = this.props;
		const focused = index === navigation.state.index;
		const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
		let TabScene = {
			focused: focused,
			route: route,
			tintColor: color
		};
		return (
			<TouchableOpacity
				key={route.key}
				activeOpacity={.8}
				style={styles.tabItem}
				onPress={() => {
					jumpTo(route.key);
				}}
			>
				<View
					style={styles.tabItem}>
					{this.props.renderIcon(TabScene)}
					<Text style={{...styles.tabText, color}}>{this.props.getLabelText(TabScene)}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render () {
		const {navigation,} = this.props;
		const {routes,} = navigation.state;
		// routes.splice(routes.length / 2, 0, {type: 'btn'});
		return (
			<View style={styles.tab}>
				{
					routes && routes.map((route, index) => {
						return (
							this.renderItem(route, index)
						)
					})
				}
			</View>
		);
	}
}

const styles = {
	tab: {
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#ddd',
		width: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 4
	},
	tabItem: {
		width: SCALE(100),
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabText: {
		fontSize: FONT(10),
		color: '#C7b7b7b'
	},
	tabTextChoose: {
		color: '#f3474b'
	},
	tabImage: {
		width: SCALE(42),
		height: SCALE(42),
	},
	tabAdd: {
		transform: [
			{scale: 1.4}
		]
	}
};

function FONT (number) {
	return number
}

function SCALE (number) {
	return number
}

export default TabBar