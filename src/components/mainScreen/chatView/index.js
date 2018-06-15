/**@flow*/
import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import ChatHeader from "../../common/chatHeader";
import {GiftedChat} from 'react-native-gifted-chat'
import {PickImage} from "../../../tools/pickImages";
import {Toast} from 'antd-mobile-rn'

type Props = {
  navigation: Object
}

class ChatView extends React.Component<Props, any> {

  state = {
    title: this.props.navigation.state.params.title,
    messages: [],
    sendValue: '',
    sendImage: '',
  };


  componentWillMount () {
    this.setState({
      messages: [
        {
          _id: Math.round(Math.random() * 1000000),
          text: '#awesome',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Developer',
          },
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: '我给你发了个消息',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
          image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
          sent: true,
          received: true,
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: 'Send me a picture!',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Developer',
          },
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: '',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
          sent: true,
          received: true,
          location: {
            latitude: 48.864601,
            longitude: 2.398704
          },
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: 'Where are you?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Developer',
          },
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: 'Yes, and I use Gifted Chat!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
          sent: true,
          received: true
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: 'Are you building a chat app?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Developer',
          },
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "You are officially rocking GiftedChat.",
          createdAt: new Date(),
          system: true,
        },
      ]
    });
  }

  onSend = (image?: string = '') => {
    const {sendValue, messages} = this.state;
    let message = {
      _id: Math.round(Math.random() * 1000000),
      text: sendValue,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
      },
      image: image,
      sent: true,
      received: true,
    };
    if (!image) {
      delete message.image
    }
    this.setState(() => ({
      messages: GiftedChat.append(messages, [message]),
    }));
  };


  renderActions = () => (
    <TouchableHighlight
      underlayColor={'#DFDFDF'}
      onPress={async () => {
        const data = await PickImage();
        this.onSend(data.source.uri)
      }}
      style={styles.render_action}>
      <Text style={styles.render_action_text}>+</Text>
    </TouchableHighlight>
  );

  render () {
    const {navigation} = this.props;
    const {title} = this.state;
    return (
      <View style={styles.chat_container}>
        <ChatHeader renderRight={() => <Text>right</Text>} back navigation={navigation} title={title}/>
        <GiftedChat
          showUserAvatar={true}
          messages={this.state.messages}
          onSend={() => this.onSend()}
          placeholder={'输入聊天信息'}
          renderAvatarOnTop
          label={'发送'}
          onInputTextChanged={sendValue => this.setState({sendValue})}
          renderActions={this.renderActions}
          keyboardShouldPersistTaps={'never'}
          user={{
            _id: 1,
          }}
          parsePatterns={linkStyle => [
            {
              pattern: /#(\w+)/,
              style: {...linkStyle, color: 'lightgreen'},
              onPress: props => alert(`press on ${props}`),
            },
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chat_container: {
    flex: 1,
    paddingTop: 50
  },
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  render_action: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  render_action_text: {
    fontSize: 26
  }
});

export default ChatView