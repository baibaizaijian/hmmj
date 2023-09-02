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

const router = new VueRouter({
  routes
})

export default router
