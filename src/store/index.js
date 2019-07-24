import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import campaigns from './campaigns'
import document from './document'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    campaigns,
    document,
  },
})

export default store
