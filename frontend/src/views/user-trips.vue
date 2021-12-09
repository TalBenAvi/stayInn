<template>
  <div class="host-view">
    <div class="user-trip-main">
      <div class="user-display airbnb">
       <h1 class="airbnb-medium header-user-trips">Trips</h1>
       <div class="flex-row underline-border">
      <div><button class="button-user-host upcoming  airbnb-medium font-size-19px spacing-70px-right">Upcoming</button></div>
      <div><button class="button-user-host past  airbnb-medium font-size-19px">Past</button></div>
       </div>
               <div v-if="!orders.length" class="empty-page" >
          <span>When you’re ready to start planning your next trip, we’re here to help. </span>
          <img src="../assets/imgs/user-pages/no-orders.png">
          <button @click="toExplore()">Explore Stayinn</button>
        </div>
       <div v-if="orders" class="order-container">
       <div v-for="order in orders" :key="order._id">
        <div class="order-card">
          <img class="card-img" :src="require(`@/assets/imgs/stays/${order.stay.initials}/${order.stay.imgSrc[0]}`)"/>
          <div class="flex-column">
           <div class="airbnb font-12 gray-color spacing-20px-left center-5px font-size-19px">{{order.startDate}} - {{order.endDate}}</div>
          <div class="airbnb-medium spacing-20px-left center-5px spacing-15px font-size-25px">{{order.stay.country}}</div>
             <div class="flex-row spacing-15px">
               <div class="spacing-10px-left" > <img class="small-icon" :src="require(`@/assets/imgs/stays/${order.stay.initials}/${order.stay.imgSrc[0]}`)"/> </div>
              <div class="order-name width-90 flex-row space-bettwen">
                <div @click="toListing(order.stay._id)" class="airbnb center-5px">{{order.stay.name}}</div>
               <div><img class="smallest-icon center-5px" src="../assets/imgs/icons/next.png" ></div></div>
             </div>
             <div class="order-status">
               <span>Order status: </span><span :class="{orange: order.status === 'pending' ,  green: order.status === 'approved'}">{{order.status}}</span>
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
      orders: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser
    this.loadUserOrders()

  },
  methods: {
    datesForDisplay(order) {
      var a = moment(order).format("YYYY-MM-DD");
      var date = moment(a).format("MMM DD yyyy");
      return date;
    },
    async loadUserOrders() {
      try {
        const orders = await this.$store.dispatch({type:'getUserOrders', userId: this.user._id})
        console.log(orders)
        this.orders = orders
      } catch (err) {
        console.log('had trouble getting users order from componenet', err)
      }

    },
    toListing(stayId) {
      this.$router.push({path: `/stay/details/${stayId}`})
    },
    toExplore() {
      this.$router.push('/stay')

    }
  },
};
</script>

<style>
</style>