<template>
  <section class="become-page">
    <div class="become-page-container">
      <img src="../assets/imgs/user-pages/become.png" />
      <div class="become-text">
        <span>Hosting</span>
        <span>makes Stayinn,</span>
        <span>Stayinn</span>
        <button @click="toManageListing">Try Hosting</button>
        
      </div>
    </div>
  </section>
</template>

<script>


import {eventBus} from '../services/eventBus.js'

export default {

  data() {
    return {
      user: null,
    };
  },
  methods: {
    toManageListing() {
      var user = this.$store.getters.loggedinUser;

      console.log(user)
      if (user) {
        this.$router.push('/host')
      } else {
            const msg = {
          txt: `Please sign-in to procceed`,
          type: "error",
        };
        eventBus.$emit("showMsg", msg);

      }
    },
  },
};
</script>

