import Vue from 'vue'
import Vuex from 'vuex'

import {userStore} from './user.store.js'
import {stayStore} from './stay.store.js'
import {tripStore} from './trip.store.js'
import {orderStore} from './order.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tripStore,
    orderStore,
    stayStore,
    userStore
  }
})
