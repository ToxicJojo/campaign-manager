import Vue from 'vue'
import Vuex from 'vuex'

import campaigns from './campaigns'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    campaigns,
  },
})

export default store
