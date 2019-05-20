import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getter from './getter'
import actions from './actions'

import products from './modules/products'
import car from './modules/car'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getter,
    actions,
    modules:{
        products,
        car
    }
})