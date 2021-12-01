<template>
  <div class="home">
     {{staysForDisplay}}
  </div>
</template>

<script>


export default {
  name: 'home',
    data() {
        return {
            stays: null
        }
    },
    created() {
        this.$store.dispatch({type:'loadStays'})
    },
    computed: {
      staysForDisplay() {
        return this.$store.getters.stays
      }
    }
}
</script>
