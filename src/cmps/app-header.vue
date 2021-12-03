<template>
  <header class="app-header" :style="navColor">
    <div class="logo">
      <img
        :class="logo"
        :src="require(`@/assets/imgs/branding/${imgSrc}.png`)"
        @click="toHome"
      />
    </div>

    <div class="initial-search-bar">
      <p>Start your search</p>
      <div class="circle">
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
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isTop: true,
      imgSrc: "logo-white",
      globalSrc: "global-white",
      currPage: "",
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