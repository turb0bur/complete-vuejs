import Vue   from 'vue'
import Vuex  from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state:     {
    idToken: null,
    userId:  null
  },
  mutations: {},
  actions:   {
    signup({commit}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyC9LMd_cDiHTpdysIvHI-ARuK_KftPPkGg', {
        email:             authData.email,
        password:          authData.password,
        returnSecureToken: true
      })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    },
    login({commit}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyC9LMd_cDiHTpdysIvHI-ARuK_KftPPkGg', {
        email:             authData.email,
        password:          authData.password,
        returnSecureToken: true
      })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  },
  getters:   {}
})
