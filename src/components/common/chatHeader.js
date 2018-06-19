/**@flow*/
import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

type Props = {
  title: string,
  back?: boolean,
  navigation: Object,
  renderRight?: Function
}
type State = {
  title: string,
  back?: boolean,
  machine: string,
  renderRight?: Function
}

class ChatHeader extends React.Component<Props, State> {
  setState: Function;

  state = {
    title: this.props.title || 'chat',
    back: this.props.back || false,
    machine: '',
    renderRight: this.props.renderRight
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({machine: `iphone6 金色`})
    }, 1000)
  }

  componentWillReceiveProps (nextProps: Object) {
    if (this.props.title !== nextProps.title) {
      this.setState({title: nextProps.title})
    }
    if (this.props.renderRight !== nextProps.renderRight) {
      this.setState({renderRight: nextProps.renderRight})
    }
  }

  render () {
    const {title, back, machine, renderRight} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.chat_header}>
        {
          back &&
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={.6}
            style={styles.chat_header_left}
          >
            <View>
              <Image style={{width: 28, height: 30}} source={require('./images/left.png')}/>
            </View>
          </TouchableOpacity>
        }

        <View style={styles.chat_header_title}>
          <Text style={styles.chat_header_h1}>{title}</Text>
          <Text style={styles.chat_header_h2}>{machine}</Text>
        </View>
        <View style={styles.chat_header_right}>
          {renderRight && renderRight()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chat_header: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,.5)',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100
  },
  chat_header_left: {
    height: 50,
    width: 60,
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0,
    top: 0,
    justifyContent: 'center',
    paddingLeft: -2
  },
  chat_header_title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chat_header_h1: {
    fontSize: 16,
    color: '#000',
  },
  chat_header_h2: {
    fontSize: 12,
    color: '#C4C4C4',
  },

  chat_header_right: {
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  }
});

export default ChatHeader

