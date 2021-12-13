<template>
  <div class="host-view">
    <div class="main-area">
      <div class="menu-bar">
        <div class="menu-option">
          <button class="airbnb-medium menu-bar-button" @click="showStatus">
            <span class="spacing-20px-right"><img src="../assets/imgs/icons/host/house.png"></span>My Stays
          </button>
        </div>
        <div class="menu-option">
          <button class="airbnb-medium menu-bar-button" @click="showOrders">
            <span class="spacing-20px-right"><img src="../assets/imgs/icons/host/orders.png"></span>Orders
          </button>
        </div>
        <div></div>
      </div>
      <div class="display-bar airbnb">
        <div class="creating-stay-layout">
          <div v-if="main">
              <create-stay />
          </div>
          <div class="host-stays airbnb-medium font-size-19px" v-if="status">
              <stays :user="this.currUser"/>
              <button @click="showmain" >Create Stay</button>
              
            <!-- here needs to render user data for showing data -->
            <div></div>
          </div>
          <div class="host-stays airbnb-medium font-size-19px" v-if="orders">
            <ordersHost :user="this.currUser"/>
            </div>
            <!-- here needs to render user data for showing data -->
            <div></div>
          </div>
          <!-- here we render reviews -->
          <div v-if="rates">sdsdsdsds</div>
        </div>
      </div>
    </div>
</template>

<script>
// import { uploadImg } from '@/services/imgUpload.service.js'

import stays from '@/cmps/host/stays.vue'
import ordersHost from '@/cmps/host/orders-host.vue'
import createStay from '@/cmps/host/create-stay.vue'

export default {
  data() {
    return {
      main: false,
      status:false,
      orders:true,
      rates:false,
      currUser: null
    };
  },
  components: {
     createStay,
     stays,
     ordersHost
  },
  created() {
    this.setUser()

  },
  methods:{
    showmain(){
      this.main=true;
       this.status=false;
        this.orders=false;
         this.rates=false;
    },
    showStatus(){
     this.main=false;
       this.status=true;
        this.orders=false;
         this.rates=false;
    },
    showOrders(){
     this.main=false;
       this.status=false;
        this.orders=true;
         this.rates=false;
    },
    setUser() {
    let user=  this.$store.getters.loggedinUser
    this.currUser = user
    console.log(this.currUser)
  }
  },

};
</script>

<style>
</style>