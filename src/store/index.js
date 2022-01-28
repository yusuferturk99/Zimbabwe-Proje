import Vue from 'Vue';
import Vuex,{createStore} from 'Vuex';
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
  }
})
const store = createStore({
    modules:{
        auth,
        projects,
    }
});
export default store