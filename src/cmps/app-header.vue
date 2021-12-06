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
      <div @click="expandToSearch()" v-if="!isTop" class="initial-search-bar">
        <p>Start your search</p>
        <div class="circle">
          <img
            class="search-icon"
            src="../assets/imgs/icons/search-circle.png"
          />
        </div>
      </div>
      <div v-if="isTop" class="nav-link" :style="navLinkColor">
        <span>Places to stay</span>
        <span>Experiences</span>
        <span>Online Experiences</span>
      </div>
      <div v-if="expandedSearch" class="expty-space"></div>
      <div v-if="isTop" class="secondary-search-bar">
        <form @submit.prevent="">
          <label class="main-search-label" @click="openModal('location')">
            <span>Location</span>
            <input placeholder="Where are you going?" />
          </label>
          <label class="main-search-label" @click="openModal()">
            <span>Check in</span>
            <date-picker
              placeholder="Add dates"
              v-model="time3"
              range
            ></date-picker>
          </label>
          <label class="main-search-label" @click="openModal()">
            <span>Check out</span>
            <input v-model="time3" placeholder="Add dates" />
            <!-- <date-picker placeholder="Add dates" v-model="time3" range></date-picker> -->
          </label>
          <label class="main-search-label" @click="openModal('guests')">
            <span>Guests</span>
            <input placeholder="Add guests" />
          </label>
          <div class="expanded circle">
            <img
              @click="openModal()"
              class="search-icon"
              src="../assets/imgs/icons/search-circle.png"
            />
          </div>
          <dynamic-modal :clicked="this.clickedOn" />
        </form>
      </div>
      <div class="host-options" :style="textColor">
        <p class="become" @click="toHost">Become a Host</p>
      </div>
      <div class="global">
        <img :src="require(`@/assets/imgs/icons/${globalSrc}.png`)" />
      </div>
      <div @click="openCloseMenu" class="user-options">
        <div class="burger">☰</div>
        <img class="avatar" src="../assets/imgs/icons/avatar.png" />
        <div v-if="isMenuOpen" class="profile-menu">
          <button @click="openLogin">Login</button>
          <button @click="openSignin">Signup</button>
        </div>
      </div>
      <section v-if="isLoginOpen" class="login-modal">
        <div class="login-header">
          <button class="x-close" @click="closeLogin">
            <span class="material-icons"> close </span>
          </button>
          <p>Log in</p>
        </div>
        <div class="login-input">
          <div class="input-txt"><h2>Welcome to stayinn</h2></div>
          <form action="">
            <input type="text" placeholder="Enter email or username" /><input
              type="password"
              placeholder="Enter password"
            /><button class="checkout-btn" style="--x: 394px; --y: 47px">
              <span>Continue</span>
            </button>
          </form>
          <div class="move-signup-button">
            <small
              >Dont have a user? click here to
              <button class="x-close" @click="openSigninCloseLogin">
                sign up
              </button></small
            >
          </div>
        </div>
        <div class="login-divider">
          <div class="border"></div>
          <small>or</small>
        </div>
        <div class="login-socials">
          <button>
            <span class="material-icons" style="color: rgb(66, 103, 178)">
              facebook </span
            >Continue with Facebook</button
          ><button>
            <img src="@/assets/imgs/icons/google.png" alt="" /> Continue with
            Google
          </button>
        </div>
      </section>
      <section v-if="isSigninOpen" class="signin-modal">
        <div class="login-header">
          <button class="x-close" @click="closeSignin">
            <span class="material-icons"> close </span>
          </button>
          <p>Sign up</p>
        </div>
        <div class="login-input">
          <div class="input-txt"><h2>Welcome to stayinn</h2></div>
          <form action="">
            <input type="text" placeholder="Enter email or username" />
            <input type="text" placeholder="Enter full name" />
            <input type="password" placeholder="Enter password" /><button
              class="checkout-btn"
              style="--x: 394px; --y: 47px"
            >
              <span>Continue</span>
            </button>
          </form>
          <div class="move-signup-button">
            <small
              >Dont have a user? click here to
              <button class="x-close" @click="openLoginCloseSignin">
                login
              </button></small
            >
          </div>
        </div>
        <div class="login-divider">
          <div class="border"></div>
          <small>or</small>
        </div>
        <div class="login-socials">
          <button>
            <span class="material-icons" style="color: rgb(66, 103, 178)">
              facebook </span
            >Continue with Facebook</button
          ><button>
            <img src="@/assets/imgs/icons/google.png" alt="" /> Continue with
            Google
          </button>
        </div>
      </section>
    </section>
  </header>
</template>
<script>
import dynamicModal from "./dynamic-modal.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
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
      time3: null,
      isMenuOpen: false,
      isLoginOpen: false,
      isSigninOpen: false,
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
    toHost(){
      this.$router.push("/host");
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
      // console.log(this.clickedOn)
    },
    openCloseMenu() {
      console.log();
      if (this.isMenuOpen === false) {
        this.isMenuOpen = true;
      } else {
        this.isMenuOpen = false;
      }
    },
    openLogin() {
      this.isLoginOpen = true;
    },
    closeLogin() {
      this.isLoginOpen = false;
    },
    openSignin() {
      this.isSigninOpen = true;
    },
    closeSignin() {
      this.isSigninOpen = false;
    },
    openSigninCloseLogin() {
      this.isSigninOpen = true;
      this.isLoginOpen = false;
    },
    openLoginCloseSignin() {
      this.isLoginOpen = true;
      this.isSigninOpen = false;
    },
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
          this.openModal();
          this.imgSrc = "logo-white";
          this.globalSrc = "global-white";
        }
      },
      immediate: true,
    },
  },
};
</script>