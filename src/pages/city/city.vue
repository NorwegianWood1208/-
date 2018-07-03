<template>
    <div>
        <city-head></city-head>
        <city-seach></city-seach>
        <city-list :city="this.city" :hotcity="this.hotcity"></city-list>
        <city-nav :datas="this.city"></city-nav>
  </div>
</template>
<script>
import CityHead from "./components/header";
import CitySeach from "./components/seach";
import CityList from "./components/list";
import CityNav from "./components/nav";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHead,
    CitySeach,
    CityList,
    CityNav
  },
  data() {
    return {
      city: {},
      hotcity: []
    };
  },
  methods: {
    getdata() {
      axios.get("/city.json").then(this.getdatainfo);
    },
    getdatainfo(res) {
      const data = res.data.data;
      this.city = data.cities;
      this.hotcity = data.hotCities;
      console.log(this.city);
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>
<style lang = "stylus" scoped>
</style>