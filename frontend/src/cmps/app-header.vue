<template>
  <header
    :class="{ 'app-header': !this.isTop, 'app-header-expanded': this.isTop }"
    :style="navColor"
  >
    <section class="main-nav">
      <div class="logo">
        <img
          :class="logo"
          :src="require(`@/assets/imgs/branding/${imgSrc}.png`)"
          @click="toHome"
        />
      </div>
      <div v-if="!isTop" @click="expandToSearch()" class="initial-search-bar">
        <p>{{setSearchBarText}}</p>
        <div class="circle">
          <img
            class="search-icon"
            src="../assets/imgs/icons/search-circle.png"
          />
        </div>
      </div>
      <div v-if="expandedSearch" class="expty-space"></div>
      <div v-if="isTop" class="secondary-search-bar" :style="determineStyle">
        <form @submit.prevent="">
          <label class="main-search-label" @click="openModal('location')">
            <span>Location</span>
            <input
              placeholder="Where are you going?"
              @input="openModal('s-location')"
              v-model="location"
            />
          </label>
          <label class="main-search-label" @click="openModal()">
            <span>Check in</span>
            <date-picker
              :placeholder="getCheckinDate"
              @input="renderDates($event)"
              v-model="checkinDate"
              range
            ></date-picker>
          </label>
          <label class="main-search-label" @click="openModal()">
            <span>Check out</span>
            <input
              :placeholder="getCheckoutDate"
              v-model="checkoutDate"
              ref="myDatePicker"
              range
            />
            <!-- <date-picker placeholder="Add dates" v-model="time3" range></date-picker> -->
          </label>
          <label class="main-search-label" @click="openModal('guests')">
            <span>Guests</span>
            <input :placeholder="getGuestsAmount" />
          </label>
          <div class="expanded circle">
            <img
              @click="openModal('submit')"
              class="search-icon"
              src="../assets/imgs/icons/search-circle.png"
            />
          </div>
          <dynamic-modal :clicked="this.clickedOn" />
        </form>
      </div>
      <div class="right-nav">
        <div class="host-options" :style="textColor">
          <p class="become" @click="showStays">Explore</p>
          <p class="become" @click="toHost">Become a host</p>
        </div>
        <!-- <div class="global">
          <img :src="require(`@/assets/imgs/icons/${globalSrc}.png`)" />
        </div> -->
        <login />
      </div>
    </section>
<!-- 
    <section class="mobile-header">
      <div @click="expandToSearch()" class="initial-search-bar">
        <p>{{setSearchBarText}}</p>
        <div class="circle">
          <img
            class="search-icon"
            src="../assets/imgs/icons/search-circle.png"
          />
        </div>
          <dynamic-modal :clicked="this.clickedOn" />
      </div>
    </section> -->

    <section class="mobile-nav">
      <div class="mobile-option">
        <img src= "../assets/imgs/icons/user/search.png" />
        <span @click="toHome" >Explore</span>
      </div>
      <div class="mobile-option">
        <img src= "../assets/imgs/icons/user/heart.png"  />
        <span>Wishlists</span>
      </div>
      <div class="mobile-option">
        <img src= "../assets/imgs/icons/user/logo.png" />
        <span>Trips</span>
      </div>
           <div class="mobile-option">
        <img src= "../assets/imgs/icons/user/user.png" />
        <span>Profile</span>
        <login/>
      </div>
    </section>
  </header>
</template>
<script>
import dynamicModal from "./dynamic-modal.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import login from "./login.vue";
import { eventBus } from "../services/eventBus.js";

