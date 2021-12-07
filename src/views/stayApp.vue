<template>
  <div class="stay-app">
    <section class="stay-filter-container" :style="determinePos">
      <!-- <div class="separete-line"> -->
      <button @click="toggleModal('price')" class="filter-btn">
        Price <i class="arrow down"></i>
      </button>

      <div ref="price" class="price-range hidden">
        <form @submit.prevent="setPriceRange()" class="price-range-input">
          <el-slider v-model="value" range show-stops :max="600"> </el-slider>
          <div class="min-max-price">
            <div class="min-price">
              <span>min price</span>
              <div>{{ minPrice }}</div>
            </div>
            -
            <div class="max-price">
              <span>max price</span>
              <div>{{ maxPrice }}</div>
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
                ref="one"
                class="checkbox"
                @click="toggleBtn1($event, 'Entire place')"
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
                ref="two"
                class="checkbox"
                @click="toggleBtn2($event, 'Private room')"
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
                ref="three"
                class="checkbox"
                @click="toggleBtn3($event, 'Hotel room')"
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
                ref="four"
                class="checkbox"
                @click="toggleBtn4($event, 'Shared room')"
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
                  ref="house"
                  class="checkbox"
                  @click="toggleProperty1($event, 'House')"
                ></button>
                <span>House</span>
              </div>

              <div class="apartment-container">
                <button
                  ref="apartment"
                  class="checkbox"
                  @click="toggleProperty2($event, 'Apartment')"
                ></button>
                <span>Apartment</span>
              </div>
              <div class="hotel-container">
                <button
                  ref="hotel"
                  class="checkbox"
                  @click="toggleProperty3($event, 'Hotel')"
                ></button>
                <span>Hotel</span>
              </div>
              <div class="guesthouse-container">
                <button
                  ref="villa"
                  class="checkbox"
                  @click="toggleProperty4($event, 'Villa')"
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
                  @click="toggleRule1($event, 'Smoking allowed')"
                  class="checkbox"
                ></button>
                <span>Smoking allowed</span>
              </div>
              <div class="pets-container">
                <button
                  ref="pets"
                  @click="toggleRule2($event, 'Pets allowed')"
                  class="checkbox"
                ></button>
                <span>Pets allowed</span>
              </div>
              <div class="children-container">
                <button
                  ref="children"
                  @click="toggleRule3($event, 'Children allowed')"
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
    <section v-if="staysForDisplay" class="grid-card-container">
      <div
        v-for="stay in staysForDisplay"
        :key="stay.id"
        class="grid-card-item"
        @click="showDetails(stay.id)"
      >
        <div class="grid-img">
          <img
            :src="
              require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)
            "
          />
        </div>
        <div class="all-txt">
          <p class="stay-name flex">
            <span class="left-details-display"
              >{{ stay.name }}, {{ stay.loc.country }}</span
            >
            <span class="price-details-display">${{ stay.price }}/ night</span>
          </p>
          <p class="stay-details-display">
            {{ stay.accommodates }} guests ∙ {{ stay.bedrooms }} bedrooms ∙
            {{ stay.beds }} beds ∙ {{ stay.bath }} baths
          </p>
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
    determinePos() {
      if (this.scrollBar >= 85) {
        return {
          position: "fixed",
          top: 0,
          width: 100 + "%",
          padding: "54px 147px 58px",
          "padding-bottom": 58 + "px",
          backgroundColor: "white",
          "margin-top": 0,
          "box-shadow": "rgb(0 0 0 / 12%) 0px 6px 16px",
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
        console.log("after trip:", this.staysForDisplay);
      }
      if (this.$route.query.filter) {
        const { filter } = this.$route.query;
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
      if (type === "filter") this.$refs.typeof.classList.toggle("hidden");
      if (type === "price") this.$refs.price.classList.toggle("hidden");
      if (type === "filters") this.$refs.filter.classList.toggle("hidden");
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
    toggleBtn1(event, by) {
      this.$refs.one.classList.toggle("checked");
      this._filteringBy(event, by, "typeOfPlace");
    },
    toggleBtn2(event, by) {
      this.$refs.two.classList.toggle("checked");
      this._filteringBy(event, by, "typeOfPlace");
    },
    toggleBtn3(event, by) {
      this.$refs.three.classList.toggle("checked");
      this._filteringBy(event, by, "typeOfPlace");
    },
    toggleBtn4(event, by) {
      this.$refs.four.classList.toggle("checked");
      this._filteringBy(event, by, "typeOfPlace");
    },
    handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos;
    },
    async setPriceRange() {
      this.filterBy.price.minPrice = this.value[0];
      this.filterBy.price.maxPrice = this.value[1];
      this._updateStays();
    },
    async resetPriceRange() {
      this.filterBy.price.minPrice = 0;
      this.filterBy.price.maxPrice = 0;
      this._updateStays();
    },
    setRoomFilters() {
      this._updateStays();
    },
    toggleProperty1(event, by) {
      this.$refs.house.classList.toggle("checked");
      this._filteringBy(event, by, "propertyType");
    },
    toggleProperty2(event, by) {
      this.$refs.apartment.classList.toggle("checked");
      this._filteringBy(event, by, "propertyType");
    },
    toggleProperty3(event, by) {
      this.$refs.hotel.classList.toggle("checked");
      this._filteringBy(event, by, "propertyType");
    },
    toggleProperty4(event, by) {
      this.$refs.villa.classList.toggle("checked");
      this._filteringBy(event, by, "propertyType");
    },
    toggleRule1(event, by) {
      this.$refs.smoking.classList.toggle("checked");
      this._filteringBy(event, by, "HouseRules");
    },
    toggleRule2(event, by) {
      this.$refs.pets.classList.toggle("checked");
      this._filteringBy(event, by, "HouseRules");
    },
    toggleRule3(event, by) {
      this.$refs.children.classList.toggle("checked");
      this._filteringBy(event, by, "HouseRules");
    },
  },
};
</script>

