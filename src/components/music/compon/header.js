/**@flow*/
import * as React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {Button} from 'antd-mobile-rn'

type Props = {}

class MusicHeader extends React.Component<Props> {

  render () {
    return (
      <View style={styles.header_container}>
        <Button>click</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_container: {
    height: 50,
    backgroundColor: 'red'
  }
});

export default MusicHeader


