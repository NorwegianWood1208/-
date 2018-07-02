<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="page,index in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png",
          desc: "景点门票景点门票景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1704/fd/7b733d3656f4d002.png",
          desc: "滑雪季"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1603/6e/9e6b6088efe3a4f7.png",
          desc: "景点门票"
        },
        {
          id: "0004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1604/a5/17ada1104cb564f7.png",
          desc: "景点门票"
        },
        {
          id: "0005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1704/55/a5f3d40a7a0cf602.png",
          desc: "景点门票"
        },
        {
          id: "0006",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png",
          desc: "景点门票"
        },
        {
          id: "0007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png",
          desc: "景点门票"
        },
        {
          id: "0008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1706/cd/f2506ae6347db602.png",
          desc: "景点门票"
        },
        {
          id: "0009",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1706/cd/f2506ae6347db602.png",
          desc: "景点门票"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/public.styl';
@import '~assets/minmax.styl';

.icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%;
}

.icons {
    margin-top: 0.1rem;

    .icon {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;

        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            padding: 0.1rem;

            .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }

        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem;
            line-height: 0.44rem;
            text-align: center;
            color: $darkTextColor;
            ellipsis();
        }
    }
}
</style>