import Vue from 'vue'
import Router from 'vue-router'

import CampaignList from '@/views/CampaignList.vue'
import CampaignHub from '@/views/CampaignHub.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/campaigns',
      component: CampaignList,
    },
    {
      path: '/campaigns/:campaignId',
      component: CampaignHub,
    },
  ],
})
