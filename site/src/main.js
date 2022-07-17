import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: []
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
});
