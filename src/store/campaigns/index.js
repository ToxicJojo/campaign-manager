import state from './state'
import mutations from './mutations'
import actions from './actions'

const campaignModule = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default campaignModule
