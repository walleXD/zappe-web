<template lang="pug">
  v-navigation-drawer.grey.lighten-4.pb-0(
    v-model="drawer",
    temporary,
    clipped,
    height="100%",
    light
  )
    v-list

      template(v-for="(item, i) in items")

        v-layout(
          row,
          v-if="item.heading"
          align-center,
          :key="i"
        )
          v-flex(xs6)
            v-subheader(v-if="item.heading", light)
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if="item.divider",
          :key="i"
        )

        v-list-item(
          :key="i",
          v-else
        )
          v-list-tile(
            :nuxt="item.nuxt",
            :to="item.to",
            :href="item.href",
            :router="item.router",
            :target="item.target",
            :tag="item.tag"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              i.mdi.icon.icon--dark(
                v-else,
                :class="item.m_icon"
              )
            v-list-content
              v-list-tile-title {{ item.text }}
</template>

<script>
  const nuxtLinks = {
    router: true,
    nuxt: true
  }

  export default {
    name: 'SideBar',
    data: () => ({
      items: [
        { icon: 'home', text: 'Live Stream', to: '/', ...nuxtLinks },
        { icon: 'schedule', text: 'Schedule', to: '/schedule', ...nuxtLinks },
        { icon: 'headset', text: 'Shows', to: '/shows', ...nuxtLinks },
        { icon: 'adjust', text: 'DJs', to: '/djs', ...nuxtLinks },
        { icon: 'event', text: 'Events', to: '/events', ...nuxtLinks },
        { icon: 'people', text: 'Team', to: '/team', ...nuxtLinks },
        { icon: 'info', text: 'About', to: '/about', ...nuxtLinks },
        { divider: 'true' },
        { heading: 'Social' },
        {
          m_icon: 'mdi-facebook',
          text: 'Facebook',
          href: 'https://www.facebook.com/WHCSHunterRadio/',
          target: '__blank'
        },
        {
          m_icon: 'mdi-twitter',
          text: 'Twitter',
          href: 'https://twitter.com/whcsradio',
          target: '__blank'
        },
        {
          m_icon: 'mdi-instagram',
          text: 'Instagram',
          href: 'https://www.instagram.com/whcsradio',
          target: '__blank'
        },
        {
          m_icon: 'mdi-snapchat',
          text: 'Snapchat',
          href: 'https://www.snapchat.com/add/whcsradio',
          target: '__blank'
        }
      ]
    }),
    computed: {
      drawer: {
        get () {
          return this.$store.getters.drawerState
        },
        set (value) {
          this.$store.commit('setDrawerStatus', value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  a
    text-decoration none
</style>
