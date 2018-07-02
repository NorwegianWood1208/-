<template>
    <div>
        <div class="title">周末之旅</div>
        <ul>
            <ul>
                <li
                    class="item border-bottom"
                    v-for="item in recomment"
                    :key="item.id"
                >
                    <div class="item-img-wrapper">
                    <img class="item-img" :src="item.urlimg" />
                    </div>
                    <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
        </ul>
    </div>
</template>
<script>
export default {
  name: "IndexWeekend",
  data() {
    return {
      recomment: [
        {
          id: "0001",
          urlimg:
            "https://img1.qunarzz.com/p/tts2/1803/2f/80131e5732519e02.jpg_r_480x320x90_d645f7b3.jpg",
          title: "大连圣亚海洋世界",
          desc:
            "浪漫大连首站,浪漫的海洋主题公园浪漫大连首站,浪漫的海洋主题浪漫大连首站,浪漫的海洋主题"
        },
        {
          id: "0002",
          urlimg:
            "https://img1.qunarzz.com/p/tts2/1803/2f/80131e5732519e02.jpg_r_480x320x90_d645f7b3.jpg",
          title: "大连圣亚海洋世界",
          desc:
            "浪漫大连首站,浪漫的海洋主题公园浪漫大连首站,浪漫的海洋主题浪漫大连首站,浪漫的海洋主题"
        },
        {
          id: "0003",
          urlimg:
            "https://img1.qunarzz.com/p/tts2/1803/2f/80131e5732519e02.jpg_r_480x320x90_d645f7b3.jpg",
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
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
        width: 100%;
    }
}

.item-info {
    padding: 0.1rem;

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
}
</style>