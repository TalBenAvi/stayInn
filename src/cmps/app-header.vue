<template>
  <header class="app-header">
    <div class="logo">
      
      <img :class="logo" :src="require(`@/assets/imgs/branding/${imgSrc}.png`)" />
    </div>

    <div class="initial-search-bar">
      <p>Start your search</p>
      <div class="circle">
        <img class="search-icon" src="../assets/imgs/icons/search-circle.png" />
      </div>
    </div>

    <div class="host-options">
      <p class="become">Become a Host</p>
    </div>

    <div class="global">
      <img src="../assets/imgs/icons/global.png" />
    </div>

    <div class="user-options">
      <div class="burger">☰</div>
      <img class="avatar" src="../assets/imgs/icons/avatar.png" />
    </div>
    
  </header>
</template>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      imgSrc: 'airbnb-logo',
    }

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)

    })

  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth <=980) {
          this.imgSrc = 'airbnb'
      } else {
        this.imgSrc ='airbnb-logo'
      }
    }
  },
  computed: {
    logo() {
      if (this.imgSrc === 'airbnb') {
        return 'logo-icon'
      } else {
        return 'logo-img'
      }
    }
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(`changed from ${oldWidth} to ${newWidth} `)
    }
  }
};
</script>