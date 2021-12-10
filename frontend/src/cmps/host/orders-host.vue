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
      <div
        v-for="order in hostOrders"
        :key="order._id"
        class="orders-container"
      >
        <div class="">{{ order.buyer.fullname.substring(0, 6) }}</div>
        <div>{{ order.startDate }}</div>
        <div>{{ order.endDate }}</div>
        <div>{{ order.status }}</div>
        <div>{{ order.totalPrice }}$</div>
        <div>
          <div v-if="order.status === 'pending'">
            <button @click="updateOrderStatus(order._id, 'Accepted')" class="accept">
              Accept
            </button>
            <button class="decline" @click="updateOrderStatus(order._id, 'Decline')">Decline</button>
          </div>
          <div v-if="order.status === 'Accepted'">
            <div>Accepted</div>
          </div>
          <div v-if="order.status==='Declined'">Declined</div>
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
    this.clearPending();
  },
  methods: {
    async setOrders() {
      let orders = await this.$store.dispatch({
        type: "getHostOrders",
        hostId: this.user._id,
      });
      console.log(orders);
      this.hostOrders = orders;
    },
    async updateOrderStatus(orderId, status) {
      var updatedOrder = await this.$store.dispatch({
        type: 'updateOrderStatus',
        orderId,
        status
      });
      console.log(updatedOrder);
      this.setOrders();
    },
      async clearPending() {
      var updatedOrder = await this.$store.dispatch({
        type: 'clearPending',
        hostId: this.user._id,
      });
      console.log(updatedOrder);
      }

  },
  computed: {
  },
};
</script>
