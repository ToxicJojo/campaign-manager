import Vue from 'vue'

const mutations = {
  setCampaignList (state, campaignList) {
    state.campaignList = campaignList
  },
  addCampaign (state, campaign) {
    Vue.set(state.campaignList, campaign.id, campaign)
  },
}

export default mutations
