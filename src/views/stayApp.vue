<template>
  <div class="stay-app">
    <section class="stay-filter-container">
      <button class="filter-btn">Price <i class="arrow down"></i></button>
      <button class="filter-btn border">Type of place <i class="arrow down"></i></button>
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
      <button class="filter-btn">🚬 Filters</button>
    </section>
    <!-- Card Grid Display -->
    <section v-if="staysForDisplay" class="grid-card-container">
      <div v-for="stay in staysForDisplay" :key="stay.id" class="grid-card-item" @click="showDetails(stay.id)">
        <div class="grid-img">
          <img :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)" />
        </div>
        <p class="stay-name flex">
         {{ stay.name }}, {{ stay.loc.country }}<span class="right-details-display">${{ stay.price }}
          <span class="stay-details-display">/ night</span> </span>
        </p>
        <p class="stay-details-display">
          {{stay.accommodates}} guests ∙
          {{ stay.bedrooms }} bedrooms ∙
          {{ stay.beds }} beds ∙ {{ stay.bath }} baths
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
      staysForDisplay : null,
      filterBy: {
        
      }
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
    this.setFilter()
  },
  computed: {
    // staysForDisplay() {
    //      return this.$store.getters.staysForDisplay;
    // },
  },
  methods : {
    showDetails(stayId) {
      this.$router.push({path: `/stay/details/${stayId}`})
    },
    async setFilter() {
                const filterBy  = this.$route.query.filter;
                console.log("----yaniv----", filterBy)
                await this.$store.dispatch({ type: "setCurrFilter", filterBy });
                this.staysForDisplay = this.$store.getters.staysForDisplay
    }
  },
  watch: {
        // '$route.query.filter': {
        //     async handler() {
        //         const filterBy  = this.$route.query.filter;
        //         console.log("----yaniv----", filterBy)
        //         await this.$store.dispatch({ type: "setCurrFilter", filterBy });
        //         this.staysForDisplay = this.$store.getters.staysForDisplay
        //     },
        //     immediate: true
      }
  
};
</script>

