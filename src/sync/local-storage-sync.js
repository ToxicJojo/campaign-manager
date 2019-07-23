import localStorageHelper from '@/util/local-storage-helper'

const CAMPAIGN_LIST_KEY = 'campaigns'

const localStorageSync = {
  name: 'Local Storage',
  configured: true,
  init () {
    // Initialize the campaign list with an empty object if it doesn't exist yet.
    if (!localStorageHelper.hasObject(CAMPAIGN_LIST_KEY)) {
      localStorageHelper.setObject(CAMPAIGN_LIST_KEY, {})
    }
  },
  async loadCampaignList () {
    return localStorageHelper.getObject(CAMPAIGN_LIST_KEY)
  },
  async loadCampaign (campaignId) {
    return localStorageHelper.getObject(campaignId)
  },
  async syncCampaign (campaignToSync) {
    // Save the whole campaign in localStorage under its id
    localStorageHelper.setObject(campaignToSync.id, campaignToSync)
    // Add the metaData of the campaign into the campaign list
    const campaignList = localStorageHelper.getObject(CAMPAIGN_LIST_KEY)
    campaignList[campaignToSync.id] = campaignToSync.metaData
    localStorageHelper.setObject(CAMPAIGN_LIST_KEY, campaignList)
  },
}

export default localStorageSync
