/**
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Easing,
  Animated,
  BackHandler,
  ToastAndroid,
  StatusBar
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './components/mainScreen'
import ChatView from './components/mainScreen/chatView'
import Login from './components/login'
import {connect} from 'react-redux'
import {Toast} from 'antd-mobile-rn'

const Page = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    path: 'app/mainScreen'
  },
  Login: {screen: Login},
  ChatView: {screen: ChatView},
}, {
  initialRouteName: 'MainScreen',
  headerMode: 'screen',
  initialRouteParams: {
    title: ''
  },
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: true,
    header: null,
  },
  transitionConfig: (): Object => ({
    transitionSpec: {
      duration: 250,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const {index, route} = scene;
      const params = route.params || {};
      const direction = params.direction || 'X';
      const height = layout.initHeight;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.5, index],
        outputRange: [0, 1, 1],
      });

      const scale = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [4, 1, 1]
      });
      return {
        opacity,
        transform: direction === 'X' ? [{translateX}, {scaleX: scale}, {scaleY: scale}] : [{translateY}, {scaleX: scale}, {scaleY: scale}],
      };
    },
  }),
});


type Props = {
  loginState: boolean
};

class App extends Component<Props, any> {

  lastBackPressed: number;
  backHandlers: Function;
  setState: Function;

  constructor (props) {
    super(props);
    this.state = {
      loginState: props.loginState
    };
  }

  componentWillReceiveProps (nextProps: Object) {
    if (this.props.loginState !== nextProps.loginState) {
      this.setState({loginState: nextProps.loginState})
    }
  }

  componentDidMount () {
    // this.backHandlers = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
  }

  onBackAndroid = (): boolean => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };

  render () {
    const {loginState} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <Page/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

function mapState (state: Object) {
  return {
    loginState: state.loginState
  }
}

export default connect(mapState)(App)