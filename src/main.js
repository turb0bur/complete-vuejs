import Vue         from 'vue';
import VueRouter   from 'vue-router';
import VueResource from 'vue-resource';
import App         from './App.vue';
import {routes}    from "./routes";
import store       from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.http.options.root = 'https://stock-trader-24e62.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value;
});

new Vue({
  el:     '#app',
  router,
  store,
  render: h => h(App)
});
