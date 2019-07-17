import { expect } from 'chai'
import initialState from '@/store/campaigns/state'
import mutations from '@/store/campaigns/mutations'

const emptyState = () => {
  return {
    campaigns: {},
    activeCampaign: null,
  }
}

describe('VueX - Campaigns', () => {
  describe('State', () => {
    it('initial state is correct', () => {
      expect(initialState.campaigns).to.be.an('object')
      expect(initialState.activeCampaign).equal(null)
    })
  })

  describe('Mutations', () => {
    it('setCampaigns sets the campaigns correctly', () => {
      const state = emptyState()
      const campaigns = {}

      mutations.setCampaigns(state, campaigns)
      expect(state.campaigns).equal(campaigns)
    })

    it('addCampaigns adds the campaign correctly', () => {
      const state = emptyState()
      const campaign = {
        id: 'campaign-id',
      }

      mutations.addCampaign(state, campaign)
      expect(state.campaigns).to.have.property(campaign.id)
      expect(state.campaigns[campaign.id]).equal(campaign)
    })
  })
})
