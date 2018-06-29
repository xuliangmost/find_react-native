/**@flow*/
import * as React from 'react'
import {
  Dimensions,
  Platform
} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX () {
  return (
    Platform.OS === 'ios' &&
    ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
      (screenH === X_WIDTH && screenW === X_HEIGHT))
  )
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */

export function ifIphoneX (iphoneXStyle: Object, iosStyle: Object, androidStyle: Object) {
  if (isIphoneX()) {
    return iphoneXStyle;
  } else if (Platform.OS === 'ios') {
    return iosStyle
  } else {
    if (androidStyle) return androidStyle;
    return iosStyle
  }
}