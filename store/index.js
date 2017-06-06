export const state = () => ({
  drawer: false
})

export const getters = {
  drawerState: state => state.drawer
}

export const mutations = {
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  setDrawerStatus (state, value) {
    state.drawer = value
  }
}

export const actions = {}
