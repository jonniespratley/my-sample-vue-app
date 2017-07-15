import Vue from 'vue'
import Router from 'vue-router'
import Cars from '@/components/Cars'
import Hello from '@/components/Hello'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter', to, from)
        next()
      }
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter', to, from)
        next()
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
