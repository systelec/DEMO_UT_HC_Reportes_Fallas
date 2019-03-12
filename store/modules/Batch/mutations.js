export const SET_BATCH = 'SET_BATCH'
export const MODAL_INFORMACION_BATCH = 'MODAL_INFORMACION_BATCH'
export const MODAL_DECLARAR_PERDIDA_BATCH = 'MODAL_DECLARAR_PERDIDA_BATCH'

const mutations = {
  [SET_BATCH](state, batch) {
    state.batch = batch
  },
  [MODAL_INFORMACION_BATCH](state, modal) {
    state.modalInformacionBatch = modal
  },
  [MODAL_DECLARAR_PERDIDA_BATCH](state, modal) {
    state.modalDeclararPerdidaBatch = modal
  }
}

export default mutations
