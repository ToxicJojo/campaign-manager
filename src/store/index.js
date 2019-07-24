import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import campaigns from './campaigns'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    campaigns,
  },
})

export default store
