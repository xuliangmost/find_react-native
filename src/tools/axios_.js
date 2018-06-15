import axios from 'axios'
import {store} from '../../App';

const service = axios.create({
  timeout: 2000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  console.log(store.getState());
  return config
}, error => {
  // Do something with request error
  console.log(error); // for debug
  // Promise.reject(error)
});
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    console.log('err' + error);
    return Promise.reject(error)
  }
);
const mostRequest = {
  get (url, params = {}) {
    return this.request({
      url,
      method: 'get',
      params: {...params}
    })
  },
  post (url, data = {}) {
    return this.request({
      url,
      method: 'post',
      data: {...data}
    })
  },
  put (url, data = {}) {
    return this.request({
      url,
      method: 'put',
      data: {...data}
    })
  },
  deleted (url, params = {}) {
    return this.request({
      url,
      method: 'delete',
      params: {...params}
    })
  },
  request (config = {}) {
    return service(config)
  }
};

export {mostRequest}