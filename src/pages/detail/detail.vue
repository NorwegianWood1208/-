<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from "./compontes/Banner";
import DetailHeader from "./compontes/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>