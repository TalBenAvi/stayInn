import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import stayApp from '../views/stayApp.vue'
import stayDetails from '../views/stayDetails.vue'
import hostPage from '../views/host.vue'
import userTrips from '../views/user-trips.vue'
import accountPage from '../views/user-account.vue'
import userNotifications from '../views/user-notifications.vue'
import userWishlist from '../views/user-wishlist.vue'
import becomeHost from '../views/become.vue'
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
  {
    path: '/account',
    name: 'account',
    component: accountPage
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: userWishlist
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: userNotifications
  },
  {
    path: '/trip',
    name: 'trip',
    component: userTrips
  },
  {
    path: '/become',
    name:'becomeHost', 
    component:becomeHost
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router

