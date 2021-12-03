import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import './styles/styles.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  render: h => h(App)
}).$mount('#app')
