/**@flow*/
import {Toast} from 'antd-mobile-rn'

function trim (str: string, is_global: boolean) {
  let result;
  result = str.replace(/(^\s+)|(\s+$)/g, "");
  if (is_global) {
    result = result.replace(/\s/g, "");
  }
  return result;
}

function transformTime (time: string | number) {
  time = Number(time);
  let m = Math.floor(time / 60);
  let s = time - m * 60;
  let h = Math.floor(m / 60);
  if (m < 10) {
    m = `0${m}`
  }
  if (s < 10) {
    s = `0${s}`
  }
  if (h) {
    if (h < 10) {
      h = `0${h}`
    }
    return `${h}:${m}:${s}`
  } else {
    return `${m}:${s}`
  }
}

function getPageParams (url: string = ''): any {
  let search = url.split('?')[1];
  if (search && search.indexOf('=') > -1) {
    const query = search.split('&');
    let params = {};
    query.forEach(item => {
      if (item.split('=')[1]) {
        // params[item.split('=')[0]] = item.split('=')[1]
      }
      params[item.split('=')[0]] = item.split('=')[1]
    });
    return params
  } else {
    return false
  }
}

export {
  trim,
  transformTime,
  getPageParams
}