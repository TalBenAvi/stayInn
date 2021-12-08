<template>
  
  <div v-if="stay" class="stay-details">
  
    <div class="name">{{ this.stay.name }}</div>
    <div class="location-name">
      <!-- because yaniv is the best! -->
      <div>
        <img class="star" src="../assets/imgs/icons/star.jpg" />
        {{ this.stay.reviews[0].rate }} ({{ this.stay.reviews.length }} reviews)
        · {{ this.stay.loc.address }},{{ this.stay.loc.country }}
      </div>
      <div class="flex-center">
        <div class="flex-center">
          <div class="spacing-10px-right center-1px">
            <img class="star" src="../assets/imgs/icons/share.png" />
          </div>
          <div class="spacing-20px-right">share</div>
        </div>
        <div class="flex-center">
          <div class="spacing-10px-right center-1px">
            <img class="star" src="../assets/imgs/icons/heart.png" />
          </div>
          <div>save</div>
        </div>
      </div>
    </div>
    <div class="imgs-layout">
      <img
        class="img1"
        :src="
          require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)
        "
      />
      <div class="first-row">
        <img
          class="img2"
          :src="
            require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[1]}`)
          "
        />
        <img
          class="img3"
          :src="
            require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[2]}`)
          "
        />
      </div>
      <div class="second-row">
        <img
          class="img4"
          :src="
            require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[3]}`)
          "
        />
        <img
          class="img5"
          :src="
            require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[4]}`)
          "
        />
      </div>
    </div>
    <div class="res-details-layout">
      <div class="stay-info">
        <div class="head-flex">
          <div class="stay-info-heder">
            <div class="minimal-details">
              {{ this.stay.TypeOfPlace }} hosted by
              {{ this.stay.host.fullName }}
            </div>
            <div class="location-space">
              {{ this.stay.accommodates }} guests ·
              {{ this.stay.bedrooms }} bedrooms · {{ this.stay.beds }} beds ·
              {{ this.stay.bath }} baths
            </div>
          </div>
          <div><img class="baner" src="../assets/imgs/icons/host.png" /></div>
        </div>
        <div class="stay-info-desc">
          <div class="flex-row">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/home.png" />
            </div>
            <div>
              <div class="short-exmple">Entire home</div>
              <div class="exsplnation">You’ll have the house to yourself.</div>
            </div>
          </div>
          <div class="flex-row">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/location.png" />
            </div>
            <div>
              <div class="short-exmple">Great location</div>
              <div class="exsplnation">
                90% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <div class="flex-row">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/key.png" />
            </div>
            <div>
              <div class="short-exmple">Great check-in experience</div>
              <div class="exsplnation">
                90% of recent guests gave the check-in process a 5-star rating.
              </div>
            </div>
          </div>
          <div class="flex-row">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/Pool.png" />
            </div>
            <div>
              <div class="short-exmple">Pool</div>
              <div class="exsplnation">
                Guests often search for this popular amenity
              </div>
            </div>
          </div>
        </div>
        <div class="stay-info-desc">
          <div class="padding vibrous">{{ this.stay.summary }}</div>
        </div>
        <div class="stay-info-desc">
          <h3>Where you'll sleep</h3>
          <div class="bed-card">
            <div>
              <img
                class="icon-bed"
                src="../assets/imgs/icons/king-size-bed.png"
              />
            </div>
            <div class="airbnb-medium spacing-15px">Bedroom</div>
            <div class="airbnb">1 double bed</div>
          </div>
        </div>
        <div class="stay-info-desc-end">
          <h3>What this place offers</h3>
          <div class="offeres-layout">
            <div class="houseRules-layout">
              <!-- <div class="spacing">{{this.stay.HouseRules[1]}}</div>
            <div class="spacing">{{this.stay.HouseRules[0]}}</div>
             <div><img class="star" src="../assets/imgs/icons/no-smoking.png" /> {{this.stay.HouseRules[2]}}</div> -->
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Pool.png" />
                </div>
                <div class="center">{{ this.stay.amenities[7] }}</div>
              </div>
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Dryer.png" />
                </div>
                <div class="center">{{ this.stay.amenities[4] }}</div>
              </div>
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/TV.png" />
                </div>
                <div class="center">{{ this.stay.amenities[5] }}</div>
              </div>
              <div class="spacing-44px flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/car.png" />
                </div>
                <div class="center">{{ this.stay.amenities[3] }}</div>
              </div>
            </div>
            <div class="amenities-layout">
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Kitchen.png" />
                </div>
                <div class="center">{{ this.stay.amenities[1] }}</div>
              </div>
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Iron.png" />
                </div>
                <div class="center">{{ this.stay.amenities[6] }}</div>
              </div>
              <div class="spacing flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Wifi.png" />
                </div>
                <div class="center">{{ this.stay.amenities[0] }}</div>
              </div>
              <div class="spacing-44px flex-center">
                <div class="spacing-10px-right">
                  <img class="icons" src="../assets/imgs/icons/Washer.png" />
                </div>
                <div class="center">{{ this.stay.amenities[2] }}</div>
              </div>
            </div>
          </div>
          <div class="padding-50px">
            <button class="show-more-amenities airbnb-medium">
              show all {{ this.stay.amenities.length }} amenities
            </button>
          </div>
        </div>
      </div>
      <div class="stay-reserve-layout">
        <div :style="determinePos">
          <div class="stay-reserve">
            <div class="price-reviews">
              <div class="stay-price">${{ this.stay.price }}</div>
              <div class="night">/night </div>
              <div class="rate">
                <img
                  class="h-13px w-13px padding-2px"
                  src="../assets/imgs/icons/star.jpg"
                />{{ this.stay.reviews[0].rate }}
              </div>
              <div class="reviews">
                ({{ this.stay.reviews.length }} reviews)
              </div>
            </div>
            <div>
              <div class="checking">
                <div class="check-in">
                  <div class="category-stay-label">CHECK-IN</div>
                  <!-- <div v-if="!currentTrip" class="add">Add date</div> -->
                  <!-- <div class="add">{{ currentTrip.startDate }}</div> -->
                  <date-picker v-if="currentTrip" :tripdate="tripDates" />
                  <date-picker v-else />
                </div>
                <div class="check-out">
                  <div class="category-stay-label">CHECK-OUT</div>
                  <!-- <div v-if="!currentTrip" class="add">Add date</div>
                  <div v-else class="add">{{ currentTrip.endDate }}</div> -->
                </div>
                <div class="guests-num" @click="show = !show">
                  <div class="category-stay-label">GUESTS</div>
                  <i class="arrow down details"></i>
                  <div v-if="!currentTrip" class="add">1 guest</div>
                  <div v-else class="add">{{ numOfGuests }} guests</div>
                </div>
              </div>

              <div
                ref="guestModal"
                class="guests-options"
                :class="{ shown: show, hidden: !show }"
              >
                <div v-if="currentTrip" class="guests-options-container">
                  <div class="guests-selection">
                    <div class="adults-container">
                      <span>Adults</span>
                      <el-input-number
                        class="input-filter"
                        v-model="currentTrip.guests.adults"
                        :min="0"
                        :max="10"
                      ></el-input-number>
                    </div>
                    <div class="children-container">
                      <span>Children</span>
                      <el-input-number
                        class="input-filter"
                        v-model="currentTrip.guests.children"
                        :min="0"
                        :max="10"
                      ></el-input-number>
                    </div>
                    <div class="infants-container">
                      <span>Infants</span>
                      <el-input-number
                        class="input-filter"
                        v-model="currentTrip.guests.infants"
                        :min="0"
                        :max="10"
                      ></el-input-number>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                  <gardient-btn @reserveStay="reserveStay()"></gardient-btn>
              </div>
            </div>
            <div class="charged">
              You won't be charged yet
              </div>
            <div class="priceing">
              <div class="underline">${{ this.stay.price }} x {{nightsCount}} nights</div>
              <div>${{ Number(this.stay.price * nightsCount ).toLocaleString() }}</div>
            </div>
            <div class="priceing">
              <div class="underline">Cleaning fee</div>
              <div>$100</div>
            </div>
            <div class="priceing">
              <div class="underline">Service fee</div>
              <div>$50</div>
            </div>
            <div class="total">
              <div class="airbnb-medium">Total</div>
              <div class="airbnb-medium">
              ${{ Number(this.stay.price * nightsCount + 50 + 100).toLocaleString() }}
              </div>
            </div>
          </div>
          <div class="report-stay">
            <img :src="require(`@/assets/imgs/branding/Capture.png`)" />
            <span class="report-text">Report this listing</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews-display">
      <div class="airbnb-medium font-size-19px spacing-44px">
        <img class="star" src="../assets/imgs/icons/star.jpg" />
        {{ this.stay.reviews[0].rate }} · {{ this.stay.reviews.length }} reviews
      </div>
      <div class="reviews-rating-data airbnb">
        <div class="flex-center space-end">
          <div class="spacing-10px-right">Cleanliness</div>
          <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
        <div class="flex-center space-end">
          <div class="spacing-10px-right">Communication</div>
           <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
        <div class="flex-center space-end">
          <div class="spacing-10px-right">Check-in</div>
           <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
        <div class="flex-center space-end">
          <div class="spacing-20px-right">Accuracy</div>
           <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
        <div class="flex-center space-end">
          <div class="spacing-20px-right">Location</div>
           <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
        <div class="flex-center space-end">
          <div class="spacing-20px-right">Value</div>
           <div class="gray review-rate-bar"><div  :style="rateReview"></div></div>
          <div class="rate-score">
            <div>{{ this.stay.reviews[0].rate }}</div>
          </div>
        </div>
      </div>
      <div class="reviews-display-data airbnb">
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[0].by.fullName }}
              </div>
              <div class="review-date">March 2021</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[1].by.fullName }}
              </div>
              <div class="review-date">October 2019</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[2].by.fullName }}
              </div>
              <div class="review-date">November 2020</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[3].by.fullName }}
              </div>
              <div class="review-date">July 2020</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[4].by.fullName }}
              </div>
              <div class="review-date">October 2020</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
        <div>
          <div class="flex-row">
            <div class="center spacing-10px-right">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/avatar.png"
              />
            </div>
            <div class="center">
              <div class="short-exmple">
                {{ this.stay.reviews[5].by.fullName }}
              </div>
              <div class="review-date">January 2021</div>
            </div>
          </div>
          <div>{{ this.stay.reviews[1].txt }}</div>
        </div>
      </div>
      <div>
        <div>
          <span class="underline airbnb-medium spacing-44px">Show more</span>
        </div>
        <div class="spacing-44px">
          <button class="show-more-amenities airbnb-medium">
            show all {{ this.stay.reviews.length }} reviews
          </button>
        </div>
      </div>
    </div>
    <div class="stay-location-map">
      <h3 class="airbnb">Where you’ll be</h3>
      <div class="location-name-map">
        {{ this.stay.loc.address }},{{ this.stay.loc.country }}
      </div>
      <div>
        <GmapMap
          :center="pos"
          :zoom="12"
          map-type-id="terrain"
          style="width: 1120px; height: 480px; margin-bottom: 80px"
        >
          <GmapMarker :position="pos" :clickable="true" />
        </GmapMap>
      </div>
    </div>
    <div>
      <div class="stay-location-map">
        <div class="flex-row">
          <div class="width-50 spacing-120px-right">
            <div class="flex-row">
              <div class="center spacing-10px-right">
                <img
                  class="user-review-avatar"
                  src="../assets/imgs/icons/host.png"
                />
              </div>
              <div class="center">
                <div class="short-exmple">
                  Hosted by {{ this.stay.host.fullName }}
                </div>
                <div class="review-date">Joined in August 2013</div>
              </div>
            </div>
            <div class="airbnb">
              I'm British but I work in The Hague with my Australian wife and
              two children. I've studied, lived and worked in various countries
              but now call El Port de la Selva home where we come whenever we
              can.
            </div>
          </div>
          <div class="airbnb">
            <div class="spacing-15px">Policy number: HUTG-014398</div>
            <div class="spacing-15px">
              Languages: English, Français, Español
            </div>
            <div class="spacing-15px">Response rate: 100%</div>
            <div class="spacing-25px">Response time: within an hour</div>
            <div class="spacing-44px">
              <button class="contact-host airbnb-medium">Contact Host</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width">
      <h3 class="airbnb">Things to know</h3>
      </div>
    <div class="flex-row full-width">
      <div class="width-33">
        <div>
          <div class="airbnb-medium spacing-15px">House rules</div>
          <div class="flex-row spacing-15px">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/clock.png" />
            </div>
            <div>
              <div class="airbnb">Check-in: After 5:00 PM</div>
            </div>
          </div>
          <div class="flex-row spacing-15px">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/clock.png" />
            </div>
            <div>
              <div class="airbnb">Checkout: 11:00 AM</div>
            </div>
          </div>
          <div class="flex-row spacing-15px">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/No-smoking.png" />
            </div>
            <div>
              <div class="airbnb">No smoking</div>
            </div>
          </div>
          <div class="flex-row spacing-15px">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/home.png" />
            </div>
            <div>
              <div class="airbnb">No pets</div>
            </div>
          </div>
          <div class="flex-row spacing-15px">
            <div class="center">
              <img class="icon" src="../assets/imgs/icons/home.png" />
            </div>
            <div>
              <div class="airbnb">No parties or events</div>
            </div>
          </div>
        </div>
      </div>
      <div class="width-33">
        <div class="airbnb-medium spacing-15px">Health & safety</div>
        <div class="flex-row spacing-15px">
          <div class="center">
            <img class="icon" src="../assets/imgs/icons/clock.png" />
          </div>
          <div>
            <div class="airbnb width-75">
              Airbnb's social-distancing and other COVID-19-related guidelines
              apply
            </div>
          </div>
        </div>
        <div class="flex-row spacing-15px">
          <div class="center">
            <img class="icon" src="../assets/imgs/icons/clock.png" />
          </div>
          <div>
            <div class="airbnb">No carbon monoxide alarm</div>
          </div>
        </div>
        <div class="flex-row spacing-15px">
          <div class="center">
            <img class="icon" src="../assets/imgs/icons/No-smoking.png" />
          </div>
          <div>
            <div class="airbnb">No smoke alarm</div>
          </div>
        </div>
      </div>
      <div class="width-33">
        <div class="airbnb-medium spacing-15px">Cancellation policy</div>
        <div class="flex-row spacing-15px">
          <div>
            <div class="airbnb">
              Cancel before Dec 6 and get a 50% refund, minus the first night
              and service fee.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from "../cmps/date-picker.vue";
