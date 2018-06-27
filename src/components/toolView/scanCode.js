/**@flow*/
import * as React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
// import Camera from 'react-native-camera'

type Props = {}

class ScanCode extends React.Component<Props, any> {

  _onBarCodeRead = () => {

  }

  render () {
    return (
      <View style={{flex: 1}}>
        {/*<Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
          </View>
          {cancelButton}
        </Camera>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rectangleContainer: {},
  rectangle: {},
  camera: {}
})
export default ScanCode