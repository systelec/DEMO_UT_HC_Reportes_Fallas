export const SET_DRAWER = 'SET_DRAWER'
export const SET_CLIPPED = 'SET_CLIPPED'
export const SET_BREADCRUMBS = 'SET_BREADCRUMBS'
export const SET_WINDOW = 'SET_WINDOW'
export const SET_MODAL_SIZE = 'SET_MODAL_SIZE'
export const SET_MODA_FULL_SCREEN = 'SET_MODA_FULL_SCREEN'

const mutations = {
  [SET_DRAWER](state, drawer) {
    state.drawer = drawer
  },
  [SET_CLIPPED](state, clipped) {
    state.clipped = clipped
  },
  [SET_BREADCRUMBS](state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  [SET_WINDOW](state, window) {
    state.window = window
  },
  [SET_MODAL_SIZE](state, modalSize) {
    state.modalSize = modalSize
  },
  [SET_MODA_FULL_SCREEN](state, modalFullScreen) {
    state.modalFullScreen = modalFullScreen
  }
}

export default mutations