DatePicker.methods.displayPopup = function () {
  this.position = {
    left: 0,
    bottom: "100%",
  };
};
export default {
  components: {
    DatePicker,
    dynamicModal,
    login,
  },
  data() {
    return {
      num: 1,
      windowWidth: window.innerWidth,
      isTop: true,
      imgSrc: "logo-white",
      globalSrc: "global-white",
      currPage: "",
      expandedSearch: false,
      clickedOn: "",
      checkinDate: "Add dates",
      checkoutDate: "Add dates",
      location: "",
      guests: "Add guests",
      cityName: 'Start your search'
    };
  },
  created() {
    eventBus.$on("selectedLocation", this.setLocation);
    eventBus.$on("setGuests", this.setGuests);
    eventBus.$on('updateCityName',this.updateCityName);
    this.setCurrPage();
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 980) {
        if (this.currPage === "home") {
          this.imgSrc = this.isTop ? "airbnb-white" : "airbnb";
        } else if (this.currPage === "all") {
          this.imgSrc = "airbnb";
        }
      } else if (this.windowWidth > 980) {
        if (this.currPage === "home") {
          this.imgSrc = this.isTop ? "logo-white" : "airbnb-logo";
        } else if (this.currPage === "all") {
          this.imgSrc = "airbnb-logo";
        }
      }
    },
    async toHome() {
      this.$router.push("/");
      await this.$store.dispatch({ type: "resetTrip" });
    },
    toHost() {
      this.$router.push("/become");
    },
    handleScroll() {
      let scrollBarPos = window.top.scrollY;
      if (!scrollBarPos) this.topMode();
      else this.scrollMode();
    },
    topMode() {
      this.isTop = this.currPage === "all" ? false : true;
      this.imgSrc = this.currPage === "all" ? "airbnb-logo" : "logo-white";
      this.globalSrc = this.currPage === "all" ? "global" : "global-white";
    },
    scrollMode() {
      this.isTop = false;
      this.imgSrc = "airbnb-logo";
      this.globalSrc = "global";
    },
    setCurrPage() {
      if (this.$route.name !== "home") {
        this.isTop = false;
        this.currPage = "all";
      } else {
        this.isTop = true;
        this.currPage = "home";
      }
    },
    expandToSearch() {
      this.isTop = true;
      this.expandedSearch;
    },
    handleChange() {},
    openModal(of) {
      this.clickedOn = of;
      if (of === "submit") {
        if (this.checkinDate && this.checkoutDate) {
          const dates = [this.checkinDate, this.checkoutDate];
          eventBus.$emit("setDates", dates);
          this.checkinDate = "add Dates";
          this.checkoutDate = "add Dates";
          this.location = "Where are you going?";
          this.guests = 0;
        }
      }
    },
    setLocation(location) {
      this.location = location;
      this.openModal();
    },
    renderDates(event) {
      this.checkinDate = `${new Date(event[0]).getDate()}/${
        new Date(event[0]).getMonth() + 1
      }/${new Date(event[0]).getFullYear()}`;

      this.checkoutDate = `${new Date(event[1]).getDate()}/${
        new Date(event[1]).getMonth() + 1
      }/${new Date(event[1]).getFullYear()}`;
    },
    setGuests(amount) {
      this.guests = amount;
    },
    showStays() {
      this.$router.push("/stay");
    },
    updateCityName(city) {
      console.log(city)
      this.cityName =city.charAt(0)+city.slice(1).toLowerCase()
    }
  },
  computed: {
    logo() {
      if (this.imgSrc === "airbnb") {
        return "logo-icon";
      } else {
        return "logo-img";
      }
    },
    navColor() {
      if (this.currPage === "all") return;
      else if (
        this.imgSrc === "logo-white" ||
        (this.imgSrc === "airbnb-white" && this.isTop)
      ) {
        return {
          backgroundColor: "transparent",
          position: "fixed",
          width: 100 + "%",
        };
      } else {
        return {
          backgroundColor: "white",
          position: "fixed",
          width: 100 + "%",
          "z-index": 200,
        };
      }
    },
    navLinkColor() {
      if (this.imgSrc === "logo-white") return { color: "white" };
    },
    textColor() {
      if (this.currPage === "all") return;
      if (this.imgSrc === "logo-white") {
        return { color: "white" };
      }
    },
    getCheckinDate() {
      return this.checkinDate;
    },
    getCheckoutDate() {
      return this.checkoutDate;
    },
    getGuestsAmount() {
      if (!this.guests) return "Add guests";
      return this.guests;
    },
    determineStyle() {
      if (this.currPage !== "home") {
        return { top: 13 + "%" };
      }
    },
    setSearchBarText() {
      return this.cityName
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    "$route.params": {
      handler() {
        this.setCurrPage();
        if (this.currPage === "all") {
          // console.log('not at home anymore')
          this.globalSrc = "global";
          this.imgSrc = "airbnb-logo";
        } else if (this.currPage === "home" && this.isTop) {
          this.cityName = 'Start your search'
          this.openModal();
          this.imgSrc = "logo-white";
          this.globalSrc = "global-white";
        }
      },
      immediate: true,
    },
    $route() {
      const {filter} = this.$route.query
      if (filter) {
        this.cityName = filter.charAt(0).toUpperCase() + filter.slice(1)
      }
    }
  },
};
</script>
