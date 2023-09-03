<template>
  <div class="register-page">
    <van-nav-bar title="登录一下" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
 <router-link to="/register" class="link">没有账号,去注册</router-link>
  </div>
</template>

<script>
// 映入模块
import { login } from '@/api/user'
import { Toast } from 'vant'
import { setToken } from '@/utils/storage'
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 组件搜集函数
    async onSubmit (data) {
      // console.log('submit', data)

      const res = await login(data)
      setToken(res.data.token)

      Toast.success('登录成功')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
