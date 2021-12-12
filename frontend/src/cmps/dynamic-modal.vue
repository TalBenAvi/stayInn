<template>
  <section v-if="clicked" class="dynamicModal">
    <div v-if="clicked === 'location'" class="location-modal">
      <span>GO ANYWHERE, ANYTIME</span>
      <button @click="showStays()"><p>I'm flexible</p></button>
      <img src="~@/assets/imgs/icons/arrow.png" />
    </div>

    <div v-if="clicked === 's-location'"  class="more-locations-modal">
      <div class="s-location-container">
        <div @click="setLocation('Amsterdam, Netherlands')" class="location-option-container">
          <div class="location-btn">
            <img src="~@/assets/imgs/icons/location-black.png" />
          </div>
          <span>Amsterdam, Netherlands</span>
        </div>
        <div @click="setLocation('Paris, France')" class="location-option-container">
          <div  class="location-btn">
            <img src="~@/assets/imgs/icons/location-black.png" />
          </div>
          <span>Paris, France</span>
        </div>
        <div @click="setLocation('Lisbon, Portugal')" class="location-option-container">
          <div class="location-btn">
            <img src="~@/assets/imgs/icons/location-black.png" />
          </div>
          <span>Lisbon, Portugal</span>
        </div>
        <div @click="setLocation('London, England')" class="location-option-container">
          <div class="location-btn">
            <img src="~@/assets/imgs/icons/location-black.png" />
          </div>
          <span>London, England</span>
        </div>
      </div>
    </div>
    <div v-if="clicked === 'guests'" class="guests-modal">
      <form>
        <label class="expanded-search-label" for="adults">
          <span>Adults</span>
          <span>Ages 13 or above</span>
          <el-input-number
            v-model="newTrip.guests.adults"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
        <label class="expanded-search-label" for="children">
          <span>Children</span>
          <span>Ages 2-12</span>
          <el-input-number
            v-model="newTrip.guests.children"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
        <label class="expanded-search-label" for="infants">
          <span>Infants</span>
          <span>Under 2</span>
          <el-input-number
            v-model="newTrip.guests.infants"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
        <label class="expanded-search-label" for="pets">
          <span>Pets</span>
          <span class="sub-header-lable">Bringing an assitance animal?</span>
          <el-input-number
            v-model="newTrip.guests.pets"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
      </form>

      <span class="bottom-text"
        >If you're lucky enough to have more than 2 pets with you, be sure to
        let your host know.</span
      >
    </div>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.js";
export default {
  name: "Dynamic Modal",
  props: ["clicked"],
  data() {
    return {
      show: true,
      newTrip: {
        guests: {
          adults: 0,
          children: 0,
          infants: 0,
          pets: 0,
        },
        startDate: "",
        endDate: "",
        dest: {
          country: "",
          countryCode: "",
          address: "",
        }
      }

    };
  },
  created() {
    eventBus.$on("setDates", this.setDates);
  },
  methods: {
    handleChange(value) {
      console.log(value)
      eventBus.$emit('setGuests', value)
    },
    showStays() {
      this.$router.push("/stay");
    },
    setDates(dates) {
      this.newTrip.startDate = dates[0]
      this.newTrip.endDate = dates[1]
      console.log(this.newTrip)
      this.setNewTrip()
    },
    setLocation(location) {
      if (location === 'Amsterdam, Netherlands') {
        this.newTrip.dest.country = 'AMSTERDAM'
        this.newTrip.dest.countryCode = 'AMS'
        this.newTrip.dest.address = 'Amsterdam'
      } else if (location === 'Paris, France') {
        this.newTrip.dest.country = 'PARIS'
        this.newTrip.dest.countryCode = 'PR'
        this.newTrip.dest.address = 'Paris'
      } else if (location === 'Lisbon, Portugal') {
        this.newTrip.dest.country = 'LISBON'
        this.newTrip.dest.countryCode = 'LSB'
        this.newTrip.dest.address = 'Lisbon'
      } else if (location === 'London, England') {
        this.newTrip.dest.country = 'LONDON'
        this.newTrip.dest.countryCode = 'LND'
        this.newTrip.dest.address = 'London'
        
      }
      eventBus.$emit('selectedLocation', location)
    },
    setNewTrip() {
      this.$store.dispatch({type:'updateTrip', trip:this.newTrip})
      eventBus.$emit('updateCityName', this.newTrip.dest.country)
      this.$router.push( {path: '/stay' , query: {trip: this.newTrip}})
      
    }
  },
};
</script>

<style>
</style>