<template>
  <div class="host-view">
    <div class="user-trip-main">
      <div class="user-display airbnb">
       <h1 class="airbnb-medium header-user-trips">Trips</h1>
       <div class="flex-row underline-border">
      <div><button class="button-user-host airbnb-medium font-size-19px spacing-70px-right">Upcoming</button></div>
      <div><button class="button-user-host airbnb-medium font-size-19px">Past</button></div>
       </div>
       <div class="order-container">
       <div v-for="order in ordersForDisplay" :key="order._id">
        <div class="order-card">
          <img class="card-img" src="../assets/imgs/1.jpg"/>
          <div class="flex-column">
           <div class="airbnb font-12 gray-color spacing-20px-left center-5px font-size-19px">Aug 30- sep 2,2021</div>
          <div class="airbnb-medium spacing-20px-left center-5px spacing-15px font-size-25px">Amsterdam</div>
             <div class="flex-row spacing-15px">
               <div class="spacing-10px-left" > <img class="small-icon" src="../assets/imgs/1.jpg"/> </div>
              <div class="width-90 flex-row space-bettwen">
                <div class="airbnb center-5px">New Luxury  </div>
               <div><img class="smallest-icon center-5px" src="../assets/imgs/icons/next.png" ></div></div>
             </div>
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