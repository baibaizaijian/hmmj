<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a :class="{active : sorter}" href="javascript:;" @click="change('weight_desc')">推荐</a>
      <a :class="{active : !sorter}" href="javascript:;" @click="change(null)">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <article-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></article-item>
    </van-list>
  </div>
</template>

<script>
import { getArticle } from '@/api/article'
export default {
  name: 'article-page',

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      current: 1,
      sorter: 'weight_desc'
    }
  },
  methods: {
    async onLoad () {
      console.log('到底部了')
      const res = await getArticle({
        current: this.current,
        pageSize: 10,
        sorter: this.sorter
      })
      console.log(res.data.rows)
      // 页数自增加一
      this.current++
      // 追加数组
      this.list = this.list.concat(res.data.rows)
      // this.list.push(...res.data.rows)
      // 请求完成,改变loading改为false
      this.loading = false
      // 判断是否到底
      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    },
    change (sorter) {
      this.current = 1
      this.sorter = sorter
      this.list = []
      this.finished = false
      this.onLoad()
      this.loading = true
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
