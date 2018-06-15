/**@flow*/

import * as React from 'react'
import {
  View,
  Text
} from 'react-native'
import MainScreenHeader from '../../common/mainScreenHeader'


type Props = {
  navigation: Object
}


class Contacts extends React.Component<Props> {

  render () {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <MainScreenHeader value='联系人' navigation={navigation}/>
        <Text>demo</Text>

      </View>
    )
  }
}

export default Contacts