import { expect } from 'chai'
import initialState from '@/store/campaigns/state'
import mutations from '@/store/campaigns/mutations'

const emptyState = () => {
  return {
    campaignList: {},
    activeCampaign: null,
  }
}

describe('VueX - Campaigns', () => {
  describe('State', () => {
    it('initial state is correct', () => {
      expect(initialState.campaignList).to.be.an('object')
      expect(initialState.activeCampaign).equal(null)
    })
  })

  describe('Mutations', () => {
    it('setCampaignList sets the campaigns correctly', () => {
      const state = emptyState()
      const campaignList = {}

      mutations.setCampaignList(state, campaignList)
      expect(state.campaignList).equal(campaignList)
    })

    it('addCampaigns adds the campaign correctly', () => {
      const state = emptyState()
      const campaign = {
        id: 'campaign-id',
      }

      mutations.addCampaign(state, campaign)
      expect(state.campaignList).to.have.property(campaign.id)
      expect(state.campaignList[campaign.id]).equal(campaign)
    })

    it('setActiveCampaign sets the active campaign correctly', () => {
      const state = emptyState()
      const campaign = {
        id: 'campaign-id',
      }
      state.campaignList['campaign-id'] = campaign

      mutations.setActiveCampaign(state, campaign.id)
      expect(state.activeCampaign).equal(campaign)
    })
  })
})
