<template>
    <div>
        <ul class="list">
            <li 
                class="item"  
                v-for="value in statusdata" 
                :key="value"
                :ref="value"
                @click="handclick"
                @touchstart.prevent="handstart"
                @touchmove="handmove"
                @touchend="handend"
            >
                {{value}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "CityNav",
  props: ["datas"],
  data() {
    return {
      onoff: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    statusdata() {
      let status = [];
      for (const i in this.datas) {
        status.push(i);
      }
      return status;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handclick(ev) {
      this.$emit("change", ev.target.innerText);
    },
    handstart() {
      this.onoff = true;
    },
    handmove(ev) {
      if (this.onoff) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const moveY = ev.touches[0].clientY - 74;
          const index = Math.floor((moveY - this.startY) / 20);
          if (index >= 0 && index <= this.statusdata.length) {
            this.$emit("change", this.statusdata[index]);
          }
        }, 16);
      }
    },
    handend() {
      this.onoff = false;
    }
  }
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