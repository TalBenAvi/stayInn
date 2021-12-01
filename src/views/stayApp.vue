<template>
<div class="stay-app">
     {{staysForDisplay}}
  </div>
</template>

<script>
export default {
    name:'stay-app',
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

