/**@flow*/
import {Platform} from 'react-native'
import {Toast} from 'antd-mobile-rn'

let ImagePicker = require('react-native-image-picker');
// More info on all the options is below in the README...just some common use cases shown here
const options = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '图片库',
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high',
  durationLimit: 10,
  maxWidth: 600,
  maxHeight: 600,
  aspectX: 2,
  aspectY: 1,
  quality: 0.8,
  angle: 0,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

export const SelectImage = (): any => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject(response)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // return {uri: response.uri}
        // return {uri: 'data:image/jpeg;base64,' + response.data}
        resolve({uri: 'data:image/jpeg;base64,' + response.data})
        // You can also display the image using data:
      }
    });
  })
};

export const PickImage = (): any => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject(response)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        let file;
        if (Platform.OS === 'android') {
          file = response.uri
        } else {
          file = response.uri.replace('file://', '')
        }
        resolve({source: source, file: file})
      }
    })
  })
};

