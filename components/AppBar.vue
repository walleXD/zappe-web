<template lang="pug">
  v-toolbar(fixed, light)
    v-toolbar-side-icon(
    light,
    @click.native.stop="toggleDrawer")
    v-toolbar-title Title
    v-spacer
    v-toolbar-logo.hidden-sm-and-down: span WHCS Radio
    v-spacer
    v-btn(icon, light, disabled): v-icon search
</template>

<script>
  export default {
    name: 'AppBar',
    methods: {
      toggleDrawer () {
        this.$store.commit('toggleDrawer')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .toolbar__title
    flex none
  .toolbar__logo > span
    margin 0 auto auto
    padding-right 20px
    @media screen and (min-width: 1200px)
      padding-right 70px
</style>
