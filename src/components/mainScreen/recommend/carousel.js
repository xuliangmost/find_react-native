/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	ImageBackground
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

const {width} = Dimensions.get('window');
type Props = {}

class Carousels extends React.Component<Props, any> {
	_carousel: any;

	state = {
		data: [{name: '少年', total: '97'}, {name: '烟花般绽放的时代', total: '97'}, {name: '少女', total: '97'}]
	};

	_renderItem = ({item, index}) => {
		return (
			<View style={{height: '100%'}}>
				<ImageBackground
					style={{height: '100%', borderRadius: 4}}
					source={{uri: 'http://a.hiphotos.baidu.com/baike/pic/item/38dbb6fd5266d0167927ca029b2bd40735fa35d9.jpg'}}>
					<View style={[styles.float_view, {bottom: 22}]}>
						<Text style={styles.float_view_name}>{item.name}</Text>
					</View>
					<View style={styles.float_view}>
						<Text style={styles.float_view_total}>Vol.{item.total}</Text>
					</View>
				</ImageBackground>
			</View>
		);
	};


	render () {
		const {data} = this.state;
		return (
			<View style={styles.box}>
				<Carousel
					layoutCardOffset={18}
					ref={(c) => {
						this._carousel = c;
					}}
					data={data}
					renderItem={this._renderItem}
					sliderWidth={width}
					itemWidth={width * .6}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	box: {
		height: 260,
	},
	float_view: {
		position: 'absolute',
		left: 10,
		bottom: 5,
	},
	float_view_name: {
		fontSize: 14,
		color: '#fff'
	},
	float_view_total: {
		backgroundColor: '#fff',
		color: '#999',
		fontSize: 10,
		borderRadius: 2,
		paddingLeft: 4,
		paddingRight: 4,
		fontWeight: 'bold',
		paddingTop:1,
		paddingBottom:1,
	},
});

function wp (percentage) {
	// const value = (percentage * viewportWidth) / 100;
	// return Math.round(value);
}

// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);
// export const sliderWidth = viewportWidth;
// export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default Carousels