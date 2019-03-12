const getters = {
  drawer(state) {
    return state.drawer
  },
  clipped(state) {
    return state.clipped
  },
  breadcrumbs(state) {
    return state.breadcrumbs
  },
  window(state) {
    return state.window
  },
  modalSize(state) {
    return state.modalSize
  },
  modalFullScreen(state) {
    return state.modalFullScreen
  }
}

export default getters
