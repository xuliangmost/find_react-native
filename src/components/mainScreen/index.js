/**
 * @flow
 **/

import * as React from 'react'

import {createBottomTabNavigator} from 'react-navigation'
import Message from './message'
import Contacts from './contacts'
import {Image, Platform} from 'react-native'

const MainScreen = createBottomTabNavigator({
  Message: {
    screen: Message,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({tintColor}) => (<Image source={require('./images/message.png')} style={[{tintColor: tintColor}, {height: 24, width: 24}]}/>),
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: '联系人',
      tabBarIcon: ({tintColor}) => (<Image source={require('./images/contacts.png')} style={[{tintColor: tintColor}, {height: 24, width: 24}]}/>),
    }
  },
}, {
  swipeEnabled: false,
  creationPolicy: 'all',
  animationEnabled: false, // 切换页面时是否有动画效果
  backBehavior: 'initialRoute', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#005bac', // 文字和图片选中颜色
    inactiveTintColor: '#afafaf', // 文字和图片未选中颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {
      height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {//这个style就是控制下面tabBar的样式
      backgroundColor: '#fff', // TabBar 背景色
      height: 50,
      borderTopWidth: 0.5,
      borderTopColor: '#a8a8a8',
    },
    labelStyle: {
      fontSize: 10,
      marginTop: (Platform.OS === 'ios') ? -2 : -1,
      marginBottom: (Platform.OS === 'ios') ? 6 : 0,
    },
  },
});


export default MainScreen