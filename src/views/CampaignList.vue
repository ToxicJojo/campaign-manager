<template lang="pug">
  v-layout(column align-center).campaign-list
    h1.mb-3.mt-5.display-3 Campaigns
    span.mb-5.subheading Manage your campaigns
    v-card.campaign-card.pa-3(color='grey lighten-3' raised)
      v-layout(column fill-height align-center)
        template(v-if='isCreatingCampaign')
          v-btn.back-button(flat icon @click='isCreatingCampaign = false')
            v-icon arrow_back
          v-form.campaign-form.mt-5
            v-text-field.mb-2(v-model='campaignName' outline color='primary' label='Campaign name' placeholder='Thralls of the Zulkir')
            v-textarea(v-model='campaignDescription' outline color='primary' label='Description' placeholder='The drums of war are playing while the horde marches torwards Falkenreach. United under their leader Zulkir the hobgoblins plan to ...')
          v-spacer
          v-btn(round color='primary' @click='createNewCampaign') Start campaign
        template(v-else)
          template(v-if='isEmptyState')
            v-img.mb-4.empty-state-img(:src='require("@/assets/ecology.svg")' height='240' width='240' contain)
            span.mb-0.grey--text.text--darken-1 You don't have any campaigns yet.
            p.grey--text.text--darken-1 Get started by creating one!
          template(v-else)
              template(v-for='campaign in campaigns')
                v-layout.campaign.mb-4(@click='openCampaign(campaign.id)')
                  v-flex(shrink)
                    v-avatar.mr-3(color='grey')
                  v-layout(column)
                    h2.title.grey--text.text--darken-4.mb-1 {{ campaign.name }}
                    span.description.grey--text.text--darken-2 {{ campaign.description }}
          v-spacer
          v-btn(round color='primary' @click='isCreatingCampaign = true') Create new campaign

</template>

<script>
import uuid from '@/util/uuid'

export default {
  name: 'CampaignList',
  data () {
    return {
      isLoading: false,
      isCreatingCampaign: false,
      campaignName: '',
      campaignDescription: '',
    }
  },
  computed: {
    campaigns () {
      return this.$store.state.campaigns.campaignList
    },
    isEmptyState () {
      const campaignCount = Object.keys(this.campaigns).length
      return (campaignCount === 0)
    },
  },
  methods: {
    createNewCampaign () {
      const newCampaign = {
        name: this.campaignName,
        description: this.campaignDescription,
        id: uuid(),
      }

      this.$store.commit('campaigns/addCampaign', newCampaign)
      this.openCampaign(newCampaign.id)
    },
    openCampaign (campaignId) {
      this.$router.push(`campaigns/${campaignId}`)
    },
  },
}
</script>

<style lang="scss" scoped>

.campaign-list {
  background: #EB5757;
}

.campaign-card {
  min-height: 450px;
  max-width: 600px;
  width: 80%;
}

.campaign {
  width: 100%;
  height: 48px;
  cursor: pointer;
  flex-grow: 0;

  .description {
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
  }
}

.back-button {
  position: absolute;
  top: 0px;
  left: 0px;
}

.campaign-form {
  width: 100%;
}
</style>
