<template>
  <div class="stay-reserve-layout">
    <div :style="determinePos">
      <div class="stay-reserve">
        <div class="price-reviews">
          <div class="stay-price">${{ this.stay.price }}</div>
          <div class="night">/night</div>
          <div class="rate">
            <img
              class="h-13px w-13px padding-2px"
              src="../assets/imgs/icons/star.jpg"
            />{{ this.stay.reviews[0].rate.Value }}
          </div>
          <div class="reviews">({{ this.stay.reviews.length }} reviews)</div>
        </div>
        <div>
          <div class="checking">
            <div class="check-in">
              <div class="category-stay-label">CHECK-IN</div>
              <date-picker v-if="currentTrip" :tripdate="tripDates" />
              <date-picker v-else />
            </div>
            <div class="check-out">
              <div class="category-stay-label">CHECK-OUT</div>
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
        <div class="charged">You won't be charged yet</div>
        <div class="priceing">
          <div class="underline">
            ${{ this.stay.price }} x {{ nightsCount }} nights
          </div>
          <div>
            ${{ Number(this.stay.price * nightsCount).toLocaleString() }}
          </div>
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
            ${{
              Number(this.stay.price * nightsCount + 50 + 100).toLocaleString()
            }}
          </div>
        </div>
      </div>
      <div class="report-stay">
        <img :src="require(`@/assets/imgs/branding/Capture.png`)" />
        <span class="report-text">Report this listing</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handlingScroll);
  },
  methods: {
    handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos;
    },
  },
  computed: {
    determinePos() {
      if (this.scrollBar < 580) return { position: "relative" };
      else if (this.scrollBar >= 580 && this.scrollBar <= 1200) {
        return { "margin-top": this.scrollBar - 580 + "px" };
      } else return { "margin-top": 640 + "px" };
    },
  },
};
</script>

<style>
</style>