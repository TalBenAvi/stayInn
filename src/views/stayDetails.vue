<template>
  <div class="stay-details">
      <div class="name">{{ this.stay.name }}</div>
      <div class="location-name">
        <!-- because yaniv is the best! -->
        <img class="star" src="../assets/imgs/icons/star.jpg" />
        {{ this.stay.reviews[0].rate }}({{ this.stay.reviews.length }} reviews)
        · {{ this.stay.loc.address }},{{ this.stay.loc.country }}
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
          <div class="head-flex">
        <div class="stay-info-heder">
        <div class="minimal-details">{{ this.stay.name }}</div>
        <div class="location-space">
          {{ this.stay.accommodates }} guests ·
          {{ this.stay.bedrooms }} bedrooms · {{ this.stay.beds }} beds ·
          {{ this.stay.bath }} baths
        </div>
       </div>
          <div><img class="baner" src="../assets/imgs/icons/host.png" /></div>
       </div>
         <div class="stay-info-desc">
            <div>
              <div class="short-exmple"><img class="icon" src="../assets/imgs/icons/home.png" />Entire home</div>
              <div class="exsplnation">You’ll have the house to yourself.</div>
            </div>
            <div>
              <div class="short-exmple"><img class="icon" src="../assets/imgs/icons/location.png" />Great location</div>
              <div class="exsplnation">90% of recent guests gave the location a 5-star rating.</div>
            </div>
            <div>
              <div class="short-exmple"><img class="icon" src="../assets/imgs/icons/key.png" />Great check-in experience</div>
              <div class="exsplnation">90% of recent guests gave the check-in process a 5-star rating.</div>
            </div>
            <div>
              <div class="short-exmple"><img class="icon" src="../assets/imgs/icons/pool.png" />Pool</div>
              <div class="exsplnation">Guests often search for this popular amenity</div>
            </div>
         </div>
        <div class="stay-info-desc"><div class="padding">{{this.stay.summary}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique, suscipit ea recusandae facilis laborum necessitatibus veniam id voluptas eligendi at praesentium distinctio nam perspiciatis, cupiditate et dolores. Praesentium, quaerat.
        Expedita neque ipsum quas culpa veritatis ipsam, quisquam, dolores illo fuga repellat maxime unde officia incidunt sint accusamus exercitationem. Deserunt maxime soluta veniam qui non quo distinctio. Sit, tenetur. Non?
        Rerum rem omnis eaque commodi aliquid, mollitia alias sit deserunt animi minus vel error quisquam excee voluptatum dicta obcaecati, rem minus iusto, maiores corrupti dolorum et.
        Sint vel ratione omnis doloremias nam. Officia, assumenda expedita earum commodi qui aut quas sed est dicta ullam eius debitis fugiat culpa sunt, obcaecati, ipsum sapiente molestias a id ratione!</div> </div> 
           <div class="stay-info-desc">
             <h3>Where you'll sleep</h3>
             <div class="bed-card">
               <div><img class="icon-bed" src="../assets/imgs/icons/king-size-bed.png" /></div>
               <div class="airbnb-medium spacing-15px">Bedroom</div>
               <div class="airbnb">1 double bed</div>
               </div>
               </div>
          <div class="stay-info-desc">
            <h3>What this place offers</h3>
            <div class="offeres-layout">
            <div class="houseRules-layout">
            <div class="spacing">{{this.stay.HouseRules[1]}}</div>
            <div class="spacing">{{this.stay.HouseRules[0]}}</div>
             <div><img class="star" src="../assets/imgs/icons/no-smoking.png" /> {{this.stay.HouseRules[2]}}</div>
            </div>
            <div class="amenities-layout">
            <div class="spacing"><img class="star" src="../assets/imgs/icons/Wifi.png" /> {{this.stay.amenities[1]}}</div>
            <div class="spacing"><img class="star" src="../assets/imgs/icons/TV.png" /> {{this.stay.amenities[0]}}</div>
            <div class="spacing-44px"><img class="star" src="../assets/imgs/icons/pool.png" /> {{this.stay.amenities[2]}}</div>
            </div>
            </div>
            <div class="padding-50px"><button class="show-more-amenities airbnb-medium">show all 6 amenities</button></div>
            </div>
            <div class="stay-info-desc">{{this.stay.summary}}</div>
      </div>
      <div class="stay-reserve">
        <div class="price-reviews">
          <div class="stay-price">${{ this.stay.price }}</div>
          <div class="night">/ night</div>
          <div class="rate"><img class="star" src="../assets/imgs/icons/star.jpg" />{{ this.stay.reviews[0].rate }}</div>
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
      <div class="charged">You won't be charged yet</div>
      <div class="priceing">
      <div class="underline">${{ this.stay.price }}x 7 nights</div>
      <div>${{ this.stay.price*7 }}</div> 
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
      <div>Total</div>
      <div>$710</div> 
      </div>
      <!-- <div class="report-stay">
       <img :src="require(`@/assets/imgs/branding/Capture.png`)">   <span class="report-text">Report this listing</span>
      </div> -->
      </div>
      
    </div>
    <div class="reviews-display">
      {{ this.stay.reviews[0].txt }}
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
