import Vue from 'vue'
import router from './router'
import store from './store/index'

import App from './App'

import './firebase'
import './flickity'
import './font-awesome'

Vue.config.productionTip = false

const prevent = (e) =>
  e.target.tagName !== 'input' ? e.preventDefault() : null
window.addEventListener('dragover', prevent, false)
window.addEventListener('drop', prevent, false)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
