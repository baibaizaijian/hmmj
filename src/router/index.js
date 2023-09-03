import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.引入组件
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
// 2级路由
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'

import { getToken } from '@/utils/storage'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  { path: '/register', component: Register },
  { path: '/detail', component: Detail },
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/article', component: Article },
      { path: '/collect', component: Collect },
      { path: '/like', component: Like },
      { path: '/user', component: User }
    ]
  }
]
const whiteList = ['/login', '/register']
const router = new VueRouter({
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to.path)
  // 获取token
  const token = getToken()
  if (token) {
    // 如果有，就通过
    next()
  } else {
    // 如果没有，判断是不是去去白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 都不是，打回登录页
      next('/login')
      Toast.fail('请先登录')
    }
  }
})

export default router
