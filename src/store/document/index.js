import state from './state'
import mutations from './mutations'
import actions from './actions'

const objectsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default objectsModule
