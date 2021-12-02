<template>
  <div class="stay-details">
    <div class="location-details">
      <div class="name">{{ this.stay.name }}</div>
      <div class="location-name">
        {{ this.stay.reviews[0].rate }}({{ this.stay.reviews.length }} reviews)
        · {{ this.stay.loc.address }},{{ this.stay.loc.country }}
      </div>
    </div>
    <div v-if="stay" class="imgs-layout">
 
      <img class="img1" :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[5]}`)" />
      <div class="first-row">
        <img class="img2" :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[4]}`)" />
        <img class="img3" :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[0]}`)" />
      </div>
      <div class="second-row">
        <img class="img4" :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[2]}`)" />
        <img class="img5" :src="require(`@/assets/imgs/stays/${stay.initials}/${stay.imgUrls[1]}`)" />
      </div>
    </div>
    <div class="res-details-layout">
      <div class="stay-info">
        <div class="minimal-details">{{ this.stay.name }}</div>
        <div class="location-space">
          {{ this.stay.accommodates }} guests ·
          {{ this.stay.bedrooms }} bedrooms · {{ this.stay.beds }} beds ·
          {{ this.stay.bath }} baths
        </div>
      </div>
      <div class="stay-reserve">
        <div class="price-reviews">
          <div class="stay-price">${{ this.stay.price }}</div>
          <div class="night">/ night</div>
          <div class="rate">{{ this.stay.reviews[0].rate }}</div>
          <div class="reviews">({{ this.stay.reviews.length }} reviews)</div>
        </div>
        <div>
        <div class="checking">
          <div class="check-in">
            <div class="category-stay-label">CHECK-IN</div>
            <div class="add">Add date</div>
          </div>
          <div class="check-out">
            <div class="category-stay-label">CHECK-OUT</div>
            <div class="add">Add date</div>
          </div>
          <div class="guests-num">
              <div class="category-stay-label">GUESTS</div>
            <div class="add">1 guest</div>
            </div>
        </div>
        <div class="check-available" style="background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%); --mouse-x:81.7031; --mouse-y:0;">
            <span class="text-avilable">Check availability</span></div>
      </div>
      <div class="report-stay">
       <img :src="require(`@/assets/imgs/branding/Capture.png`)">   <span class="report-text">Report this listing</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      // testStay: {
      //   id: "10006546",
      //   name: "Ribeira Charming Duplex",
      //   imgUrls: [
      //     "imgs/1.jpg",
      //     "imgs/2.jpg",
      //     "imgs/3.jpg",
      //     "imgs/4.jpg",
      //     "imgs/5.jpg",
      //     "imgs/6.jpg",
      //   ],
      //   price: 80.0,
      //   summary:
      //     "Fantastic duplex apartment with three bedrooms, located in...",
      //   propertyType: "House",
      //   TypeOfPlace: "Entire Place",
      //   HouseRules: ["Pets Allowed", "Children Allowed"],
      //   accommodates: 8,
      //   beds: 4,
      //   bedrooms: 2,
      //   bath: 1,
      //   amenities: ["TV", "Wifi"],
      //   host: {
      //     _id: "51399391",
      //     fullName: "Davit Pok",
      //     imgUrl: "https://x.com/pic.jpg",
      //   },
      //   loc: {
      //     country: "Portugal",
      //     countryCode: "PT",
      //     address: "Porto",
      //     lat: -8.61308,
      //     lng: 41.1413,
      //   },
      //   reviews: [
      //     //*all reviews are pushed here
      //     {
      //       id: "madeId",
      //       txt: "Very helpful hosts. Cooked traditional...",
      //       rate: 4.93,
      //       by: {
      //         _id: "u102",
      //         fullName: "user2",
      //         imgUrl: "/img/img2.jpg",
      //       },
      //     },
      //   ],
      // },
    };
  },
  //   created() {
  //     this.$store.dispatch({ type: "loadStay" });
  //   },
  computed: {
    // stayForDisplay() {
    //   return this.stay;
    // },
  }, watch: {
        '$route.params.stayId': {
            async handler() {
              
                const { stayId } = this.$route.params;
                console.log(stayId)
                try {
                  var stay = await this.$store.dispatch({type: 'getStayById', stayId: stayId})
                  this.stay = stay
                  console.log(stay)
                } catch (err){
                  console.log('had error', err)
                  throw err;

                }
            },
            immediate: true
      }
  }
};
</script>
