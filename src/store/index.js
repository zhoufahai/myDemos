import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import vuexTest from './modules/vuexTest'

const store = new Vuex.Store({
  modules: {
    vuexTest: vuexTest
  }
})

export default store
