<template>
  <section>
    <div class="order-headers">
      <div>Guest Name</div>
      <div>Check in</div>
      <div>Check out</div>
      <div>Status</div>
      <div>Price</div>
      <div>Actions</div>
    </div>

    <div class="orders-body">
        <div v-if="hostOrders"></div>
         <div v-for="order in hostOrders" :key="order._id" class="orders-container">
                   <div class="">{{order.buyer.fullName}}</div>
            <div>{{order.startDate}}</div>
            <div>{{order.endDate}}</div>
            <div>{{order.status}}</div>
            <div>{{order.stay.totalPrice}}</div>
            <div class="">
                <button>Accept</button>
                <button>Decline</button>
            </div>

         </div>
      
        </div>
  </section>
</template>

<script>
export default {
    props: {
    user: Object,
  },
    data() {
    return {
      hostOrders: [],
    };
  },
  created() {
    console.log(this.user);
    this.setOrders();
  },
  methods: {
    async setOrders() {
      let orders = await this.$store.dispatch({type: 'getHostOrders', hostId: this.user._id});
      console.log(orders)
      this.hostOrders = orders
    }
  },
  computed: {},
};
</script>
