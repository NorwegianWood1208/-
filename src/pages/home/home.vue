<template>
    <div>
        <home-header></home-header>
        <home-swing></home-swing>
        <home-icons></home-icons>
        <index-recomment></index-recomment>
        <index-weekend></index-weekend>
    </div>
</template>
<script>
import HomeHeader from "./components/header";
import HomeSwing from "./components/swing";
import HomeIcons from "./components/icons";
import IndexRecomment from "./components/recommend";
import IndexWeekend from "./components/weekend";
export default {
  name: "Home",
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
