import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/app/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    }
  ]
})
