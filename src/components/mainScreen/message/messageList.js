/**@flow*/
import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

type Props = {
  navigation: Object,
  value: Object,
  onPress?: Function
}

class MessageList extends React.Component<Props, any> {

  state = {
    value: this.props.value
  };

  componentWillReceiveProps (nextProps: Object) {
    if (this.props.value !== nextProps.value) {
      this.setState({value: nextProps.value})
    }
  }

  render () {
    const {value} = this.state;
    const {onPress} = this.props;
    return (
      <View style={{height: 56}}>
        <TouchableHighlight
          underlayColor={'#DFDFDF'}
          style={{flex: 1}}
          onPress={() => onPress && onPress(value.name)}
        >
          <View style={styles.list_box}>
            <View style={styles.list_content}>
              <View style={styles.list_content_left}>
                <Image style={styles.header_icon} source={{uri: 'https://avatars1.githubusercontent.com/u/22991471?s=460&v=4'}}/>
              </View>
              <View style={styles.list_content_right}>
                <View style={styles.list_content_right_top}>
                  <Text numberOfLines={1} style={styles.list_content_name}>{value.name}</Text>
                  <Text style={styles.list_content_time}>{value.time}</Text>
                </View>
                <View style={styles.list_content_right_bottom}>
                  <Text numberOfLines={1} style={styles.list_content_content}>{value.content}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list_box: {
    flex: 1,
    paddingLeft: '2%',
  },
  header_icon: {
    height: 46,
    width: 46,
    borderRadius: 8,
  },
  list_content: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: .2,
    borderBottomColor: '#E4E4E4',
  },
  list_content_left: {
    justifyContent: 'center'
  },
  list_content_right: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 6
  },
  list_content_right_top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  list_content_name: {
    width: '50%',
    fontSize: 16,
    color: '#000',
  },
  list_content_time: {
    fontSize: 12,
    color: '#A9A9A9',
    marginRight: '2%'
  },
  list_content_content: {
    width: '95%'
  },
  list_content_right_bottom: {},
});

export default MessageList