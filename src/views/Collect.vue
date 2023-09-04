<template>
  <div class="collect-page">
    <!-- html 设计规范: fixed 表示将 fixed 设为 true -->
    <!-- checked="checked" -->
    <van-nav-bar fixed title="我的收藏" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { getLikeOrCollect } from '@/api/article'
export default {
  name: 'CollectPage',
  data () {
    return {
      list: [],
      page: 1, // 当前在第几页
      loading: false, // 是否正在加载
      finished: false // 是否全部加载完成, 如果设置为 true 则以后再也不会触发 load 事件了
    }
  },
  methods: {
    async onLoad () {
      // console.log('触发事件了, 要加载更多啦!')
      const res = await getLikeOrCollect({
        page: this.page,
        pageSize: 10,
        optType: 2
      })
      // 得到结果马上判断是否在最后一页
      if (this.page >= res.data.pageTotal) {
        // 到最后一页了
        this.finished = true
      }
      // console.log(res.data.rows)
      // this.list = res.data.rows
      // 把下一页数据合并到当前数据中
      this.list.push(...res.data.rows)
      // 加载完毕后将 loading 设为 false
      this.loading = false
      // 翻一页
      this.page++
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
