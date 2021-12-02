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
      <!-- <button class="filter-btn">Dedicated workspace</button>
      <button class="filter-btn">Iron</button> -->
      <button class="filter-btn">Gym</button>
      <!-- <button class="filter-btn">Pool</button> -->
      <button class="filter-btn">Filters</button>
    </section>
    <!-- Card Grid Display -->
    <section v-if="staysForDisplay" class="grid-card-container">
      <div class="grid-card-item">
        <div class="grid-img">
          <img src="../assets/imgs/4.jpg" />
        </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
        </p>
      </div>
      <div class="grid-card-item">
        <div class="grid-img">
        <img src="../assets/imgs/home-page/homes/cabin/1.jpeg"/>
         </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
        </p>
      </div>
      <div class="grid-card-item">
         <div class="grid-img">
        <img src="../assets/imgs/home-page/homes/camper/1.jpeg"/>
        </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
        </p>
      </div>
       <div class="grid-card-item">
         <div class="grid-img">
        <img src="../assets/imgs/home-page/homes/kezhan/1.jpeg"/>
        </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
        </p>
      </div>
      <div class="grid-card-item">
         <div class="grid-img">
        <img src="../assets/imgs/home-page/homes/trullo/1.jpeg"/>
        </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
        </p>
      </div>
      <div class="grid-card-item">
         <div class="grid-img">
        <img src="../assets/imgs/home-page/homes/camper/1.jpeg"/>
        </div>
        <p class="stay-name">
          {{ staysForDisplay[0].name }}, {{ staysForDisplay[0].loc.address }}
        </p>
        <p class="stay-details-display">
          {{ staysForDisplay[0].accommodates }} guests ∙
          {{ staysForDisplay[0].bedrooms }} bedrooms ∙
          {{ staysForDisplay[0].beds }} bed ∙ {{ staysForDisplay[0].bath }} bath
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
      stays: null,
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
};
</script>

