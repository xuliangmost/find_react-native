/**@flow*/
import * as React from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native'

import {
    Button
} from 'antd-mobile-rn'



class Camera extends React.Component {
    render() {
        return ( <View style = {styles.box}>
            <Text style={styles.header}>相机22</Text>
            <View style={styles.content}></View>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1
    },
    header:{
        height:"10%"
    },
    content:{
        height:"90%"
    }
});

export default Camera