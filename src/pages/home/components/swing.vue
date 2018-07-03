<template>
  <div class="swing-loading">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="img-swing" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwing",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true //是否轮播
      }
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
  padding-bottom: 31%;

  .img-swing {
    width: 100%;
  }
}
</style>