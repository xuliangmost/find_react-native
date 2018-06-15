/**@flow*/

import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'

type Props = {
  value: string,
  navigation: Object
}

type State = {
  message: string
}
const ScreenHeight = Dimensions.get("window").height;

class MainScreenHeader extends React.Component<Props, State> {
  constructor (props: any) {
    super(props);
  }

  render () {
    const {value, navigation} = this.props;
    return (
      <View style={styles.commonHeader}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('MainDrawer');
          }}
        >
          <Image
            style={styles.logo}
            source={{uri: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=c7d15e199222720e6fc3eaa81aa26123/574e9258d109b3de52a41f13c6bf6c81800a4cb6.jpg'}}
          />
        </TouchableWithoutFeedback>

        <Text style={styles.commonHeaderText}>
          {value}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  commonHeader: {
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,.2)'
  },
  commonHeaderText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 10
  },
});

export default MainScreenHeader