import Vue from 'vue'
import Vuex from 'vuex'
import peeling from './modules/peeling'
import todoMain from './modules/todoMain'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    skin(state){
      return state.peeling.color
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    peeling,
    todoMain
  },
  plugins: [
    createVuexPersisted({
      reducer(val) {
        // 指定存储某个模块的数据
        return {
          peeling: val.peeling,
          todoMain: val.todoMain
        }
      }
    })
  ]
})
