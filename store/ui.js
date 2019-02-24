export const state = () => ({
  colorMode: 'orange',
  menuOpen: false,
})

export const mutations = {
  TOGGLE_COLOR_MODE(state) {
    if (state.colorMode == 'orange') {
      state.colorMode = 'light'
    }
    else if (state.colorMode == 'light') {
      state.colorMode = 'navy'
    }
    else if (state.colorMode == 'navy') {
      state.colorMode = 'green'
    }
    else if (state.colorMode == 'green') {
      state.colorMode = 'dark'
    }
    else if (state.colorMode == 'dark') {
      state.colorMode = 'red'
    }
    else if (state.colorMode == 'red') {
      state.colorMode = 'orange'
    }
  },
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen;
  },
}