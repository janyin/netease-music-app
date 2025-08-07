import { Toast } from 'antd-mobile'
import axios from 'axios'

const HOST = 'https://music.liucodes.dev'

export const get = (url, params) =>
  new Promise((resolve, reject) => {
    axios
      .get(HOST + url, {
        params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        Toast.offline('网络错误')
        reject(err.data)
      })
  })
