<template lang="pug">
  v-layout.campaign-hub.pa-3(column align-center)
    h1.mb-3 CampaignHub
    template(v-if='isLoading')
      v-progress-circular(indeterminate)
      span Loading campaign data
    template(v-else)
      QuickResouceCreator
</template>

<script>
import QuickResouceCreator from '@/components/QuickResourceCreator.vue'

export default {
  name: 'CampaignHub',
  components: {
    QuickResouceCreator,
  },
  data () {
    return {
      isLoading: false,
    }
  },
  mounted () {
    const campaignId = this.$route.params.campaignId
    this.loadCampaign(campaignId)
  },
  methods: {
    async loadCampaign (campaignId) {
      this.isLoading = true

      // Later on we need to create an action that can fetch a campaign from async sources
      this.$store.commit('campaigns/setActiveCampaign', campaignId)

      this.isLoading = false
    },
  },
}
</script>
