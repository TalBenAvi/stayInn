<template>
  <div class="stay-app">
    <section class="stay-filter-container" :style="determinePos">
      <!-- <div class="separete-line"> -->
      <button @click="toggleModal('price')" class="filter-btn price-btn-margin">
        Price <i class="arrow down"></i>
      </button>

      <div ref="price" class="price-range hidden">
        <form @submit.prevent="setPriceRange()" class="price-range-input">
          <el-slider v-model="value" range show-stops :max="600"> </el-slider>
          <div class="min-max-price">
            <div class="min-price">
              <span>min price</span>
              <div>$ {{ minPrice }}</div>
            </div>
            -
            <div class="max-price">
              <span>max price</span>
              <div>$ {{ maxPrice }}</div>
            </div>
          </div>
          <div class="save-price">
            <button>save</button>
            <p @click="resetPriceRange()">clear</p>
          </div>
        </form>
      </div>

      <button @click="toggleModal('filter')" class="filter-btn border">
        Type of place <i class="arrow down"></i>
      </button>
      <div ref="typeof" class="typeof-modal hidden">
        <form class="typeof">
          <label for="Entire">
            <div class="option-container">
              <button
                class="checkbox"
                @click="toggleBtn($event, 'Entire place')"
              ></button>
              <div class="option-text">
                <span>Entire place</span>
                <small>Have a place to yourself</small>
              </div>
            </div>
          </label>

          <label for="Private">
            <div class="option-container">
              <button
                class="checkbox"
                @click="toggleBtn($event, 'Private room')"
              ></button>
              <div class="option-text">
                <span>Private room</span>
                <small>Have your own room and share some common spaces</small>
              </div>
            </div>
          </label>

          <label for="Hotel">
            <div class="option-container">
              <button
                class="checkbox"
                @click="toggleBtn($event, 'Hotel room')"
              ></button>
              <div class="option-text">
                <span>Hotel room</span>
                <small
                  >Have a private or shared room in a boutique hotel, hostel,
                  and more</small
                >
              </div>
            </div>
          </label>

          <label for="Shared">
            <div class="option-container">
              <button
                class="checkbox"
                @click="toggleBtn($event, 'Shared room')"
              ></button>
              <div class="option-text">
                <span>Shared room</span>
                <small>Stay in a shared space, like a common room</small>
              </div>
            </div>
          </label>
        </form>
      </div>
      <!-- </div> -->

      <button
        @click="setFilter($event, 'free cancellation')"
        class="filter-btn btn-1"
      >
        Free cancellation
      </button>
      <button @click="setFilter($event, 'Wifi')" class="filter-btn btn-2">
        Wifi
      </button>
      <button @click="setFilter($event, 'Kitchen')" class="filter-btn btn-3">
        Kitchen
      </button>
      <button
        @click="setFilter($event, 'Air conditioning')"
        class="filter-btn btn-4"
      >
        Air conditioning
      </button>
      <button
        @click="setFilter($event, 'Self check-in')"
        class="filter-btn btn-5"
      >
        Self check-in
      </button>
      <button @click="setFilter($event, 'Washer')" class="filter-btn btn-6">
        Washer
      </button>
      <button
        @click="setFilter($event, 'Free parking')"
        class="filter-btn btn-7"
      >
        Free parking
      </button>
      <button @click="setFilter($event, 'Dryer')" class="filter-btn btn-8">
        Dryer
      </button>
      <button
        @click="setFilter($event, 'Dedicated workspace')"
        class="filter-btn btn-9"
      >
        Dedicated workspace
      </button>
      <button @click="setFilter($event, 'Iron')" class="filter-btn btn-10">
        Iron
      </button>
      <button @click="setFilter($event, 'Gym')" class="filter-btn btn-11">
        Gym
      </button>
      <button @click="setFilter($event, 'Pool')" class="filter-btn btn-12">
        Pool
      </button>
      <button @click="toggleModal('filters')" class="filter-btn filter">
        <img class="filter-icon" src="@/assets/imgs/icons/filter.png" />Filters
      </button>

      <div ref="filter" class="filter-modal hidden">
        <div class="filter-modal-container">
          <div @click="setRoomFilters()" class="rooms">
            <h1>Rooms and beds</h1>
            <div class="beds-container">
              <span class="beds">Beds</span>
              <el-input-number
                class="input-filter"
                v-model="filterBy.beds"
                :min="0"
                :max="10"
              ></el-input-number>
            </div>
            <div class="bedrooms-container">
              <span class="bedrooms">Bedrooms</span>
              <el-input-number
                class="input-filter"
                v-model="filterBy.bedrooms"
                :min="0"
                :max="10"
              ></el-input-number>
            </div>
            <div class="bathrooms-container">
              <span class="bathrooms">Bathrooms</span>
              <el-input-number
                class="input-filter"
                v-model="filterBy.bath"
                :min="0"
                :max="10"
              ></el-input-number>
            </div>
          </div>
          <div class="propery-type">
            <h1>Property type</h1>
            <div class="property-container">
              <div class="house-contaier">
                <button
                  class="checkbox"
                  @click="toggleProperty($event, 'House')"
                ></button>
                <span>House</span>
              </div>

              <div class="apartment-container">
                <button
                  class="checkbox"
                  @click="toggleProperty($event, 'Apartment')"
                ></button>
                <span>Apartment</span>
              </div>
              <div class="hotel-container">
                <button
                  class="checkbox"
                  @click="toggleProperty($event, 'Hotel')"
                ></button>
                <span>Hotel</span>
              </div>
              <div class="guesthouse-container">
                <button
                  class="checkbox"
                  @click="toggleProperty($event, 'Villa')"
                ></button>
                <span>Villa</span>
              </div>
            </div>
          </div>

          <div class="rules">
            <h1>House rules</h1>
            <div class="rules-container">
              <div class="smoking-container">
                <button
                  ref="smoking"
                  @click="toggleRule($event, 'Smoking allowed')"
                  class="checkbox"
                ></button>
                <span>Smoking allowed</span>
              </div>
              <div class="pets-container">
                <button
                  ref="pets"
                  @click="toggleRule($event, 'Pets allowed')"
                  class="checkbox"
                ></button>
                <span>Pets allowed</span>
              </div>
              <div class="children-container">
                <button
                  ref="children"
                  @click="toggleRule($event, 'Children allowed')"
                  class="checkbox"
                ></button>
                <span>Children allowed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Card Grid Display -->
    <div v-if="staysForDisplay" class="center-20 airbnb gray-222222">{{this.staysForDisplay.length}} stays <span v-if="filterByLoc !== 'all' && filterByLoc">in {{this.staysForDisplay[0].loc.country}}</span></div>
    <!-- in {{this.staysForDisplay[0].loc.country}} -->
    <section v-if="staysForDisplay" class="grid-card-container">
      <div
        v-for="stay in staysForDisplay"
        :key="stay._id"
        class="grid-card-item"
        @click="showDetails(stay._id)"
      >
        <div class="grid-img">
          <span class="material-icons heart-icon" @click.stop="toggleIsLiked($event)">favorite</span>
    <span class="demonstration"></span>
    <el-carousel         trigger="click"
        height="262.250px"
        width="362px"
        :autoplay="false"
        :loop="false">
      <el-carousel-item v-for="(item, idx) in stay.imgUrls" :key="idx">
          <img class="stay-grid-img-border"
            :src="
              require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[idx]}`)
            "
          /> 
        <!-- <h3 class="small">{{ idx }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  <!-- </div> -->
          
        </div>
        
        <div class="all-txt">
          <!-- <p class="stay-name flex"> -->
            <div class="flex-row">
              <div> <img class="star center-5px spacing-10px-right" src="../assets/imgs/icons/star.jpg" /></div>
              <div class="airbnb center gray-color rate-score-stay-line"><span class="rate-score-stay">{{stay.reviews[0].avgrate}}</span> ({{stay.reviews[0].revnum}})</div>
            </div>
            <div class="left-details-display airbnb">{{ stay.loc.country }} ∙ {{ stay.typeOfPlace }}</div>
            <div class="left-details-display stay-name-left-details-display airbnb">{{ stay.name }}</div>
            <div class="price-details-display flex-row"><div class="airbnb-medium">${{ stay.price }}</div><div class="airbnb"> / night</div></div>
          <!-- </p> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "stay-app",
  data() {
    return {
      stay: null,
      staysForDisplay: null,
      filterBy: {
        price: {
          minPrice: 0,
          maxPrice: 0,
        },
        location: null,
        amenities: [],
        typeOfPlace: [],
        beds: 0,
        bath: 0,
        bedrooms: 0,
        propertyType: [],
        HouseRules: [],
      },
      scrollBar: 0,
      value: [100, 400],
      modalOpen: true,
      isLiked: false
    };
  },
  async created() {
    await this.$store.dispatch({ type: "loadStays" });
    window.addEventListener("scroll", this.handlingScroll);
       await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: "",
        });
    this.setFilter();
  },
  mounted() {},
  computed: {
        filterByLoc(){
      console.log(this.$store.getters.filterByLoc)
      return this.$store.getters.filterByLoc
    },
    determinePos() {
      if (this.scrollBar >= 85) {
        return {
          position: "fixed",
          top: 0,
          width: 100 + "%",
          // padding: "54px 147px 54px",
          //  "padding-bottom": 58 + "px",
          paddingTop: "20px",
          paddingBottom: "20px",
          // paddingLeft: "110px",
          marginLeft: "150px",
          backgroundColor: "white",
          "margin-top": 0,
          "box-shadow": "rgb(0 0 0 / 8%) 0px 1px 1px",
          "padding-inline-end": 200 + "px",
          transition: "opacity 0.1s cubic-bezier(0.35, 0, 0.65, 1) 0s",
        };
      } else {
        return { backgroundColor: "transparent" };
      }
    },
    minPrice() {
      return +this.value[0];
    },
    maxPrice() {
      return +this.value[1];
    },
  },
  methods: {
    showDetails(stayId) {
      console.log('showDetails stayId' , stayId);
      this.$router.push({ path: `/stay/details/${stayId}` });
    },
    async setFilter(ev, fromBtns) {
      if (!this.$route.query.trip && !this.$route.query.filter) {
        //should display all stays in data
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: "",
        });
        await this.$store.dispatch({
          type: "setFilterByTrip",
          trip :''
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      }
      if (this.$route.query.trip) {
        const { trip } = this.$route.query;
        await this.$store.dispatch({
          type: "setFilterByTrip",
          trip,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      }
      if (this.$route.query.filter) {
        const { filter } = this.$route.query;
        console.log(filter)
        this.filterBy.location = filter;
        this._updateStays();
      }
      if (fromBtns) {
        if (ev.target.classList.contains("isSelected")) {
          const idx = this.filterBy.amenities.findIndex(
            (amenitie) => amenitie === fromBtns
          );
          this.filterBy.amenities.splice(idx, 1);
        } else {
          this.filterBy.amenities.push(fromBtns);
        }
        ev.target.classList.toggle("isSelected");
        this._updateStays();
      }
    },
    toggleModal(type) {
      if (type === "filter") this.$refs.typeof.classList.toggle("hidden"); {
        if (!this.$refs.typeof.classList.contains('hidden')) {
          this.$refs.price.classList.add('hidden')
          this.$refs.filter.classList.add('hidden')
        }
      }
      if (type === "price") this.$refs.price.classList.toggle("hidden"); {
          if (!this.$refs.price.classList.contains('hidden')) {
          this.$refs.typeof.classList.add('hidden')
          this.$refs.filter.classList.add('hidden')
        }

      }
      if (type === "filters") this.$refs.filter.classList.toggle("hidden"); {
          if (!this.$refs.filter.classList.contains('hidden')) {
          this.$refs.price.classList.add('hidden')
          this.$refs.typeof.classList.add('hidden')
        }

      }
    },
    async _filteringBy(event, by, key) {
      if (event.target.classList.contains("checked")) {
        this.filterBy[key].push(by);
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: this.filterBy,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      } else {
        var idx = this.filterBy[key].findIndex((k) => k === by);
        this.filterBy[key].splice(idx, 1);
        
      }
      this.staysForDisplay = this.$store.getters.staysForDisplay;
      
    },
    async _updateStays() {
      await this.$store.dispatch({
        type: "setCurrFilter",
        filterBy: this.filterBy,
      });
      this.staysForDisplay = this.$store.getters.staysForDisplay;
    },
    toggleBtn(event, by) {
      this.toggleFilter(event,by,'typeOfPlace')
    },
    handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos;
    },
    async setPriceRange() {
      this.filterBy.price.minPrice = this.value[0];
      this.filterBy.price.maxPrice = this.value[1];
      this._updateStays();
      this.$refs.price.classList.add('hidden')
    },
    async resetPriceRange() {
      this.filterBy.price.minPrice = 0;
      this.filterBy.price.maxPrice = 0;
      this._updateStays();
    },
    setRoomFilters() {
      this._updateStays();
    },
    toggleProperty(event, by) {
     this.toggleFilter(event,by,'propertyType')
    },
    toggleRule(event, by) {
      this.toggleFilter(event,by,'HouseRules')
    },
    toggleFilter(event, by, type) {
      event.target.classList.toggle("checked")
      this._filteringBy(event, by, type);
    },
    toggleIsLiked(ev) {
      ev.target.classList.toggle('active')
    },


  },
};
</script>

