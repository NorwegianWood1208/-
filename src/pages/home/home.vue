<template>
    <div>
        <home-header></home-header>
        <home-swing :list="swiperList"></home-swing>
        <home-icons :list="icondata"></home-icons>
        <index-recomment :list="recommendList"></index-recomment>
        <index-weekend :list="weekendList"></index-weekend>
    </div>
</template>
<script>
import HomeHeader from "./components/header";
import HomeSwing from "./components/swing";
import HomeIcons from "./components/icons";
import IndexRecomment from "./components/recommend";
import IndexWeekend from "./components/weekend";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      icondata: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    };
  },
  methods: {},
  mounted() {
    fetch("/index.json")
      .then(e => e.json())
      .then(e => {
        this.icondata = e.data.iconList;
        this.recommendList = e.data.recommendList;
        this.swiperList = e.data.swiperList;
        this.weekendList = e.data.weekendList;
        console.log(e.data.recommendList);
      });
    // axios
    //   .get("/index.json")
    //   .then(res => {
    //     this.icondata = res.data.data.iconList;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  components: {
    HomeHeader,
    HomeSwing,
    HomeIcons,
    IndexRecomment,
    IndexWeekend
  }
};
</script>
<style>
</style>
