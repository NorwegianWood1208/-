<template>
    <div>
        <home-header></home-header>
        <home-swing></home-swing>
        <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from "./components/header";
import HomeSwing from "./components/swing";
import HomeIcons from "./components/icons";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwing,
    HomeIcons
  }
};
</script>
<style>
</style>
