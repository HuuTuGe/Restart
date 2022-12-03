import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   talent: {intelligence:1,
    constitution:1,
    charm:1,
    luck:1,
    family:1,
    moods:1},
    college:"",

  },
  getters: {
      
  },
  mutations: {
    addstate_intel(state,step)
    {
     state.talent.intelligence+=step;
    }
  },
  actions: {
  },
  modules: {
  }
})
