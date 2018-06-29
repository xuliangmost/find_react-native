/**
 * @flow
 */

import React, {Component} from 'react';
import {
  Animated, AppState, Easing, Linking, View, StatusBar,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import {RouteConfig} from './routeList'
import {connect} from 'react-redux'
import {Toast} from 'antd-mobile-rn'
import {getPageParams} from "./tools/tool";

const Page = createStackNavigator(RouteConfig, {
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
  transitionConfig: (): any => ({
    transitionSpec: {
      duration: 350,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const {index, route} = scene;
      const params = route.params || {};
      const direction = params.direction || 'X';
      const height = layout.initHeight;
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [direction === 'X_UP' ? -width : width, direction === 'X_UP' ? -width * .2 : 0, 0],
      });
//如果是X_UP  就从左边滑出占据80%的宽度
      let translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [direction === 'Y_UP' ? height : -height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.5, index],
        outputRange: [0, 1, 1],
      });

      const scale = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [4, 1, 1]
      });

      const transform = direction === 'Y_UP_S' ? [{translateY}, {scaleX: scale}, {scaleY: scale}] : direction === 'Y_UP' ? [{translateY}] : direction === 'X' ? [{translateX}] : [{translateX}];
      return {
        opacity,
        transform: transform
      };
    },
  }),
});


type Props = {
  loginState: boolean,
  navigation: Object
};


const prefix = 'find://app/';
const MainApp = () => <Page uriPrefix={prefix}/>;

class App extends Component<Props, any> {
  setState: Function;
  constructor (props) {
    super(props);
    this.state = {
      states: ''
    };
  }

  componentWillReceiveProps (nextProps: Object) {

  }

  componentDidMount () {
    Linking.getInitialURL().then((url) => {
      if (url) {
        Toast.info(`${JSON.stringify(getPageParams(url))}`, 4);
      }
    }).catch(err => console.error('An error occurred', err));
    AppState.addEventListener('change', this._handleAppStateChange);
  }


  componentWillUnmount () {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextState) => {
    if (nextState === 'active') {
      this.setState({states: `${this.state.states}\n active`})
    }
    if (nextState === 'background') {
      this.setState({states: `${this.state.states}\n background`})
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          hidden={false}
          backgroundColor={'rgba(0,0,0,.2)'} animated/>
        <MainApp/>
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

function mapState () {
  return {}
}

export default connect(mapState)(App)

