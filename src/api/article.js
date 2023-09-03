import request from '@/utils/request'
export const getArticle = params => request.get('/h5/interview/query', { params })
// 返回promise对象
