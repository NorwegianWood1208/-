<template>
  <div>
    <div class="banner" @click="handleclick">
      <img class="banner-img" src="https://img1.qunarzz.com/qs/1806/eb/41405760a6f72c02.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">大连圣亚五星级景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary 
      :img="imgs"
      @close="handleclose"
      v-show="showgallary"
    >
      
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showgallary: false,
      imgs: [
        "https://img1.qunarzz.com/qs/1806/eb/41405760a6f72c02.jpg",
        "https://imgs.qunarzz.com/p/p51/1712/f4/d0a2f0a57a86d702.jpg_480x320_f64705f3.jpg"
      ]
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    handleclick() {
      this.showgallary = true;
    },
    handleclose() {
      this.showgallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 47%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
