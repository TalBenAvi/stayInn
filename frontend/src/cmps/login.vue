<template>
  <section class="login-container">
    <div @click="openCloseMenu" class="user-options">
      <div class="burger">☰</div>
      <!-- <img class="avatar" src="../assets/imgs/icons/avatar.png" /> -->
      <avatar class="avatar" size="31" name="host" :src="require(`@/assets/imgs/profile_pic/Eva Macron.jpg`)" />
      <!-- <img v-if="userLoggedIn" class="avatar" src="../assets/imgs/profile_pic/host.jpg" /> -->
      <img v-if="userLoggedIn && isPendingOrders" class="notification-icon" src="../assets/imgs/icons/notification.png">
      <div v-if="isMenuOpen">
        <div v-if="!isUserLogedIn" class="profile-menu">
        <button @click="openLogin">Login</button>
        <button @click="openSignin">Signup</button>
        </div>
        <div v-else class="profile-menu">
        <button class="airbnb-medium" @click="openNotifications">Notifications</button>
        <button class="airbnb-medium" @click="openTrips">Trips</button>
        <button class="airbnb-medium" @click="openWishlists">Wishlists</button>
         <button class="airbnb-medium" @click="openDashboard">Manage listings</button>
        <button class="airbnb-medium" @click="openAccount">Account</button>
        <button class="airbnb-medium" @click="doLogout">Logout</button>
        </div>
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
        <form @submit.prevent="doLogin">
          <input
            type="text"
            placeholder="Enter email"
            v-model="loginCred.username"
          />
          <input
            type="password"
            placeholder="Enter password"
            v-model="loginCred.password"
          />
          <button class="checkout-btn" style="--x: 394px; --y: 47px">
            <span>Continue</span>
          </button>
        </form>
        <div class="move-signup-button">
          <small
            >Dont have a user? click here to
            <button class="x-close" @click="openSigninCloseLogin">
              sign up
            </button></small>
        </div>
      </div>
      <div class="login-divider">
        <div class="border"></div>
        <small>or</small>
      </div>
      <div class="login-socials">
        <button>
          <span class="material-icons" style="color: rgb(66, 103, 178)"
            >facebook </span
          >Continue with Facebook
        </button>
        <button>
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
        <form @submit.prevent="doSignup">
          <input
            v-model="signupCred.email"
            type="text"
            placeholder="Enter email"
          />
          <input
            v-model="signupCred.username"
            type="text"
            placeholder="Enter full name"
          />
          <input
            v-model="signupCred.password"
            type="password"
            placeholder="Enter password"
          /><button class="checkout-btn" style="--x: 394px; --y: 47px">
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
</template>

<script>

import Avatar from 'vue-avatar'

export default {
  data() {
    return {
      userLoggedIn: null,
      isPendingOrders: null,


      isMenuOpen: false,
      isLoginOpen: false,
      isUserLogedIn: false,
      isSigninOpen:false,
      loginCred: {
        username: "",
        password: null,
      },
      signupCred: {
        email: "",
        username: "",
        password: null,
      },
    };
  },
   created() {
    if (this.$store.getters.loggedinUser){
      let user = this.$store.getters.loggedinUser
      console.log('logedin user', user);
       this.isUserLogedIn=true;
       this.userLoggedIn = user

       if (this.loggedinUser.pendingOrders.length) {
         this.isPendingOrders = true
       } else {
         this.isPendingOrders = false
       }
      }
    else {
       console.log('no user');
         this.isUserLogedIn=false;
    }
    
  },
  mounted(){
    if (this.$store.getters.loggedinUser){
      console.log('user connected');
      this.isUserLogedIn=true;
      }
    else {
       console.log('no user');
         this.isUserLogedIn=false;
    }
  },
   computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
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
     async doLogin() {
      if (!this.loginCred.username  || !this.loginCred.password) {
        this.msg = "Please enter username/password"
        console.log(this.msg );
        return;
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        // this.$router.push("/admin").catch(()=>{});
        // this.$router.push('/')
         this.isLoginOpen = false;
         console.log('mission succeded');
         this.isUserLogedIn=true;
      } catch(err) {
          console.log(err)
          this.msg = "Failed to login"
      }
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    },
    openNotifications(){
      this.$router.push("/notifications");
    },
    openDashboard() {
       this.$router.push("/host")
    },
    openTrips(){
    this.$router.push("/trip");
    },
    openWishlists(){
     this.$router.push("/wishlist");
    },
    openAccount(){
     this.$router.push("/account");
    },
    doLogout(){
     sessionStorage.clear();
      this.isUserLogedIn=false;
      // this.$router.push('/')
    },
    async doSignup() {
      if (!this.signupCred.email || !this.signupCred.password || !this.signupCred.username) {
        this.msg = "Please fill up the form"
        console.log(this.msg);
        return
      }
      console.log(this.signupCred);
      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
       this.isSigninOpen = false;
      // this.$router.push("/admin").catch(()=>{});
      // this.$router.push('/')
      
    },
  },
   components: {
    Avatar
  },
};
</script>

<style>
</style>