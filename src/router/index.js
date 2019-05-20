import Vue from 'vue'
import Router from 'vue-router'
import Manager from '@/components/manager'
import gouwuche from '@/components/car/gouwuche'

import net from '@/components/net'


import img from '@/components/img'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gouwuche',
      component: gouwuche
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Manager',
//       component: Manager
//     }
//   ]
// })

