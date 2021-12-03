<template>
  <div class="stay-app">
    <section class="stay-filter-container">
      <button class="filter-btn">Price</button>
      <button class="filter-btn border">Type of place</button>
      <button class="filter-btn">Free cancellation</button>
      <button class="filter-btn">Wifi</button>
      <button class="filter-btn">Kitchen</button>
      <button class="filter-btn">Air conditioning</button>
      <button class="filter-btn">Self check-in</button>
      <button class="filter-btn">Washer</button>
      <button class="filter-btn">Free parking</button>
      <button class="filter-btn">Dryer</button>
      <button class="filter-btn">Dedicated workspace</button>
      <button class="filter-btn">Iron</button>
      <button class="filter-btn">Gym</button>
      <button class="filter-btn">Pool</button>
      <button class="filter-btn">Filters</button>
    </section>
    <!-- Card Grid Display -->
    <section v-if="staysForDisplay" class="grid-card-container">
      <div v-for="stay in staysForDisplay" :key="stay.id" class="grid-card-item" @click="showDetails(stay.id)">
        <div class="grid-img">
          <img :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)" />
        </div>
        <p class="stay-name flex">
         {{ stay.name }}, {{ stay.loc.country }} ${{ stay.price }}
          <span class="stay-details-display">/ night</span>
        </p>
        <p class="stay-details-display">
          {{stay.accommodates}} guests ∙
          {{ stay.bedrooms }} bedrooms ∙
          {{ stay.beds }} bed ∙ {{ stay.bath }} bath
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "stay-app",
  data() {
    return {
      stay: null,
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    staysForDisplay() {
         return this.$store.getters.stays;
    },
  },
  methods : {
    showDetails(stayId) {
      this.$router.push({path: `/stay/details/${stayId}`})
    }
  },
  watch: {
        '$route.query.filter': {
            handler() {
                const filterBy  = this.$route.query.filter;
                console.log("----yaniv----", filterBy)
                this.$store.dispatch({ type: "setCurrFilter", filterBy });
            },
            immediate: true
      }
  }
};
</script>

