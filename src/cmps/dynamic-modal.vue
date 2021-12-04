<template>
  <section v-if="clicked" class="dynamicModal">
    <div v-if="clicked === 'location'" class="location-modal">
      <span>GO ANYWHERE, ANYTIME</span>
      <button><p>I'm flexible</p></button>
      <img src="~@/assets/imgs/icons/arrow.png">
    </div>

    <div v-if="clicked === 'checkin'" class="checkin-modal"></div>
    <div v-if="clicked === 'checkout'" class="checkout-modal"></div>

    <div v-if="clicked === 'guests'" class="guests-modal">
      <form>
        <label class="expanded-search-label" for="adults">
          <span>Adults</span>
          <span class="sub-header-lable">Ages 13 or above</span>
          <input class="change-amount" type="number" />

        </label>
        <label class="expanded-search-label" for="children">
          <span>Children</span>
          <span class="sub-header-lable" >Ages 2-12</span>
          <input type="number" />
        </label>
        <label class="expanded-search-label" for="infants">
          <span>Infats</span>
          <span class="sub-header-lable">Under 2</span>
          <input type="number" />
        </label>
        <label class="expanded-search-label" for="pets">
          <span>Pets</span>
          <span class="sub-header-lable">Bringing an assitance animal?</span>
          <input type="number" />
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
};
</script>

<style>
</style>