/**@flow*/
import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform
  // Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
// import * as Animatable from 'react-native-animatable'
import Loading from "../common/loading";
import {CommonActions} from "../common/actions";
import {Toast} from 'antd-mobile-rn'
import {mostRequest} from "../../tools/axios_";
import {API} from "../../tools/API";

type Props = {
  navigation: Object,
}
type State = {
  qqNumber: string,
  password: string,
  loading: boolean,
  hiddenStatusBar: boolean,
}
const iconNum = Math.random() * 10;
const icons_img = iconNum > 5 ? require('./images/bg_two.png') : require('./images/bg_one.png');

class Login extends React.Component<Props, State> {
  viewDidAppear: Object;
  state = {
    qqNumber: '123456',
    password: '123456',
    loading: false,
    hiddenStatusBar: false,
  };

  componentWillReceiveProps (nextProps: Object) {
  }

  componentWillUnmount () {
    // this.keyboardDidHideListener.remove();
  }


  componentWillMount () {
    this.setState({hiddenStatusBar: true});

    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => console.log(123));
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    // this.source.cancel('cancel login');
  }

  login = () => {
    const {navigation} = this.props;
    const {qqNumber, password} = this.state;
    Keyboard.dismiss();
    if (qqNumber !== '123456' || password !== '123456') {
      Toast.fail('账号或密码不正确，请重新输入', 1.5);
      return false
    }
    this.setState({loading: true});
    mostRequest.post(`${API}/mostFind/api/authority/login`, {
      user_name: qqNumber,
      user_password: password,
    }).then(res => {
      if (res.data.status === 'ok') {
        navigation.state.params.callBack();
        this.setState({hiddenStatusBar: false});
        navigation.goBack();
      } else {
        Toast.fail('登录失败', 1.5)
      }
    }).catch(() => {
      Toast.fail('error', 1.5);
      this.setState({loading: false});
    });
  };

  render () {
    const {qqNumber, password, loading, hiddenStatusBar} = this.state;
    return (
      <View
        style={styles.box}
      >
        <StatusBar hidden={hiddenStatusBar}/>
        <ImageBackground source={icons_img} style={styles.page_bg}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.container}>
              <View style={styles.header}>
                <Icon name={'qq'} size={30} color={'#fff'}/>
                <Text style={styles.headerText}>QQ</Text>
              </View>

              <View style={styles.input_box}>
                <TextInput
                  placeholder={'请输入QQ号'}
                  placeholderTextColor={'rgba(255,255,255,.5)'}
                  returnKeyType={'next'}
                  keyboardType='numeric'
                  maxLength={12}
                  onSubmitEditing={() => this.refs.password.focus()}
                  value={qqNumber}
                  onChangeText={qqNumber => this.setState({qqNumber})}
                  underlineColorAndroid="transparent"
                  style={styles.input_text}/>
                <Icon style={styles.angle_down} name={'angle-down'}/>
              </View>

              <View style={styles.input_box}>
                <TextInput
                  ref='password'
                  value={password}
                  onChangeText={password => this.setState({password})}
                  placeholder={'请输入密码'}
                  returnKeyType={'done'}
                  onSubmitEditing={() => Keyboard.dismiss()}
                  placeholderTextColor={'rgba(255,255,255,.5)'}
                  secureTextEntry={true} underlineColorAndroid="transparent"
                  style={styles.input_text}/>
              </View>

              <TouchableOpacity
                disabled={loading}
                activeOpacity={.5}
                onPress={this.login}
              >
                <View style={loading ? [styles.login_btn_box, styles.login_btn_box_dis] : styles.login_btn_box}>
                  <Text style={styles.login_btn}>
                    登录
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{color: '#fff'}}>
                用户名:123456;
                密码123456;
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
        {
          loading && <Loading {...this.props}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    // height: '100%',
    // width: '100%',
    // position: 'absolute',
    // left: 0,
    // [animationType]: 0,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? -50 : 0
  },
  box_hidden: {
    // [animationType]: ScreenHeight,
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
  },
  page_bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 40,
    marginBottom: 30
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    paddingLeft: 5
  },
  input_box: {
    borderBottomColor: 'rgba(255,255,255,1)',
    borderBottomWidth: .2,
    marginTop: 10
  },
  angle_down: {
    position: 'absolute',
    right: 0,
    color: '#fff',
    fontSize: 20,
    padding: 10,
    paddingRight: 4
  },
  input_text: {
    padding: 0,
    height: 40,
    color: '#fff',
    fontSize: 16
  },
  login_btn_box: {
    marginTop: 20,
    backgroundColor: 'rgba(50,173,224,.5)',
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  login_btn: {
    color: '#fff',
    fontSize: 15
  },
  login_btn_box_dis: {
    backgroundColor: 'rgba(0,0,0,.2)',
  }
});

function mapState () {
  return {}
}

export default connect(mapState, {...CommonActions})(Login)