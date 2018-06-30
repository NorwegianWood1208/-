<template>
    <div>
        <home-header></home-header>
        <home-swing></home-swing>
    </div>
</template>
<script>
import HomeHeader from "./components/header";
import HomeSwing from "./components/swing";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwing
  }
};
</script>
<style>
</style>
