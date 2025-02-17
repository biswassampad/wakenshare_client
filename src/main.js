import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios';

Vue.use('axios');
Vue.config.productionTip = false

axios.defaults.baseURL ="http://127.0.0.1:8000/"

new Vue({
  icons: {
    iconfont: 'md', // default - only for display purposes
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
