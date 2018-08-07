import {mostRequest} from "../../../tools/axios_";
import {API} from "../../../tools/API";
import {Toast} from 'antd-mobile-rn'

export function getMessageList (pageSize: number = 10, pageNum: number = 1) {
  return new Promise((resolve, reject) => {
    mostRequest.get(`${API}/mostFind/api/message/list`, {pageSize: pageSize, pageNum: pageNum}).then(res => {
      resolve(res.data.data)
      // Toast.info(JSON.stringify(res.data.data[0]), 0)
    }).catch(e => {
      reject(e)
    })
  })
}