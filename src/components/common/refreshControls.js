/**@flow*/
import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
} from 'react-native'

import * as Animatable from 'react-native-animatable'

type Prop = {}

class RefreshControls extends React.Component<Prop, any> {
  _view: Object
  _panResponder: Object
  _scrollY: number
  _viewY: number
  duration: boolean
  state = {
    duration: 0,
    pageScrollY: 0
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.onStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.onMoveShouldSetPanResponder,
      onPanResponderGrant: this.onPanResponderGrant,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderEnd,
      onPanResponderTerminate: this.onPanResponderEnd,
    });
    this._scrollY = 0;//中间值
    this._viewY = 0;
    this.duration = false
  }

  onStartShouldSetPanResponder = () => {
    return true
  };

  onMoveShouldSetPanResponder = () => {
    return true
  };

  onPanResponderGrant = (e: Object, gestureState: Object) => {
    // this._scrollY = 0;
  };

  onPanResponderMove = (e: Object, gestureState: Object) => {
    let y = gestureState.dy + this._viewY;
    y = y > 0 ? y / 5 : y;
    this._scrollY = y;
    // this._view.setNativeProps({style: {top: y}});
    this.setState({pageScrollY: y});
    console.log(y)
  };

  onPanResponderEnd = (e: Object, gestureState: Object) => {
    if (this._scrollY > 0) {
      this.duration = true
      // this._view.setNativeProps({style: {top: 0}});
      this.setState({pageScrollY: 0});
      this._viewY = 0
    } else {
      this._viewY = this._scrollY;
    }
    this._scrollY = 0;
  };

  render () {
    const {pageScrollY} = this.state;
    return (
      <View
        style={[styles.refresh_container]}
      >
        <View
          // easing={'ease-out-cubic'}
          {...this._panResponder.panHandlers}
          style={[{top: pageScrollY}, styles.move_container]}
          ref={(view) => {
            this._view = view;
          }}
        >
          <Text style={styles.text}>{1}</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.text}>4</Text>
          <Text style={styles.text}>5</Text>

          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.text}>4</Text>
          <Text style={styles.text}>5</Text>

          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.text}>4</Text>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  refresh_container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  move_container: {
    position: 'absolute',
    width: '100%'
  },
  text: {height: 80, textAlign: 'center'}
})

export default RefreshControls