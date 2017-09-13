let axios = require('axios')
let http = axios.create()

import { showSuccessAlert, showFailedAlert } from '@/utils/alert'

// before crequest
http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// error handler
http.interceptors.response.use(function (response) {
  // 非安全方法提示执行成功
  if (response.config.method !== 'get') {
    showSuccessAlert('请求成功')
  }
  return response
}, function (error) {
  console.log(error)
  showFailedAlert(error)
  return Promise.reject(error)
})

export default http
