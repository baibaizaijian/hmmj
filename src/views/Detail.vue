<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详情"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 | {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img :src="article.avatar" alt="" />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main v-html="article.content" class="body">
    </main>
    <div class="opt">
      <van-icon  @click="updateFlag(1)" :class="{ active: article.likeFlag }"  name="like-o"/>
      <van-icon  @click="updateFlag(2)" :class="{ active: article.collectFlag}" name="star-o"/>
    </div>
  </div>
</template>

<script>
import { getDetail, updateLike } from '@/api/article'
import { Toast } from 'vant'
export default {
  name: 'DetailPage',
  data () {
    return {
      article: {}

    }
  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await getDetail(this.$route.params.id)
      this.article = res.data
    },

    async updateFlag (optType) {
      await updateLike({

        id: this.article.id,
        optType
      })
      // 重新渲染
      this.getData()
      // 提示用户
      if (optType === 1) {
        // 点赞
        if (this.article.likeFlag) {
          // 当点赞为 1 时说明此时已经高亮了, 点击是为了取消点赞
          Toast.success('取消点赞')
        } else {
          Toast.success('点赞成功')
        }
      } else {
        // 收藏
        if (this.article.collectFlag) {
          // 当点赞为 1 时说明此时已经高亮了, 点击是为了取消点赞
          Toast.success('取消收藏')
        } else {
          Toast.success('收藏成功')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
