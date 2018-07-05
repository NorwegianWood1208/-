<template>
    <div>
        <detail-banner :sightname="sightName" :gallaryImgs="gallaryImgs" :bannerimg="bannerimg"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from "./compontes/Banner";
import DetailHeader from "./compontes/Header";
import DetailList from "./compontes/List";
export default {
  name: "Detail",
  data() {
    return {
      bannerimg: "",
      list: [],
      gallaryImgs: [],
      sightName: ""
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getdata() {
      fetch("/detail.json?id=" + this.$route.params.id)
        .then(e => e.json())
        .then(e => {
          this.bannerimg = e.data.bannerImg;
          this.list = e.data.categoryList;
          this.gallaryImgs = e.data.gallaryImgs;
          this.sightName = e.data.sightName;
        });
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>