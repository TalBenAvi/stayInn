<template>
  <section class="home home-layout">
    <div class="top-fold">
      <div class="home-img">
        <img src="~@/assets/imgs/home-page/main.jpg" />
        <div class="slogan">
          <p>Not sure where to go? Perfect.</p>
        </div>
      </div>
      <button class="flexible-btn"><span>i'm flexible</span></button>
    </div>

    <div class="bottom-fold full">
      <div class="locations-section home-layout">
        <h1>Live anywhere</h1>
        <div class="location-cards">
          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/locations/amsterdam.jpg"/>
            <h4>Amsterdam</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/locations/paris.jpg"/>
            <h4>Paris</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/locations/lisbon.jpg"/>
            <h4>Lisbon</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/locations/london.jpg"/>
            <h4>London</h4>
          </div>
        </div>

        <div class="banner">
          <h1>Quarantine the right way</h1>
          <button>Explore Homes</button>
          <img src="~@/assets/imgs/home-page/banners/1.jpg">
        </div>

        <h1>Unique Stays</h1>
          <div class="location-cards">
          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/homes/cabin/1.jpeg"/>
            <h4>Carpathian Log Home</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/homes/kezhan/1.jpeg"/>
            <h4>Kezhan</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/homes/trullo/1.jpeg"/>
            <h4>Trullo</h4>
          </div>

          <div class="location-card">
            <img class="location-img" src="~@/assets/imgs/home-page/homes/camper/1.jpeg"/>
            <h4>Camper</h4>
          </div>
        </div>

        <div class="banner">
          <h1>Become a host</h1>
          <h4 class="sub-header">Unlock new opportunities by sharing your space.</h4>
          <button class="learn-btn">Learn More</button>
          <img src="~@/assets/imgs/home-page/banners/3.jpg">
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>
