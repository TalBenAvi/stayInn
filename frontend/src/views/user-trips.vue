<template>
  <div class="host-view">
    <div class="main-area">
      <div class="user-display airbnb">
       <h1 class="airbnb-medium">Trips</h1>
       <ul v-if="ordersForDisplay" class="order-container">
       <li v-for="order in ordersForDisplay" :key="order._id">
        <div class="order-card">
          <!-- order imgUrl -->
          <img class="card-img" src=""/>
          <small class="order-dates">{{ datesForDisplay(
            //order checkIn
            ) }}-{{datesForDisplay(
               //order checkOut
            )}}</small>
          <h3 class="order-address">{{
            //order address
          <div class="card-bottom">
              <img class="" src="" />
              <h3 class="order-name">{{
                //order stayName
                  }}</h3>
          </div>
        </div>
         </li>
        </ul>
          <div></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      orders: [],
    };
  },
  methods: {
    datesForDisplay(order) {
      var a = moment(order).format("YYYY-MM-DD");
      var date = moment(a).format("MMM DD yyyy");
      return date;
    },
    async setOrdersProfile(filterBy) {
      const filterId = filterBy.id;
      this.orders = await this.$store.dispatch({
        type: "filterProfile",
        filterId,
      });
    },
  },
  computed: {
    ordersForDisplay() {
      const orders = JSON.parse(JSON.stringify(this.$store.getters.ordersForDisplay));
      return orders.reverse();
    },
  },
};
</script>

<style>
</style>