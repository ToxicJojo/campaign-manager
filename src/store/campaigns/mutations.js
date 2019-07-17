import Vue from 'vue'

const mutations = {
  setCampaigns (state, campaigns) {
    state.campaigns = campaigns
  },
  addCampaign (state, campaign) {
    Vue.set(state.campaigns, campaign.id, campaign)
  },
}

export default mutations
