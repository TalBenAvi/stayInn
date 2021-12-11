<template>
  <section>
    <button ref="button" class=" check-available" :class="{disabled: isClicked, 'mouse-tracking':!isClicked}" @click="reserveClicked()" @mousemove="set($event)">
      <span v-if="!isClicked">Reserve</span>
      <span v-else>Reserved</span>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    set(e) {
      let button = this.$refs.button;
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      button.style.setProperty("--x", x + "px");
      button.style.setProperty("--y", y + "px");
    },
    reserveClicked() {
      this.$emit('reserveStay')
      this.isClicked = true
    }
  },
};
</script>

<style>
</style>