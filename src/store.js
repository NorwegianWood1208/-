import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '上海'
  },
  mutations: {
    changedata(state, res) {
      state.city = res
      localStorage.city = res
    }
  },
  actions: {
    changedata(ctx, res) {
      ctx.commit('changedata', res)
    }
  }
})