import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import museui from '@/pages/museui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/museui',
      name: 'museui',
      component: museui
    }
  ]
})
