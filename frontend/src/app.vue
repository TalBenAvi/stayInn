<template>
  <div id="app">
    <user-msg></user-msg>
    <app-header />
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue'
import appFooter from './cmps/app-footer.vue'
import userMsg from './cmps/user-msg.vue'

export default{
  created() {
  },
  components: {
    appHeader,
    appFooter,
    userMsg
    
  }
}
</script>
