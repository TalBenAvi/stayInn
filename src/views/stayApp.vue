<template>
<div class="stay-app">
 <section class="stay-filter-container flex space-between align-center">

 </section>
     <!-- {{staysForDisplay}} -->
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

