<template>
  <div class="register-page">
    <van-nav-bar title="注册" />
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
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <router-link to="/login" class="link">有账号,去登录</router-link>
  </div>
</template>

<script>
// 映入模块
import { register } from '@/api/user'
import { Toast } from 'vant'
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
      console.log('submit', data)
      // try {
      //   const res = await register(data)
      //   console.log(res)
      //   Toast.success('成功文案')
      // } catch (error) {
      //   console.dir(error)
      // }
      await register(data)
      Toast.success('注册成功')
      this.$router.push('/login')
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
