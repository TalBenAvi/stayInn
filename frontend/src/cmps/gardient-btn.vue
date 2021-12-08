<template>
  <section>
    <button ref="button" class="mouse-tracking check-available" @click="$emit('reserveStay')" @mousemove="set($event)">
      <span>Check availability</span>
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    set(e) {
      let button = this.$refs.button;
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      button.style.setProperty("--x", x + "px");
      button.style.setProperty("--y", y + "px");
    },
  },
};
</script>

<style>
</style>