import axios from 'axios'
import { Toast } from 'vant'
import { delToken, getToken } from './storage'
import router from '@/router'

// 创建实例对象,保证axios不被修改
const instance = axios.create({
  // 基地址
  baseURL: 'http://interview-api-t.itheima.net',
  //   超时时间
  timeout: 3000
  //   请求头
//   headers: { Authorization: 'Bearer {{token}}' }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = getToken()
  if (token) {
    // 请求头携带token,注意携带前缀格式.这里有个空格
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么

  return response.data
}, function (error) {
  console.dir(error)
  if (error.response) {
    if (error.response.status === 401) {
      // 清除token
      delToken()
      // 提示用户
      Toast.fail('请您重新登录')
      // 跳转页面
      router.push('/login')
    }
  }
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 统一提示
  if (error.response) {
    Toast.fail(error.response.data.message)
  }

  return Promise.reject(error)
})
export default instance
