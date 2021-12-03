<template>
  <header :class="{'app-header': !this.isTop, 'app-header-expanded': this.isTop}" :style="navColor">
  
    <div class="logo">
      <img
        :class="logo"
        :src="require(`@/assets/imgs/branding/${imgSrc}.png`)"
        @click="toHome"
      />
    </div>

    <div @click="expandToSearch()" v-if="!isTop" class="initial-search-bar" >
      <p>Start your search</p>
      <div class="circle">
        <img class="search-icon" src="../assets/imgs/icons/search-circle.png" />
      </div>
    </div>
    
    <div v-if="isTop" class="nav-link">
      <span>Places to stay</span>
      <span>Experiences</span>
      <span>Online Experiences</span>
    </div>

    <div v-if="expandedSearch" class="expty-space"></div>
    <div v-if="isTop" class="secondary-search-bar">
        <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number> -->
        <!-- <datepicker /> -->
      <form>
        <label>
          <span>Location</span>
          <input placeholder="Where are you going?"/>
        </label>
        <label>
          <span>Check in</span>
          <input placeholder="Add dates"/>
        </label>
        <label>
          <span>Check out</span>
           <input placeholder="Add dates"/>
        </label>
        <label>
          <span>Guests</span>
          <input placeholder="Add guests"/>
        </label>
      </form>
       <div class="expanded circle">
        <img class="search-icon" src="../assets/imgs/icons/search-circle.png" />
      </div>
    </div>

    <div class="host-options" :style="textColor">
      <p class="become">Become a Host</p>
    </div>

    <div class="global">
      <img :src="require(`@/assets/imgs/icons/${globalSrc}.png`)" />
    </div>

    <div class="user-options">
      <div class="burger">☰</div>
      <img class="avatar" src="../assets/imgs/icons/avatar.png" />
    </div>
  </header>
</template>


<script>
import datepicker from './date-picker.vue'

export default {
  components: {
    datepicker

  },
  data() {
    return {
      num: 1,
      windowWidth: window.innerWidth,
      isTop: true,
      imgSrc: "logo-white",
      globalSrc: "global-white",
      currPage: "",
      expandedSearch: false
    };
  },
  created() {
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
    toHome() {
      this.$router.push("/");
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
      this.isTop = true
      this.expandedSearch
    },
    handleChange() {

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
      else if (this.imgSrc === "logo-white" || this.imgSrc === "airbnb-white") {
        return { backgroundColor: "transparent",position:'fixed', width: 100+'%' };
      } else {
        return { backgroundColor: "white" ,position:'fixed', width: 100+'%','z-index':200};
      }
    },
    textColor() {
      if (this.currPage === "all") return;
      if (this.imgSrc === "logo-white") {
        return { color: "white" };
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route() {
      this.setCurrPage()
    },
  },
};
</script>