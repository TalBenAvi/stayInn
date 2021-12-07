import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import './styles/styles.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'; 
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar)



Vue.use(ElementUI)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDLnvwHZ3qiqSKnFkDrUd-6oYw-2f2m9vE',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  render: h => h(App)
}).$mount('#app')
