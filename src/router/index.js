import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home/Home'
import Contato from '@/Pages/Contato/Contato'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
  ]
})
