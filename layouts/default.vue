<template lang="pug">
  v-app(fixed)
    side-bar
    app-bar
    main: v-container(fluid): nuxt
    v-footer
      span Designed by Asterix*Media
      v-spacer
      span © {{ new Date().getFullYear() }}
</template>

<script>
  import { SideBar, AppBar } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      SideBar,
      AppBar
    }
  }
</script>
