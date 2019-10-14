import Vue       from 'vue'
import App       from './App.vue'
import axios     from 'axios'
import router    from './router'
import store     from './store'
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
axios.defaults.baseURL = 'https://vuejs-learning-4d547.firebaseio.com';

const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config);

  return config;
});

const responseInterceptor = axios.interceptors.response.use(response => {
  console.log('Response interceptor', response);

  return response;
});
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el:     '#app',
  router,
  store,
  render: h => h(App)
})
