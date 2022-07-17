import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ComponentsLib from '../../lib'

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.use(ComponentsLib)

const router = new VueRouter({
  mode: 'history',
  routes: []
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
});
