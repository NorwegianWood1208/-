<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.citys}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper"  
                        v-for="item in hotcity" 
                        :key="item.id"
                        @click="handleclick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(value,index) in city" 
                :key="value" 
                :ref="index"
            >
                <div class="title border-topbottom">{{index}}</div>
                <div 
                    class="item-list border-bottom" 
                    v-for="data in value" 
                    :key="data.id"
                    @click="handleclick(data.name)"
                >
                    <div class="item">{{data.name}}</div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    city: Object,
    hotcity: Array,
    resnav: String
  },
  computed: {
    ...mapState({
      citys: "city"
    })
  },
  methods: {
    handleclick(res) {
      this.changedata(res);
      this.$router.push("/");
    },
    ...mapMutations(["changedata"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    resnav() {
      if (this.resnav) {
        const element = this.$refs[this.resnav][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/public.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        background: #eee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
    }

    .button-list {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;

        .button-wrapper {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>