<template lang='pug'>
  v-app
    //AppNavigationDrawer
    AppHeader
    v-content
      v-container.pa-0(fluid fill-height)
        template(v-if='isInitializingStorageProviders')
          v-layout(column fill-height justify-center align-center)
            v-progress-circular.mb-4(indeterminate size='64' color='primary')
            span Initializing storage providers
        template(v-else)
          router-view
    AppFooter
</template>

<script>
import AppNavigationDrawer from '@/components/layout/AppNavigationDrawer.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavigationDrawer,
    AppHeader,
    AppFooter,
  },
  data () {
    return {
      isInitializingStorageProviders: false,
    }
  },
  mounted () {
    this.initStorageProviders()
  },
  methods: {
    async initStorageProviders () {
      this.isInitializingStorageProviders = true

      // Initialize all syncProviders that are configured.
      await Promise.all(this.$store.state.syncProviders
        .filter((syncProvider) => {
          return syncProvider.configured
        })
        .map((syncProvider) => {
          return syncProvider.init()
        }))
      this.isInitializingStorageProviders = false
    },
  },
}
</script>
