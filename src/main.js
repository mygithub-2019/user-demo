import Vue from 'vue'
import App from './App.vue'
//Validation
import Vuelidate from 'vuelidate';

import VueRouter from 'vue-router';
import { routes } from './routes';



Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  mode: 'history',
  routes
});

//Global router Guard
router.beforeEach((to, from, next) => {
  console.log('Global router guard');
  next(); //Important
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
