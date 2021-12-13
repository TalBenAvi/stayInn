<template>
  <section>
    <div class="orders-body">
      <div class="order-statistics">
        <div class="box">
          <img src="../../assets/imgs/icons/host/total.png" />
          <div class="details">
            <div>{{ 3+hostOrders.length }}</div>
            <div>Orders</div>
          </div>
        </div>

        <div class="box">
          <img src="../../assets/imgs/icons/host/waiting.png" />
          <div class="details">
            <div>$ {{ amountPending }}</div>
            <div>Revenue</div>
          </div>
        </div>

        <div class="box">
          <img src="../../assets/imgs/icons/host/answered.png" />
          <div class="details">
            <div>10</div>
            <div>Stays</div>
          </div>
        </div>
      </div>
      <div class="orders-container">
            <table v-if="hostOrders">
        <thead>
        <th>Guest</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>Total</th>
        <th>Status</th>
        </thead>
          <tr  v-for="order in hostOrders" :key="order._id">
               <td class="">{{ order.buyer.fullname }}</td >
        <td >{{ order.startDate }}</td>
        <td >{{ order.endDate }}</td>
                <td >$ {{ order.totalPrice.toLocaleString() }}</td >
        <td v-if="order.status !== 'pending'"><span :class="{red: order.status === 'Declined', green: order.status === 'Accepted'}">{{ order.status }}</span></td >
         <td v-else>   <button
              @click="updateOrderStatus(order._id, 'Accepted')"
              class="accept"
            >
              Accept
            </button>/
            <button
              class="decline"
              @click="updateOrderStatus(order._id, 'Declined')"
            >
              Decline
            </button></td >

        </tr>
        <tr v-for="fakeOrder in fakeOrders" :key="fakeOrder.name">
          <td>{{fakeOrder.buyer}}</td>
          <td>{{fakeOrder.checkin}}</td>
          <td>{{fakeOrder.checkout}}</td>
          <td>${{fakeOrder.total.toLocaleString()}}</td>
           <td><span  class="green">{{fakeOrder.status}}</span></td>
          
        </tr>
      </table>

      </div>

    </div>
  </section>
</template>

<script>
import { socketService } from "../../services/socket.service.js";

export default {
  props: {
    user: Object,
  },
  data() {
    return {
      hostOrders: [],
      stays: [],
      fakeOrders: [{
        buyer: 'Rebbeca Flin',
        checkin : '21/3/2022',
        checkout: '30/3/2022',
        total: 1040,
        status: 'Approved'
      },
      {
        buyer: 'Jason Parse',
        checkin : '9/10/2022',
        checkout: '13/10/2022',
        total: 540,
        status: 'Approved'
      },
      {
        buyer: 'Consoleio Logger',
        checkin : '30/8/2022',
        checkout: '5/9/2022',
        total: 860,
        status: 'Approved'
      }]
    };
  },
  created() {
    socketService.emit("connect-host", this.user._id);
    socketService.on("add-order", (order) => {
      console.log("host in host", order);
      this.hostOrders.push(order);
    });
    console.log(this.user);
    this.setOrders();
    this.clearPending();
     this.setStays();
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
  computed: {
    amountPending() {
           var handledOrders = this.hostOrders.filter((order) => {
        return order.status !== "Declined" && order.status !== "pending";
      });
      let sum = 2440;
      for (let i = 0; i < handledOrders.length; i++) {
        sum += handledOrders[i].totalPrice;
      }
      return sum.toLocaleString() 
    }
  }
};
</script>
