import {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {StyleSheet, Dimensions, Platform} from 'react-native';

// Photo album effect
function scrollInterpolator1 (index, carouselProps) {
	const outputRange = [3, 2, 1, 0, -1];
	const inputRange = getInputRangeFromIndexes(outputRange, index, carouselProps);

	return {inputRange, outputRange};
}

function animatedStyles1 (index, animatedValue, carouselProps) {
	const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
	const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

	return {
		zIndex: carouselProps.data.length - index,
		opacity: animatedValue.interpolate({
			inputRange: [2, 3],
			outputRange: [1, 0],
			extrapolate: 'clamp'
		}),
		transform: [{
			rotate: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2, 3],
				outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
				extrapolate: 'clamp'
			})
		}, {
			[translateProp]: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2, 3],
				outputRange: [
					-sizeRef * 0.5,
					0,
					-sizeRef, // centered
					-sizeRef * 2, // centered
					-sizeRef * 3 // centered
				],
				extrapolate: 'clamp'
			})
		}]
	};
}

// Perspective effect
function scrollInterpolator2 (index, carouselProps) {
	const outputRange = [2, 1, 0, -1];
	const inputRange = getInputRangeFromIndexes(outputRange, index, carouselProps);

	return {inputRange, outputRange};
}

function animatedStyles2 (index, animatedValue, carouselProps) {
	const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
	const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

	return {
		zIndex: carouselProps.data.length - index,
		opacity: animatedValue.interpolate({
			inputRange: [-1, 0, 1, 2],
			outputRange: [0.75, 1, 0.6, 0.4]
		}),
		transform: [{
			rotate: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2],
				outputRange: ['0deg', '0deg', '5deg', '8deg'],
				extrapolate: 'clamp'
			})
		}, {
			scale: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2],
				outputRange: [0.96, 1, 0.85, 0.7]
			})
		}, {
			[translateProp]: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2],
				outputRange: [
					0,
					0,
					-sizeRef + 30,
					-sizeRef * 2 + 45
				],
				extrapolate: 'clamp'
			})
		}]
	};
}

// Left/right translate effect
function scrollInterpolator3 (index, carouselProps) {
	const outputRange = [2, 1, 0, -1];
	const inputRange = getInputRangeFromIndexes(outputRange, index, carouselProps);

	return {inputRange, outputRange};
}

function animatedStyles3 (index, animatedValue, carouselProps) {
	const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
	const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

	return {
		zIndex: carouselProps.data.length - index,
		opacity: animatedValue.interpolate({
			inputRange: [-1, 0, 1, 2],
			outputRange: [1, 1, 0.75, 0.5],
			extrapolate: 'clamp'
		}),
		transform: [{
			[translateProp]: animatedValue.interpolate({
				inputRange: [-1, 0, 1, 2],
				outputRange: [
					0,
					0,
					-sizeRef * 2,
					-sizeRef
				],
				extrapolate: 'clamp'
			})
		}]
	};
}

// From https://codeburst.io/horizontal-scroll-animations-in-react-native-18dac6e9c720
function scrollInterpolator4 (index, carouselProps) {
	const outputRange = [1, 0, -1];
	const inputRange = getInputRangeFromIndexes(outputRange, index, carouselProps);

	return {inputRange, outputRange};
}

function animatedStyles4 (index, animatedValue, carouselProps) {
	return {
		zIndex: carouselProps.data.length - index,
		opacity: animatedValue.interpolate({
			inputRange: [-1, 0, 1],
			outputRange: [0.75, 1, 0.75],
			extrapolate: 'clamp'
		}),
		transform: [
			{
				perspective: 1000
			},
			{
				scale: animatedValue.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: [0.65, 1, 0.65],
					extrapolate: 'clamp'
				})
			},
			{
				rotateX: animatedValue.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: ['30deg', '0deg', '30deg'],
					extrapolate: 'clamp'
				})
			},
			{
				rotateY: animatedValue.interpolate({
					inputRange: [-1, 0, 1],
					outputRange: ['-30deg', '0deg', '30deg'],
					extrapolate: 'clamp'
				})
			}
		]
	};
}

// Exports
export const scrollInterpolators = {
	scrollInterpolator1,
	scrollInterpolator2,
	scrollInterpolator3,
	scrollInterpolator4
};

export const animatedStyles = {
	animatedStyles1,
	animatedStyles2,
	animatedStyles3,
	animatedStyles4
};


export const colors = {
	black: '#1a1917',
	gray: '#888888',
	background1: '#B721FF',
	background2: '#21D4FD'
};

export const carCourseStyles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: colors.black
	},
	container: {
		flex: 1,
		backgroundColor: colors.background1
	},
	gradient: {
		...StyleSheet.absoluteFillObject
	},
	scrollview: {
		flex: 1
	},
	exampleContainer: {
		paddingVertical: 30
	},
	exampleContainerDark: {
		backgroundColor: colors.black
	},
	exampleContainerLight: {
		backgroundColor: 'white'
	},
	title: {
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	titleDark: {
		color: colors.black
	},
	subtitle: {
		marginTop: 5,
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: 13,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	slider: {
		marginTop: 15,
		overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 10 // for custom animation
	},
	paginationContainer: {
		paddingVertical: 8
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 8
	}
});


const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp (percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const _sliderWidth = viewportWidth;
export const _itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
	slideInnerContainer: {
		width: _itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin,
		paddingBottom: 18 // needed for shadow
	},
	shadow: {
		position: 'absolute',
		top: 0,
		left: itemHorizontalMargin,
		right: itemHorizontalMargin,
		bottom: 18,
		shadowColor: colors.black,
		shadowOpacity: 0.25,
		shadowOffset: {width: 0, height: 10},
		shadowRadius: 10,
		borderRadius: entryBorderRadius
	},
	imageContainer: {
		flex: 1,
		marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
		backgroundColor: 'white',
		borderTopLeftRadius: entryBorderRadius,
		borderTopRightRadius: entryBorderRadius
	},
	imageContainerEven: {
		backgroundColor: colors.black
	},
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'cover',
		borderRadius: IS_IOS ? entryBorderRadius : 0,
		borderTopLeftRadius: entryBorderRadius,
		borderTopRightRadius: entryBorderRadius
	},
	// image's border radius is buggy on iOS; let's hack it!
	radiusMask: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: entryBorderRadius,
		backgroundColor: 'white'
	},
	radiusMaskEven: {
		backgroundColor: colors.black
	},
	textContainer: {
		justifyContent: 'center',
		paddingTop: 20 - entryBorderRadius,
		paddingBottom: 20,
		paddingHorizontal: 16,
		backgroundColor: 'white',
		borderBottomLeftRadius: entryBorderRadius,
		borderBottomRightRadius: entryBorderRadius
	},
	textContainerEven: {
		backgroundColor: colors.black
	},
	title: {
		color: colors.black,
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
	titleEven: {
		color: 'white'
	},
	subtitle: {
		marginTop: 6,
		color: colors.gray,
		fontSize: 12,
		fontStyle: 'italic'
	},
	subtitleEven: {
		color: 'rgba(255, 255, 255, 0.7)'
	}
});