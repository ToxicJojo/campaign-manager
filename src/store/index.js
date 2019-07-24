import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import campaigns from './campaigns'
import objects from './objects'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    campaigns,
    objects,
  },
})

export default store
