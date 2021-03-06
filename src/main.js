// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue'
import vuetify from 'vuetify'
import App from './App'
import router from './router'
import {store} from './store/index'
import VueSwal from 'vue-swal'

Vue.config.productionTip = false

Vue.use(vuetify)
Vue.use(BootstrapVue)
Vue.use(VueSwal) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
