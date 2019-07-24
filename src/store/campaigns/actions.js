const actions = {
  async loadCampaigns ({ state, commit, rootState }) {
    let campaignList = {}

    for (let i = 0; i < rootState.syncProviders.length; i++) {
      const capmaigns = await rootState.syncProviders[i].loadCampaignList()
      campaignList = Object.assign(campaignList, capmaigns)
    }

    commit('setCampaignList', campaignList)
  },
  async setActiveCampaign ({ state, commit, rootState }, campaignId) {
    const campaign = await rootState.syncProviders[0].loadCampaign(campaignId)
    commit('setActiveCampaign', campaign)
  },
  async syncCampaign ({ state, commit, rootState }, campaign) {
    // When there are more providers we need to set an active one before
    rootState.syncProviders[0].syncCampaign(campaign)
  },
}

export default actions
