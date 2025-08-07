import axios from 'axios'

const HOST = 'https://music.liucodes.dev'

export const get = (url: string, params?: object) =>
  new Promise((resolve, reject) => {
    axios
      .get(HOST + url, {
        params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
