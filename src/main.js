import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import store from "./store/store";
import App from './App.vue';
import Vuelidate from 'vuelidate';
import {Select, Option} from 'element-ui';

// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(Vuelidate);
Vue.use(Select);
Vue.use(Option)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
