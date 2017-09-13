import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Users from '@/components/Users'
import Orders from '@/components/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
