<template>
  <section>
    <div class="orders-body">
      <div class="order-statistics">
        <div class="box">
          <img src="../../assets/imgs/icons/host/total.png" />
          <div class="details">
            <div>{{ hostOrders.length }}</div>
            <div>Orders</div>
          </div>
        </div>

                <div class="box">
          <img src="../../assets/imgs/icons/host/waiting.png" />
          <div class="details">
            <div>{{ amountPending }}</div>
            <div>Pending</div>
          </div>
        </div>


                <div class="box">
          <img src="../../assets/imgs/icons/host/answered.png" />
          <div class="details">
            <div>{{ amountHandled }}</div>
            <div>Handled</div>
          </div>
        </div>
      </div>
      <div v-if="hostOrders"></div>
      <div
        v-for="order in hostOrders"
        :key="order._id"
        class="orders-container"
      >
        <div class="">{{ order.buyer.fullname }}</div>
        <div>{{ order.startDate }}</div>
        <div>{{ order.endDate }}</div>
        <div>{{ order.status }}</div>
        <div>{{ order.totalPrice }}$</div>
        <div>
          <div v-if="order.status === 'pending'">
            <button
              @click="updateOrderStatus(order._id, 'Accepted')"
              class="accept"
            >
              Accept
            </button>
            <button
              class="decline"
              @click="updateOrderStatus(order._id, 'Declined')"
            >
              Decline
            </button>
          </div>
          <div v-if="order.status === 'Accepted'">
            <div class="green">Accepted</div>
          </div>
          <div class="red" v-if="order.status === 'Declined'">Declined</div>
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
        type: "updateOrderStatus",
        orderId,
        status,
      });
      console.log(updatedOrder);
      this.setOrders();
    },
    async clearPending() {
      var updatedUser = await this.$store.dispatch({
        type: "clearPending",
        hostId: this.user._id,
      });
      console.log(updatedUser);
    },
  },
  computed: {
    amountPending() {
      var pendingOrders = this.hostOrders.filter(order => {
        return order.status === 'pending'
      });
      return pendingOrders.length
    },

    amountHandled() {
       var handledOrders = this.hostOrders.filter(order => {
        return order.status !== 'pending'
      });
      return handledOrders.length


    }
  },
};
</script>
