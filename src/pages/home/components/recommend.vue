<template>
    <div>
        <div class="title">浪漫之旅</div>
        <ul>
            <li class="item" v-for="item in recomment" :key="item.id">
                <div class="item-img-wrap">
                    <img class="item-img" :src="item.urlimg" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "IndexRecomment",
  data() {
    return {
      recomment: [
        {
          id: "0001",
          urlimg: "//s.qunarzz.com/imall/v2/product/small/pengcixiansmall.jpg",
          title: "大连圣亚海洋世界",
          desc:
            "浪漫大连首站,浪漫的海洋主题公园浪漫大连首站,浪漫的海洋主题浪漫大连首站,浪漫的海洋主题"
        },
        {
          id: "0002",
          urlimg: "//s.qunarzz.com/imall/v2/product/small/pengcixiansmall.jpg",
          title: "大连圣亚海洋世界",
          desc:
            "浪漫大连首站,浪漫的海洋主题公园浪漫大连首站,浪漫的海洋主题浪漫大连首站,浪漫的海洋主题"
        },
        {
          id: "0003",
          urlimg: "//s.qunarzz.com/imall/v2/product/small/pengcixiansmall.jpg",
          title: "大连圣亚海洋世界",
          desc:
            "浪漫大连首站,浪漫的海洋主题公园浪漫大连首站,浪漫的海洋主题浪漫大连首站,浪漫的海洋主题"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/minmax.styl';

.title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;

        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            ellipsis();
        }

        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            ellipsis();
        }

        .item-button {
            line-height: 0.44rem;
            margin-top: 0.16rem;
            background: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
            color: #fff;
        }
    }
}
</style>