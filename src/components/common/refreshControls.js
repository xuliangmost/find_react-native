/**@flow*/
import * as React from 'react'
import {
  View,
  StyleSheet,
  PanResponder,
	ScrollView,
} from 'react-native'

import * as Animatable from 'react-native-animatable'

type Prop = {
	children?: any
}

class RefreshControls extends React.Component<Prop, any> {
	_panResponder: Object;
	scroll_: any;
	responderEnd: any;
	_view: Object;
	_scrollY: number;
	pullable: boolean;
	state = {
		duration: 0,
		scrollEnabled: true,//是否能滑动
		atTop: true,//是否处于顶部
		refreshing: false
	};

	componentWillMount () {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this.onStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this.onShouldSetPanResponder,
			onPanResponderGrant: this.onPanResponderGrant,
			onPanResponderMove: this.onPanResponderMove,
			onPanResponderRelease: this.onPanResponderEnd,
		});
		this._scrollY = 0;//中间值

		this.pullable = false;//处于下拉状态
	}

	onStartShouldSetPanResponder = () => {
		if (this.state.atTop) {
			this.pullable = true;
			this.setState({scrollEnabled: false})
		} else {
			this.pullable = false;
			this.setState({scrollEnabled: true})
		}
	};

	onShouldSetPanResponder = (e: Object, gesture: Object) => {
		// console.log(this.state.atTop && isDownGesture(gesture.dx, gesture.dy));
		// if (this.state.atTop && isDownGesture(gesture.dx, gesture.dy)) {
		// 	this.pullable = true;
		// 	this.setState({scrollEnabled: false});
		// 	return true;
		// } else {
		// 	this.pullable = false;
		// 	this.setState({scrollEnabled: true});
		// 	return false;
		// }
		return this.pullable
	};

  onPanResponderGrant = (e: Object, gestureState: Object) => {
		//开始手势操作，也可以说按下去。给用户一些视觉反馈
		// this._scrollY = 0;
  };

  onPanResponderMove = (e: Object, gestureState: Object) => {
		this._view.setNativeProps({style: {marginTop: gestureState.dy / 4}});
		this._scrollY = gestureState.dy;
		console.log('---', gestureState.dy)
		// this._view.setNativeProps({style: {marginTop: y}});
		// console.log(y)
  };

  onPanResponderEnd = (e: Object, gestureState: Object) => {
		// this.responderEnd && clearTimeout(this.responderEnd);
		// this.responderEnd = setTimeout(() => {
		// 	if (this.pullable) {
		// 		this.pullable = false;
		// 		console.log('stop');
		// 		this.setState({scrollEnabled: true});
		// 		this._view.setNativeProps({style: {marginTop: 0}});
		// 	}
		// }, 20);
		if (this.pullable) {
			this._view.setNativeProps({style: {marginTop: 0}});
			this.scroll_.scrollTo({x: 0, y: this._scrollY * -1});
			this.pullable = false;
		}
  };

  render () {
    return (
      <View
        style={[styles.refresh_container]}
      >
				<Animatable.View
					transition={'marginTop'}
					easing={'ease-out-cubic'}
					{...this._panResponder.panHandlers}
					ref={_view => this._view = _view}
				>

					{/*	refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onMoveShouldSetResponder={e => {
							console.log(e.nativeEvent)
						}}
						onRefresh={() => {

						}
						}
					/>
				}*/}

					<ScrollView
						ref={scroll => this.scroll_ = scroll}
						scrollEnabled={this.state.scrollEnabled}
						onScroll={event => {
							console.log(event.nativeEvent.contentOffset.y)
							this.setState({atTop: event.nativeEvent.contentOffset.y === 0})
						}}
					>
						{this.props.children}
					</ScrollView>
				</Animatable.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  refresh_container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

function isDownGesture (dx, dy: number) {

	return dy > 0
}

export default RefreshControls