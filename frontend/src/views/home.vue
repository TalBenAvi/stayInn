<template>
  <section class="home home-layout">
    <div class="top-fold">
      <div class="home-img">
        <img src="~@/assets/imgs/home-page/main.jpg" />
        <div class="slogan">
          <p>Not sure where to go? Perfect.</p>
        </div>
      </div>
      <button @click="showStays('all')" class="flexible-btn"><span>I'm flexible</span></button>
    </div>

    <div class="bottom-fold full">
      <div class="locations-section home-layout">
        <h1>Live anywhere</h1>
        <div class="location-cards">
          <div v-for="location in locations" :key="location" class="location-card" @click="showStays(location)">
            <img class="location-img" :src="require(`@/assets/imgs/home-page/locations/${location}.jpg`)"/>
            <h4>{{location}}</h4>
          </div>
        </div>

      <div class="banner">
        <h1>Quarantine the right way</h1>
        <button>Explore Homes</button>
        <img src="~@/assets/imgs/home-page/banners/2.jpg">
      </div>

      <h1>Unique Stays</h1>
      <div class="location-cards">
        <!-- <div @click="showDetails('10006566')" class="location-card"> -->
          <div @click="showDetails('61b6ed46a64a821250ab6197')" class="location-card">
          <img class="location-img" src="~@/assets/imgs/home-page/homes/cabin/1.webp"/>
          <h4>Carpathian Log Home</h4>
      </div>

      <!-- <div @click="showDetails('10306576')" class="location-card"> -->
      <div @click="showDetails('61b6ed47a64a821250ab61ab')" class="location-card">
          <img class="location-img" src="~@/assets/imgs/home-page/homes/kezhan/1.webp"/>
          <h4>Kezhan</h4>
      </div>

      <!-- <div @click="showDetails('10706536')" class="location-card"> -->
      <div @click="showDetails('61b6ed47a64a821250ab61b7')" class="location-card">
        <img class="location-img" src="~@/assets/imgs/home-page/homes/trullo/1.webp"/>
        <h4>Trulli</h4>
      </div>

      <!-- <div @click="showDetails('10602146')" class="location-card"> -->
       <div @click="showDetails('61b6ed47a64a821250ab61c8')" class="location-card">
        <img class="location-img" src="~@/assets/imgs/home-page/homes/camper/1.webp"/>
        <h4>Camper</h4>
      </div>
        </div>

      <div @click="toHost()" class="banner">
        <h1>Become a host</h1>
        <h4 class="sub-header">Unlock new opportunities by sharing your space.</h4>
        <button class="learn-btn">Learn More</button>
        <img src="~@/assets/imgs/home-page/banners/1.jpg">
      </div>

    </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      locations: ['amsterdam', 'paris', 'lisbon', 'london']
    }

  },
  created() {
   

  },
  methods: {
    showStays(filterBy) {
      // console.log(filterBy)
      this.$store.dispatch({type:'updateTrip', trip: ''})
      console.log(this.$store.getters.currentTrip)
      if (filterBy === 'all') {
        

        this.$router.push('/stay')
      } else {
        this.$router.push( {path: '/stay' , query: {filter: filterBy}})
      }
    },
    showDetails(stayId) {
      this.$router.push(`/stay/details/${stayId}`)
    },
    toHost() {
       this.$router.push('/become');
    }
  }
};
</script>
