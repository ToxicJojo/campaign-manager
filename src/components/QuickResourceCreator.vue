<template lang="pug">
  v-layout.quick-resource-creator(wrap justify-center align-center)
    v-flex(shrink)
      v-card.ma-5(hover width='250' height='250')
        v-layout(column fill-height align-center justify-center)
          span.title Create Document
    v-flex(shrink)
      v-card.ma-5(hover width='250' height='250')
        v-layout(column fill-height align-center justify-center)
          span.title Create Spell
</template>

<script>
export default {
  name: 'QuickResourceCreator',
}
</script>

<style lang="scss" scoped>

</style>
