export const state = () => ({
  colorMode: false,
  menuOpen: false,
})

export const mutations = {
  TOGGLE_COLOR_MODE(state) {
    state.colorMode = !state.colorMode;
  },
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen;
  },
}