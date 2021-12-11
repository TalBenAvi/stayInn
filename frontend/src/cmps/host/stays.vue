<template>
<section>
    <div class="flex-row space-evenly border-bottom">
    <div>Name</div>
    <div>Address</div>
    <div>Price</div>
    <div>Actions</div>

  </div>
      <ul v-for="stay in stays" :key="stay._id" class="hostStays ">
      <li>{{stay.name}}</li>
      <li>{{stay.loc.address}}</li>
      <li>{{stay.price}} $</li>
      <li>
        <div class="">Remove</div>
        <div class="">Edit</div>
        </li>
    </ul>
    
</section>

</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      stays: [],
    };
  },
  created() {
    console.log(this.user);
    this.setStays();
  },
  methods: {
    setStays() {
      this.stays = this.$store.getters.stays;
      this.getHostStays();
    },
    getHostStays() {
      let stays = this.stays;
      let hostStays = stays.filter((stay) => {
        return stay.host._id === this.user._id;
      });
      this.stays = hostStays;
    },
  },
  computed: {},
};
</script>
