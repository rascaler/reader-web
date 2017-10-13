import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'muse-ui/dist/muse-ui.css'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
