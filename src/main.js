import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.use(Vant)
// 全部导入
// import Vant from 'vant'
// import 'vant/lib/index.css'

// ESLint 只会对规范进行报错
// 同样, 自动修复代码, 也只能修复规范错误, 逻辑错误无法修复
// 导入按需引入的配置文件
import '@/utils/vant-ui'
import ArticleItem from '@/components/ArticleItem'
Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false

// 注册 Button 组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
