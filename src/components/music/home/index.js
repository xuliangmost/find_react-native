/**@flow*/
import * as React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native'
import {Button} from 'antd-mobile-rn'

type Props = {
  navigation: Object
};
type State = {}

class Music extends React.Component<Props, State> {
  render () {
    return (
      <View style={styles.box}>
        <StatusBar
          backgroundColor='red'
          animated
        />

        <Button onClick={() => this.props.navigation.navigate('MusicHeader')}>
          draw
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.4)'
  }
});

export default Music