import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import Account from './modules/Account/module'
import Layout from './modules/Layout/module'
import Socket from './modules/Socket/module'
import Batch from './modules/Batch/module'
import Dashboard from './modules/Dashboard/module'
import Equipo from './modules/Equipo/module'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      Account,
      Layout,
      Socket,
      Batch,
      Dashboard,
      Equipo
    }
  })
}

export default createStore
