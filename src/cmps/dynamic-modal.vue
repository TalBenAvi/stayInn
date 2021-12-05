<template>
  <section v-if="clicked" class="dynamicModal">
    <div v-if="clicked === 'location'" class="location-modal">
      <span>GO ANYWHERE, ANYTIME</span>
      <button @click="showStays()"><p>I'm flexible</p></button>
      <img src="~@/assets/imgs/icons/arrow.png">
    </div>

    <div v-if="clicked === 'checkin'" class="checkin-modal"></div>
    <div v-if="clicked === 'checkout'" class="checkout-modal"></div>

    <div v-if="clicked === 'guests'" class="guests-modal">
      <form>
        <label class="expanded-search-label" for="adults">
            <span>Adults</span>
          <span>Ages 13 or above</span>
          <el-input-number v-model="newOrder.guests.adults" @change="handleChange" :min="0" :max="10"></el-input-number>
        </label>
        <label class="expanded-search-label" for="children">
                <span>Children</span>
                <span>Ages 2-12</span>
          <el-input-number v-model="newOrder.guests.children" @change="handleChange" :min="0" :max="10"></el-input-number>
        </label>
        <label class="expanded-search-label" for="infants">
          <span>Infants</span>
          <span>Under 2</span>
          <el-input-number v-model="newOrder.guests.infants" @change="handleChange" :min="0" :max="10"></el-input-number>
        </label>
        <label class="expanded-search-label" for="pets">
          <span>Pets</span>
          <span class="sub-header-lable">Bringing an assitance animal?</span>
          <el-input-number v-model="newOrder.guests.pets" @change="handleChange" :min="0" :max="10"></el-input-number>
        </label>
      </form>

      <span class="bottom-text">If you're lucky enough to have more than 2 pets with you,
            be sure to let your host know.</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dynamic Modal",
  props: ["clicked"],
   data() {
      return {
        newOrder: {
          guests: {
            adults:0,
            children:0,
            infants:0,
            pets:0
          }
        }
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      showStays() {
        this.$router.push('/stay')
      }
    }
};
</script>

<style>
</style>