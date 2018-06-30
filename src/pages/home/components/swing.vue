<template>
  <div class="swing-loading">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="img-swing" :src="item.url">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwing",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true //是否轮播
      },
      swiperList: [
        {
          id: "0001",
          url: "//img1.qunarzz.com/qs/1806/5a/f96ab1ab02d30602.jpg"
        },
        {
          id: "0002",
          url: "//img1.qunarzz.com/qs/1806/2f/1569f106565f8502.jpg"
        },
        {
          id: "0003",
          url: "//img1.qunarzz.com/qs/1806/98/57120f8844f23e02.jpg"
        },
        {
          id: "0004",
          url: "//img1.qunarzz.com/qs/1806/8f/e1141f1b52114402.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.swing-loading >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.swing-loading {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 25.64%;

  .img-swing {
    width: 100%;
  }
}
</style>