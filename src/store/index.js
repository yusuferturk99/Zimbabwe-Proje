import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import projects from './projects';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data ()
  },
  mutations: {
    // methods
  },
  actions: {
    // async mutation-like
  },
  getters: {
    // computed
  },
  modules:{
      auth,
      projects,
  }
})
