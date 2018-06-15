/**@flow*/
import * as React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  onLoad: {
    "0": {scale: 1},
    "0.5": {scale: 0},
    "1": {scale: 1},
  }
});
type Props = {}
export default class Loading extends React.Component<Props> {

  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignSelf: 'center',
            width: 52,
            height: 32,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 20
          }}
        >
          <Animatable.View duration={900} delay={450} easing='ease' animation='onLoad' iterationCount='infinite' style={{width: 12, height: 12, backgroundColor: '#055bac', borderRadius: 12}}/>
          <Animatable.View duration={900} delay={650} easing='ease' animation='onLoad' iterationCount='infinite' style={{width: 12, height: 12, backgroundColor: '#055bac', borderRadius: 12}}/>
          <Animatable.View duration={900} easing='ease' animation='onLoad' iterationCount='infinite' style={{width: 12, height: 12, backgroundColor: '#055bac', borderRadius: 12}}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});