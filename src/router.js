import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/upload',
      name: 'UploadPage',
      component: () => import('@/views/UploadPage'),
      beforeEnter: (to, from, next) => {
        if (to.fullPath === '/') next()
        else {
          const isSignedIn = store.getters['AuthModule/isSignedIn']
          isSignedIn ? next() : next('/')
        }
      }
    }
  ]
})
