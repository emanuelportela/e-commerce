import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/Menu.vue'
import Basket from '../components/Basket.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [ {
      path: '/',
      name: 'menu',
      component: Menu
   }, {
      path: '/basket',
      name: 'basket',
      component: Basket
   }
   ]
})
