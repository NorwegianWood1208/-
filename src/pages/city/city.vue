<template>
    <div>
        <city-head></city-head>
        <city-seach></city-seach>
        <city-list></city-list>
        <city-nav></city-nav>
  </div>
</template>
<script>
import CityHead from "./components/header";
import CitySeach from "./components/seach";
import CityList from "./components/list";
import CityNav from "./components/nav";
export default {
  name: "City",
  components: {
    CityHead,
    CitySeach,
    CityList,
    CityNav
  }
};
</script>
<style lang = "stylus" scoped>
</style>