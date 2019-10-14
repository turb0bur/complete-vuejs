import Vue         from 'vue'
import Vuex        from 'vuex'
import axios       from './axios-auth'
import globalAxios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state:     {
    idToken: null,
    email:   null,
    user:    null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.email   = userData.email;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions:   {
    signup({commit, dispatch}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyC9LMd_cDiHTpdysIvHI-ARuK_KftPPkGg', {
        email:             authData.email,
        password:          authData.password,
        returnSecureToken: true
      })
        .then(response => {
          console.log(response);
          commit('authUser', {
            token: response.data.idToken,
            email: response.data.email
          });
          dispatch('storeUser', authData);
        })
        .catch(error => console.error(error))
    },
    login({commit}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyC9LMd_cDiHTpdysIvHI-ARuK_KftPPkGg', {
        email:             authData.email,
        password:          authData.password,
        returnSecureToken: true
      })
        .then(response => {
          console.log(response);
          commit('authUser', {
            token: response.data.idToken,
            email: response.data.email
          })
        })
        .catch(error => console.error(error))
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(response => {
          console.log(response);
          const data  = response.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id    = key;
            users.push(user);
            if (user.email == state.email) {
              commit('storeUser', user)
            }
          }
          console.log(users);
        })
        .catch(error => console.error(error))
    }
  },
  getters:   {
    user(state) {
      return state.user;
    }
  }
})
