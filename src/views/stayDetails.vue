<template>
  <div class="stay-app">
    <div>
      {{ this.stay.name }}
    </div>
    <div class="imgs-layout">
        <img class="img1" :src="require(`@/assets/${this.stay.imgUrls[4]}`)" />
        <img  class="img2" :src="require(`@/assets/${this.stay.imgUrls[1]}`)" />
        <img class="img3" :src="require(`@/assets/${this.stay.imgUrls[3]}`)" />
        <img class="img4" :src="require(`@/assets/${this.stay.imgUrls[4]}`)" />
        <img class="img5" :src="require(`@/assets/${this.stay.imgUrls[3]}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "stay-details",
  data() {
    return {
      stay: {
        id: "10006546",
        name: "Ribeira Charming Duplex",
        imgUrls: [
          "imgs/1.jpg",
          "imgs/2.jpg",
          "imgs/3.jpg",
          "imgs/4.jpg",
          "imgs/5.jpg",
          "imgs/6.jpg",
        ],
        price: 80.0,
        summary:
          "Fantastic duplex apartment with three bedrooms, located in...",
        propertyType: "House",
        TypeOfPlace: "Entire Place",
        HouseRules: ["Pets Allowed", "Children Allowed"],
        accommodates: 8,
        beds: 1,
        bedrooms: 2,
        bath: 1,
        amenities: ["TV", "Wifi"],
        host: {
          _id: "51399391",
          fullName: "Davit Pok",
          imgUrl: "https://x.com/pic.jpg",
        },
        loc: {
          country: "Portugal",
          countryCode: "PT",
          address: "Porto, Portugal",
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          //*all reviews are pushed here
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullName: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
      },
    };
  },
  //   created() {
  //     this.$store.dispatch({ type: "loadStay" });
  //   },
  computed: {
    // stayForDisplay() {
    //   return this.stay;
    // },
  },
};
</script>
