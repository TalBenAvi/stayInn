<template>
  <div class="host-view">
    <div class="main-area">
      <div class="user-display airbnb">
       <h1 class="airbnb-medium">Trips</h1>
       <div class="flex-row underline-border">
      <div><button class="airbnb-medium font-size-19px spacing-20px-right">Upcoming</button></div>
      <div><button class="airbnb-medium font-size-19px">Past</button></div>
       </div>
       <div class="order-container">
       <div v-for="order in ordersForDisplay" :key="order._id">
        <div class="order-card">
          <img class="card-img" src="../assets/imgs/1.jpg"/>
          <div class="card-bottom">
              <h3 class="airbnb-medium">casas the </h3>
          </div>
           <div class="flex-row space-around">
          <div class="airbnb-medium spacing-15px">hello</div>
           <div class="airbnb spacing-15px">15/21/21-01/12/21</div>
           </div>
        </div>
         </div>
        </div>
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
      const orders = JSON.parse(JSON.stringify(this.$store.getters.orders));
      console.log(orders);
      return orders.reverse();
    },
  },
};
</script>

<style>
</style>