import { eventBus } from "../services/eventBus.js";
import gardientBtn from '../cmps/gardient-btn.vue';
export default {
  components: {
    datePicker,
    gardientBtn
  },
  name: "stay-details",
  data() {
    return {
      stay: null,
      pos: { lat: 41.5912, lng: 1.5209 },
      scrollBar: 0,
      currentTrip: this.$store.getters.currentTrip,
      show: false,
      newOrder: this.$store.getters.emptyOrder,
      nightsAmount : 0
  
    };
  },
  created() {
    if (!this.currentTrip) {
      this.currentTrip = {
        startDate: "",
        endDate: "",
        guests: {
          adults: 0,
          children: 0,
          infants: 0,
          pets: 0,
        },
        dest: {
          country: "",
          countryCode: "",
          address: "",
        },
      };
    }
    eventBus.$on("dateUpdated", this.dateUpdated);
    window.addEventListener("scroll", this.handlingScroll);
  },
  methods: {
    handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos;
    },
    dateUpdated(dates, amount) {
      
      if (!this.currentTrip) return;
      this.currentTrip.startDate = `${new Date(dates.start).getDate()}/${
        new Date(dates.start).getMonth() + 1
      }/${new Date(dates.start).getFullYear()}`;
      this.currentTrip.endDate = `${new Date(dates.end).getDate()}/${
        new Date(dates.end).getMonth() + 1
      }/${new Date(dates.end).getFullYear()}`;
      this.nightsAmount = amount
   
    },
    reserveStay() {
      let user = this.$store.getters.loggedinUser
      if (!user) {
        prompt('please sign in ')
      } else {
        this.sendOrderRequest()
      }
    },
    sendOrderRequest() {
      this.newOrder.createdAt = Date.now()
      this.newOrder.startDate = this.currentTrip.startDate
      this.newOrder.endDate = this.currentTrip.endDate
      this.newOrder.hostId= this.stay.host._id
      this.newOrder.guests = this.currentTrip.guests
      this.newOrder.stay.name = this.stay.name
      this.newOrder.stay.price = this.stay.price //**
      this.newOrder.stay._id = this.stay._id
      this.newOrder.stay.totalPrice = this.calcultedPrice
      console.log('Hello, order!', this.newOrder)
      this.$store.dispatch({type:'addOrder', order: this.newOrder})
    }
  },
  computed: {
    determinePos() {
      if (this.scrollBar < 580 ) return { position: "relative"};
      else  if (this.scrollBar >= 580 && this.scrollBar <= 1200) {
        return {position: "relative","margin-top": this.scrollBar-580 + "px"};
      } 
      else return {position: "relative","margin-top":640 + "px" };
    },
    rateReview(){
      let length=(this.stay.reviews[0].rate)/(5/100);
      console.log(length);
      return {width:length + "%"};
    },
    numOfGuests() {
      let amount =
        this.currentTrip.guests.adults +
        this.currentTrip.guests.children +
        this.currentTrip.guests.infants +
        this.currentTrip.guests.pets;
      return amount;
    },
    tripDates() {
      if (this.currentTrip.startDate) {
        var dates = {
          start: this.currentTrip.startDate.split("/"),
          end: this.currentTrip.endDate.split("/"),
        };
        return dates;
      } else {
        return "";
      }
    },
    nightsCount() {
      return parseInt(this.nightsAmount)

    },
    calcultedPrice() {
      return this.stay.price * this.nightsAmount
    }
  },
  watch: {
    "$route.params.stayId": {
      async handler() {
        const { stayId } = this.$route.params;
        try {
          var stay = await this.$store.dispatch({
            type: "getStayById",
            stayId: stayId,
          });
          this.stay = stay;
        } catch (err) {
          console.log("had error", err);
          throw err;
        }
      },
      immediate: true,
    },
  },
};
</script>
