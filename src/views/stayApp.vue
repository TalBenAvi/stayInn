<template>
  <div class="stay-app">
    <section class="stay-filter-container">
      <!-- <div class="separete-line"> -->
      <button class="filter-btn">Price <i class="arrow down"></i></button>
      <button class="filter-btn border">Type of place <i class="arrow down"></i></button>
      <!-- </div> -->
      <button @click="setFilter('free cancellation')" class="filter-btn btn-1">Free cancellation</button>
      <button @click="setFilter('Wifi')" class="filter-btn btn-2">Wifi</button>
      <button @click="setFilter('Kitchen')" class="filter-btn btn-3">Kitchen</button>
      <button @click="setFilter('Air conditioning')" class="filter-btn btn-4">Air conditioning</button>
      <button @click="setFilter('Self check-in')" class="filter-btn btn-5">Self check-in</button>
      <button @click="setFilter('Washer')" class="filter-btn btn-6">Washer</button>
      <button @click="setFilter('Free parking')" class="filter-btn btn-7">Free parking</button>
      <button @click="setFilter('Dryer')" class="filter-btn btn-8">Dryer</button>
      <button @click="setFilter('Dedicated workspace')" class="filter-btn btn-9">Dedicated workspace</button>
      <button @click="setFilter('Iron')" class="filter-btn btn-10">Iron</button>
      <button @click="setFilter('Gym')" class="filter-btn btn-11">Gym</button>
      <button @click="setFilter('Pool')" class="filter-btn btn-12">Pool</button>
      <button class="filter-btn filter"><img class="filter-icon" src="@/assets/imgs/icons/filter.png">Filters</button>
    </section>
    <!-- Card Grid Display -->
    <section v-if="staysForDisplay" class="grid-card-container">
      <div v-for="stay in staysForDisplay" :key="stay.id" class="grid-card-item" @click="showDetails(stay.id)">
        <div class="grid-img">
          <img :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)" />
        </div>
        <div class="all-txt"> 
        <p class="stay-name flex">
         <span class="left-details-display">{{ stay.name }}, {{ stay.loc.country }}</span>
         <span class="price-details-display">${{ stay.price }}/ night</span>
        </p>
        <p class="stay-details-display">
          {{stay.accommodates}} guests ∙
          {{ stay.bedrooms }} bedrooms ∙
          {{ stay.beds }} beds ∙ {{ stay.bath }} baths
        </p>
        </div>
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
        location: null,
        amenities:[]
        
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
    async setFilter(fromBtns) {

                if (this.$route.query.filter) {
                  const {filter} = this.$route.query
                  this.filterBy.location = filter
                  // console.log(this.filterBy)
                } if (fromBtns) {
                  this.filterBy.amenities.push(fromBtns) 
                }
                  await this.$store.dispatch({ type: "setCurrFilter", filterBy:this.filterBy});
                  this.staysForDisplay = this.$store.getters.staysForDisplay

                // console.log(this.filterBy)
                // if (!fromBtns) {
                //     const {filter}  = this.$route.query;
                //     this.filterBy.location = filter
                //     await this.$store.dispatch({ type: "setCurrFilter", filterBy:this.filterBy });
                //     this.staysForDisplay = this.$store.getters.staysForDisplay
                // } else {
                //   this.filterBy.amenities.push(fromBtns) 
                //   await this.$store.dispatch({ type: "setCurrFilter", filterBy:this.filterBy});
                //   this.staysForDisplay = this.$store.getters.staysForDisplay
                // }

    }
  }
  
};
</script>

