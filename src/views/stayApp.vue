<template>
  <div class="stay-app">
    <section class="stay-filter-container" :style="determinePos">
      <!-- <div class="separete-line"> -->
      <button class="filter-btn">Price <i class="arrow down"></i></button>

      <button @click="toggleModal()" class="filter-btn border">
        Type of place <i class="arrow down"></i>
      </button>
      <div ref="typeof" class="typeof-modal">
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
                @click="toggleBtn3($event,'Hotel room')"
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
      <button class="filter-btn filter">
        <img class="filter-icon" src="@/assets/imgs/icons/filter.png" />Filters
      </button>

   
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
        location: null,
        amenities: [],
        typeOfPlace: null,
      },
      scrollBar: 0
      
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
    window.addEventListener("scroll", this.handlingScroll);

    this.setFilter();
  },
  computed: {
      determinePos() {
      console.log(this.scrollBar)
      if (this.scrollBar >= 85) {
        return {position: 'fixed',top: 0, width: 100+'%', padding: '54px 147px 58px' ,'padding-bottom': 58+'px', backgroundColor: 'white', 'margin-top': 0, 'box-shadow': 'rgb(0 0 0 / 12%) 0px 6px 16px', 'padding-inline-end': 200+'px' , transition: 'opacity 0.1s cubic-bezier(0.35, 0, 0.65, 1) 0s'}
      }else{
        console.log('i should stop here')
        return {backgroundColor: 'transparent'}

      }
    }
  },
  methods: {
    showDetails(stayId) {
      this.$router.push({ path: `/stay/details/${stayId}` });
    },
    async setFilter(ev, fromBtns) {
      if (this.$route.query.filter) {
        const { filter } = this.$route.query;
        this.filterBy.location = filter;
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
      }

      await this.$store.dispatch({
        type: "setCurrFilter",
        filterBy: this.filterBy,
      });
      this.staysForDisplay = this.$store.getters.staysForDisplay;
    },
    toggleModal() {
      this.$refs.typeof.classList.toggle("hidden");
    },
    async toggleBtn1(event, by) {
      this.$refs.one.classList.toggle("checked");

      if (event.target.classList.contains("checked")) {
        this.filterBy.typeOfPlace = by;
        console.log(this.filterBy);
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: this.filterBy,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      } else {
          this.filterBy.typeOfPlace = null
      }
      this.staysForDisplay = this.$store.getters.staysForDisplay;
       
    },
    async toggleBtn2(event, by) {
      this.$refs.two.classList.toggle("checked");

      if (event.target.classList.contains("checked")) {
        this.filterBy.typeOfPlace = by;
        console.log(this.filterBy);
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: this.filterBy,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      } else {
          this.filterBy.typeOfPlace = null
      }
      this.staysForDisplay = this.$store.getters.staysForDisplay;
    },
    async toggleBtn3(event, by) {
      this.$refs.three.classList.toggle("checked");

      if (event.target.classList.contains("checked")) {
        this.filterBy.typeOfPlace = by;
        console.log(this.filterBy);
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: this.filterBy,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      } else {
          this.filterBy.typeOfPlace = null
      }
      this.staysForDisplay = this.$store.getters.staysForDisplay;
    },
    async toggleBtn4(event, by) {
      this.$refs.four.classList.toggle("checked");

      if (event.target.classList.contains("checked")) {
        this.filterBy.typeOfPlace = by;
        console.log(this.filterBy);
        await this.$store.dispatch({
          type: "setCurrFilter",
          filterBy: this.filterBy,
        });
        this.staysForDisplay = this.$store.getters.staysForDisplay;
      } else {
          this.filterBy.typeOfPlace = null
      }
      this.staysForDisplay = this.$store.getters.staysForDisplay;
    },
      handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos
      console.log(this.scrollBar)
    }
  },
};
</script>

