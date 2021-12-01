import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import stayApp from '../views/stayApp.vue'
import stayDetails from '../views/stayDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/stay',
    name: 'stayApp',
    component: stayApp
  }, 
  {
    path: '/stay/details/:stayId?',
    name: 'stayDetails',
    component: stayDetails
  },

]

const router = new VueRouter({
  routes
})

export default router
