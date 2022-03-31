import Vue from 'vue'
import Vuex from 'vuex'

import moduleForm from './modules/form/moduleForm'


Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    form: moduleForm,
  } 
})





