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
		data: [1, 2, 3]
	};

	_renderItem = ({item, index}) => {
		return (
			<View style={{height: '100%'}}>
				<ImageBackground
					style={{height: '100%'}}
					source={{uri: 'http://a.hiphotos.baidu.com/baike/pic/item/38dbb6fd5266d0167927ca029b2bd40735fa35d9.jpg'}}>
					<Text>111</Text>
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
	}
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