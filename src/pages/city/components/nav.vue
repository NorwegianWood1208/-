<template>
    <div>
        <ul class="list">
            <li class="item"  v-for="value,index in datas" :key="index.id">{{index}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "CityNav",
  props: ["datas"]
};
</script>
<style lang="stylus" scoped>
@import '~assets/public.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;

    .item {
        line-height: 0.4rem;
        text-align: center;
        color: $bgColor;
    }
}
</style>