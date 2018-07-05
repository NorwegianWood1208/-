<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="seach" v-show="keyword" >
      <ul>
        <li 
          class="search-item border-bottom" 
          v-for="item in arr" 
          :key="item.id" 
          @click ="handleclick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="nolength">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySeach",
  props: {
    list: Object
  },
  data() {
    return {
      keyword: "",
      arr: [],
      timer: null
    };
  },
  computed: {
    nolength() {
      return !this.arr.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.arr = [];
        return;
      }
      this.timer = setTimeout(() => {
        const resolt = [];
        for (var i in this.list) {
          this.list[i].forEach(e => {
            if (
              e.spell.indexOf(this.keyword) > -1 ||
              e.name.indexOf(this.keyword) > -1
            ) {
              resolt.push(e);
            }
          });
        }
        this.arr = resolt;
      }, 100);
    }
  },
  methods: {
    handleclick(res) {
      this.$store.dispatch("changedata", res);
      this.$router.push("/");
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.seach);
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/public.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>