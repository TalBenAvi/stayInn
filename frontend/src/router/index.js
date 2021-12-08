import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import stayApp from '../views/stayApp.vue'
import stayDetails from '../views/stayDetails.vue'
import hostPage from '../views/host.vue'
// import userTrips from '../views/user-trips.vue'
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
  {
    path: '/host',
    name: 'host',
    component: hostPage
  },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: userTrips
  // },
  // {
  //   path: '/user/wishlist',
  //   name: 'user',
  //   component: userTrips
  // },
  // {
  //   path: '/user/notifications',
  //   name: 'user',
  //   component: userTrips
  // },
  // {
  //   path: '/user/trip',
  //   name: 'user',
  //   component: userTrips
  // },

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router

