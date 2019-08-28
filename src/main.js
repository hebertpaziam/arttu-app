import Vue from 'vue'
import router from './router'
import store from './store/index'

import App from './App'

import './font-awesome'
import './firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
