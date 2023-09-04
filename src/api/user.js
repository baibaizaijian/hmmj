import request from '@/utils/request'
export const register = (data) => {
  // 返回promise对象
  return request.post('/h5/user/register', data)
}
export const login = (data) => {
  // 返回promise对象
  return request.post('/h5/user/login', data)
}
export function getUserInfo (data) {
  return request({
    url: '/h5/user/currentUser'
  })
}
