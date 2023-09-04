import request from '@/utils/request'
export const getArticle = params => request.get('/h5/interview/query', { params })
// 返回promise对象
export function getDetail (id) {
  return request({
    url: '/h5/interview/show',
    params: {
      id
    }
  })
}
export const updateLike = data => request.post('/h5/interview/opt', data)

export const getLikeOrCollect = params => request.get('/h5/interview/opt/list', { params })
