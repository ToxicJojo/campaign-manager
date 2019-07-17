<template lang='pug'>
  v-app
    AppNavigationDrawer
    AppHeader
    v-content
      v-container(fluid)
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
}
</script>
