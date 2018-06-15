/**@flow*/
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  BackHandler, ToastAndroid,
} from 'react-native'
import * as React from 'react'
import {connect} from 'react-redux'
import {HomePageAction} from "./actions";
import MainScreenHeader from '../../common/mainScreenHeader'
import {CommonActions} from "../../common/actions";
import MessageList from './messageList'
import {getMessageList} from "./reuestAction";
import {Toast} from 'antd-mobile-rn'
import ChatView from "../chatView";

type Props = {
  navigation: Object,
  add: () => void,
  reduce: () => void,
  needLogin: (state: boolean, callback: any) => void
}

class Message extends React.Component<Props, any> {
  lastBackPressed: number;
  backHandlers: Object;
  viewDidAppear: Object;
  state = {
    messages: []
  };

  alertLogin = async () => {
    // this.props.needLogin(true, () => {
    //   this.getList().then();
    // })
    this.props.navigation.navigate('Login', {direction: 'Y', callBack: () => this.getList()})
  };

  componentDidMount () {
    this.viewDidAppear = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.backHandlers = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
      }
    );
    this.viewDidAppear = this.props.navigation.addListener(
      'willBlur',
      () => {
        this.backHandlers && this.backHandlers.remove();
      }
    )
  }

  componentWillReceiveProps (nextProps) {

  }


  onBackAndroid = (): boolean => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };


  getList = async () => {
    Toast.loading('', 0);
    let messages = await getMessageList();
    this.setState({messages: this.state.messages.concat(messages)});
    Toast.hide();
  };

  _keyExtractor = (item) => item.id;

  render () {
    const {navigation} = this.props;
    const {messages} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <MainScreenHeader value='消息' navigation={navigation}/>
        <TouchableOpacity
          onPress={this.alertLogin}
        >
          <Text style={Styles.btn}>
            login
          </Text>
        </TouchableOpacity>

        <FlatList
          data={messages}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          renderItem={({item}) => (
            <MessageList
              navigation={navigation}
              onPress={() => {
                navigation.navigate('ChatView', {title: item.name})
              }}
              value={item}
            />
          )}
        />

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#ffffff'
  }
});


function mapState (state) {
  return {}
}

export default connect(mapState, {...HomePageAction, ...CommonActions})(Message)