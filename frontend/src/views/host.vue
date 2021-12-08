<template>
  <div class="host-view">
    <div class="main-area">
      <div class="menu-bar">
        <div>
          <button class="airbnb-medium menu-bar-button" @click="showmain" >
            <span class="spacing-20px-right">+</span>Add Stay
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button" @click="showStatus">
            <span class="spacing-20px-right">+</span>My Stays
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button" @click="showOrders">
            <span class="spacing-20px-right">+</span>Orders
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button" @click="showRates">
            <span class="spacing-20px-right">+</span>Rates
          </button>
        </div>
        <div></div>
      </div>
      <div class="display-bar airbnb">
        <div class="dashboard-header">
          <div >
            <div class="airbnb spacing-25px">Total Rate</div>
            <div class="flex-center space-bettwen">
              <div>
                <div class="flex-center">
                  <div class="spacing-10px-right">
                    <img
                      class="star center-5px" src="../assets/imgs/icons/star.jpg"/>
                  </div>
                  <div class="money">0</div>
                </div>
              </div>
              <div class="center-5px airbnb-medium">5%</div>
            </div>
          </div>
          <div>
            <div class="airbnb spacing-25px">monthly earning</div>
            <div class="flex-center">
              <div class="money spacing-10px-right">$</div>
              <div class="money">0</div>
            </div>
          </div>
          <div>
            <div class="airbnb spacing-25px">Orders</div>
          </div>
          <div>
            <div class="airbnb spacing-25px">Active Guests</div>
          </div>
        </div>
        <div class="creating-stay-layout">
          <div v-if="main">
            <input class="stay-name-host" type="text" placeholder="stay name" />
            <div class="flex-center">
              <div class="spacing-10px-right">
                <img class="star center" src="../assets/imgs/icons/star.jpg" />
              </div>
              <div class="airbnb spacing-5px-right">
                New (0 Reviews) • Address:
              </div>

              <div>
                <input
                  class="stay-address-host"
                  type="text"
                  placeholder="stay address"
                />
              </div>
            </div>
            <div class="imgs-layout-host marging-bottom-25">
              <div class="img1-host gray">
                <label>
                     <img-upload @onSaveImg="saveImg"></img-upload>
                     <section class="img-list">
                       <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt="">
                     </section>
                  <!-- <input type="file" id="myFile" name="filename" hidden/> -->
                     <!-- <img-upload @onSaveImg="saveImg"></img-upload> -->
                  <!-- <h3 class="h3-center">Upload Image</h3> -->
                  </label>
              </div>
              <div class="row1">
                  <div class="img2-host gray ">
                    <label>
                     <img-upload @onSaveImg="saveImg"></img-upload>
                     <section class="img-list">
                       <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt="">
                     </section>
                  </label>
                  </div>
                  <div class="img3-host gray">
                    <label>
                     <img-upload @onSaveImg="saveImg"></img-upload>
                     <section class="img-list">
                       <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt="">
                     </section>
                  </label>
                  </div>
              </div>
              <div class="second-row">
                <div class="img4-host gray">
                   <label>
                     <img-upload @onSaveImg="saveImg"></img-upload>
                     <section class="img-list">
                       <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt="">
                     </section>
                  </label>
                </div>
                <div class="img5-host gray">
                  <label>
                     <img-upload @onSaveImg="saveImg"></img-upload>
                     <section class="img-list">
                       <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt="">
                     </section>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex-center airbnb space-bettwen">
              <div class="flex-center airbnb border-bottom width-60">
                <div class="spacing-10px-right center-5px">Capacity:</div>
                <div class="spacing-10px-right center-5px">
                  <input class="stay-capacity-host" type="number" />
                </div>
                <div class="spacing-10px-right center-5px">• StayType:</div>
                <div class="spacing-10px-right center-5px">
                  <select name="stayType" class="stay-typeof-select">
                    <option value="Entire Place">Entire Place</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Shared Room">Shared Room</option>
                    <option value="Hotel Room">Hotel Room</option>
                  </select>
                </div>
                <div class="spacing-10px-right center-5px">• PropertyType:</div>
                <div class="spacing-120px-right center-5px">
                  <select name="stayType" class="stay-typeof-select-host">
                    <option value="Loft">Loft</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Villa">Villa</option>
                    <option value="House">House</option>
                    <option value="Guesthouse">Guesthouse</option>
                  </select>
                </div>
                <div class="spacing-10px-right">
                  <img class="baner" src="../assets/imgs/icons/host.png" />
                </div>
              </div>
              <div class="flex-center airbnb">
                <div class="spacing-10px-right center-5px">Price: $</div>
                <div class="spacing-10px-right center-5px">
                  <input
                    class="stay-capacity-host airbnb-medium"
                    type="number"
                  />
                </div>
                <div class="spacing-10px-right center-5px">/night</div>
              </div>
            </div>
            <div class="border-bottom width-60">
              <div class="center-20">
                <div class="flex-center airbnb">
                  <div class="spacing-10px-right center-5px">
                    <img
                      class="icons"
                      src="../assets/imgs/icons/home.png"
                      alt=""
                    />
                  </div>
                  <div class="spacing-10px-right center-5px">
                    <h3>private room</h3>
                    <h4>You'll have a private room to yourself.</h4>
                  </div>
                </div>
              </div>
              <div class="center-20">
                <div class="flex-center airbnb">
                  <div class="spacing-10px-right center-5px">
                    <img
                      class="icons"
                      src="../assets/imgs/icons/home.png"
                      alt=""
                    />
                  </div>
                  <div class="spacing-10px-right center-5px">
                    <h3>House rules</h3>
                    <h4>
                      This place isn’t suitable for children under 12 and the
                      host doesn’t allow pets.
                    </h4>
                  </div>
                </div>
              </div>
              <div class="center-20">
                <div class="flex-center airbnb">
                  <div class="spacing-10px-right center-5px">
                    <img
                      class="icons"
                      src="../assets/imgs/icons/home.png"
                      alt=""
                    />
                  </div>
                  <div class="spacing-10px-right center-5px">
                    <h3>tal is a Superhost</h3>
                    <h4>
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </h4>
                  </div>
                </div>
              </div>
              <div class="center-20">
                <div class="flex-center airbnb">
                  <div class="spacing-10px-right center-5px">
                    <img
                      class="icons"
                      src="../assets/imgs/icons/home.png"
                      alt=""
                    />
                  </div>
                  <div class="spacing-10px-right center-5px">
                    <h3>Wifi</h3>
                    <h4>Guests often search for this popular amenity.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-bottom center-20 width-60">
              <h3>description</h3>
              <textarea class="description" type="text"></textarea>
            </div>
            <div class="center-20 width-60">
              <h3>Amenities</h3>
              <div class="flex-row space-bettwen">
                <div class="flex-column">
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>gym</span>
                  </div>
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Pool</span>
                  </div>
                  <div>
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>TV</span>
                  </div>
                </div>
                <div class="flex-column space-bettwen">
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Wifi</span>
                  </div>
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Free cancellation</span>
                  </div>
                  <div>
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Kitchen</span>
                  </div>
                </div>
                <div class="flex-column space-bettwen">
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Air conditaning</span>
                  </div>
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Self check-in</span>
                  </div>
                  <div>
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Free parking</span>
                  </div>
                </div>
                <div class="flex-column space-bettwen">
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Washer</span>
                  </div>
                  <div class="spacing-15px">
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Dryer</span>
                  </div>
                  <div>
                    <input
                      class="center-5px spacing-10px-right"
                      type="checkbox"
                    />
                    <span>Iron</span>
                  </div>
                </div>
              </div>
              <button class="add-stay-save-btn">Save</button>
            </div>
            
          </div>
          <div class="host-stays airbnb-medium font-size-19px" v-if="status">
            <div class="flex-row space-evenly border-bottom">
              <div>Name</div>
              <div>Address</div>
              <div>Price</div>
              <div>Actions</div>
            </div>
            <!-- here needs to render user data for showing data -->
            <div></div>
          </div>
          <div class="host-stays airbnb-medium font-size-19px" v-if="orders">
            <div class="flex-row space-evenly border-bottom">
              <div>Guest Name</div>
              <div>Check in</div>
              <div>Check out</div>
              <div>Status</div>
              <div>Price</div>
              <div>Actions</div>
            </div>
            <!-- here needs to render user data for showing data -->
            <div></div>
          </div>
          <!-- here we render reviews -->
          <div v-if="rates">sdsdsdsds</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { uploadImg } from '@/services/imgUpload.service.js'
import imgUpload from '@/cmps/img-upload'

export default {
  data() {
    return {
      main: true,
      status:false,
      orders:false,
      rates:false,
      imgUrls: []
    };
  },
  components: {
  imgUpload
},
  methods:{
    showmain(){
      this.main=true;
       this.status=false;
        this.orders=false;
         this.rates=false;
    },
    showStatus(){
     this.main=false;
       this.status=true;
        this.orders=false;
         this.rates=false;
    },
    showOrders(){
     this.main=false;
       this.status=false;
        this.orders=true;
         this.rates=false;
    },
    showRates(){
      this.main=false;
       this.status=false;
        this.orders=false;
         this.rates=true;
    },
      saveImg(imgUrl) {
    this.imgUrls.push(imgUrl)
    }
    // async onUploadImg(ev) {
    //     this.isLoading = true
    //     let res = await uploadImg(ev);
    //     // console.log(res);
    //     this.$emit('onSaveImg', res.url)
    //     this.isLoading = false
    // }
  }
};
</script>

<style>
</style>