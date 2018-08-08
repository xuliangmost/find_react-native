/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Dimensions,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import {animatedStyles, scrollInterpolators} from "../../tools/animationsCard";

const {width} = Dimensions.get('window');
type Props = {
	data: any,
	sliderWidth?: number,
	itemWidth?: number,
	layout?: string,
	renderItem: Function,
	sliderType?: number
}

class Carouses extends React.Component<Props, any> {
	_carousel: any;

	constructor (props: Object) {
		super(props);
		this.state = {
			data: props.data || [],
			sliderWidth: props.sliderWidth,
			itemWidth: props.itemWidth,
			layout: props.layout,
			renderItem: props.renderItem,
			sliderType: props.sliderType,

		}
	}

	render () {
		const {
			data,
			sliderWidth,
			itemWidth,
			layout,
			renderItem,
			sliderType,
		} = this.state;
		const selefProps = {
			...this.props,
			layout: layout || 'default',
			renderItem: (i, index) => renderItem(i.item),
			scrollInterpolator: scrollInterpolators[`scrollInterpolator${sliderType}`],
			slideInterpolatedStyle: animatedStyles[`animatedStyles${sliderType}`]
		};
		if (!sliderType) {
			delete selefProps.scrollInterpolator;
			delete selefProps.slideInterpolatedStyle
		}
		return (
			<View>
				<Carousel
					layoutCardOffset={18}
					ref={(c) => {
						this._carousel = c;
					}}
					{...selefProps}
					data={data}
					sliderWidth={sliderWidth || width }
					itemWidth={itemWidth || width * .8}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({});
export default Carouses