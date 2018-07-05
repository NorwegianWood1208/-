<template>
  <div>
    <div class="banner" @click="handleclick">
      <img class="banner-img" :src="bannerimg" />
      <div class="banner-info">
        <div class="banner-tittle">{{sightname}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary 
      :img="gallaryImgs"
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
  props: {
    sightname: String,
    gallaryImgs: Array,
    bannerimg: String
  },
  data() {
    return {
      showgallary: false
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
