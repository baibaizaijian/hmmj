<template>
    <van-cell @click="$router.push('/detail/' + item.id)"  class="article-item" >
      <template #title>
        <div class="head">
          <img :src="item.avatar" alt=""/>
          <div class="con">
            <p class="title van-ellipsis">{{item.stem}}</p>
            <p class="other">{{item.creator}}|{{item.createdAt}}</p>
          </div>
        </div>
      </template>
      <template #label>
           <!-- 正则替换或者直接v-html -->
          <!-- {{item.content.replace(/<.+?>/g,'')}} -->
        <div v-html="item.content" class="body van-multi-ellipsis--l2">

        </div>
        <div class="foot">点赞{{item.likeCount}} | 浏览 {{item.views }}</div>
      </template>
    </van-cell>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  }

}
</script>

<style lang="less" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}

</style>
