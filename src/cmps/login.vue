<template>
  <section class="login-container">
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
        <form @submit.prevent="login">
          <input
            type="text"
            placeholder="Enter username"
            v-model="user.nickname"
          />
          <input
            type="password"
            placeholder="Enter password"
            v-model="user.password"
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
        <form @submit.prevent="signup">
          <input
            v-model="newUser.email"
            type="text"
            placeholder="Enter email or username"
          />
          <input
            v-model="newUser.nickname"
            type="text"
            placeholder="Enter full name"
          />
          <input
            v-model="newUser.password"
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
import { userService } from "../services/user.service.js";

export default {
  data() {
    return {
      isMenuOpen: false,
      isLoginOpen: false,
      isSigninOpen: false,
      // isSignedUp: true,
      user: {
        nickname: "",
        password: null,
      },
      newUser: {
        email: "",
        nickname: "",
        password: null,
      },
    };
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
    login() {
      userService.login(this.user).then(() => {
        // myBus.$emit("logged");
        this.$router.push("/#/");
      });
    },
    signup() {
      console.log(this.newUser);
      userService.signup(this.newUser).then(() => {
        // myBus.$emit("logged");
        console.log(this.newUser);
        this.$router.push("/#/");
      });
    },
  },
};
</script>

<style>
</style>