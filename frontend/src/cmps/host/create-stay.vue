<template>
  <section>
    <input class="stay-name-host" type="text" placeholder="stay name" />
    <div class="flex-center">
      <div class="spacing-10px-right">
        <img class="star center" src="../../assets/imgs/icons/star.jpg" />
      </div>
      <div class="airbnb spacing-5px-right">New (0 Reviews) • Address:</div>

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
          <img-upload @onSaveImg="saveImg1"></img-upload>
          <section class="img-list">
            <img
              class="image-upload1"
              :style="{ height: 100 + '%' }"
              v-for="imgUrl1 in imgUrls1"
              :key="imgUrl1"
              :src="imgUrl1"
              alt=""
            />
          </section>
          <!-- <input type="file" id="myFile" name="filename" hidden/> -->
          <!-- <img-upload @onSaveImg="saveImg"></img-upload> -->
          <!-- <h3 class="h3-center">Upload Image</h3> -->
        </label>
      </div>
      <div class="row1">
        <div class="img2-host gray">
          <label>
            <img-upload @onSaveImg="saveImg2"></img-upload>
            <section class="img-list">
              <img
                class="image-upload2"
                :style="{ height: 100 + '%' }"
                v-for="imgUrl2 in imgUrls2"
                :key="imgUrl2"
                :src="imgUrl2"
                alt=""
              />
            </section>
          </label>
        </div>
        <div class="img3-host gray">
          <label>
            <img-upload @onSaveImg="saveImg"></img-upload>
            <section class="img-list">
              <!-- <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt=""> -->
            </section>
          </label>
        </div>
      </div>
      <div class="second-row">
        <div class="img4-host gray">
          <label>
            <img-upload @onSaveImg="saveImg"></img-upload>
            <section class="img-list">
              <!-- <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt=""> -->
            </section>
          </label>
        </div>
        <div class="img5-host gray">
          <label>
            <img-upload @onSaveImg="saveImg"></img-upload>
            <section class="img-list">
              <!-- <img :style="{height:100+'%'}" v-for="imgUrl in imgUrls" :key="imgUrl" :src="imgUrl" alt=""> -->
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
          <img class="baner" src="../../assets/imgs/icons/host.png" />
        </div>
      </div>
      <div class="flex-center airbnb">
        <div class="spacing-10px-right center-5px">Price: $</div>
        <div class="spacing-10px-right center-5px">
          <input class="stay-capacity-host airbnb-medium" type="number" />
        </div>
        <div class="spacing-10px-right center-5px">/night</div>
      </div>
    </div>
    <div class="border-bottom width-60">
      <div class="center-20">
        <div class="flex-center airbnb">
          <div class="spacing-10px-right center-5px">
            <img class="icons" src="../../assets/imgs/icons/home.png" alt="" />
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
            <img class="icons" src="../../assets/imgs/icons/home.png" alt="" />
          </div>
          <div class="spacing-10px-right center-5px">
            <h3>House rules</h3>
            <h4>
              This place isn’t suitable for children under 12 and the host
              doesn’t allow pets.
            </h4>
          </div>
        </div>
      </div>
      <div class="center-20">
        <div class="flex-center airbnb">
          <div class="spacing-10px-right center-5px">
            <img class="icons" src="../../assets/imgs/icons/home.png" alt="" />
          </div>
          <div class="spacing-10px-right center-5px">
            <h3>tal is a Superhost</h3>
            <h4>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </h4>
          </div>
        </div>
      </div>
      <div class="center-20">
        <div class="flex-center airbnb">
          <div class="spacing-10px-right center-5px">
            <img class="icons" src="../../assets/imgs/icons/home.png" alt="" />
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
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>gym</span>
          </div>
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Pool</span>
          </div>
          <div>
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>TV</span>
          </div>
        </div>
        <div class="flex-column space-bettwen">
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Wifi</span>
          </div>
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Free cancellation</span>
          </div>
          <div>
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Kitchen</span>
          </div>
        </div>
        <div class="flex-column space-bettwen">
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Air conditaning</span>
          </div>
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Self check-in</span>
          </div>
          <div>
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Free parking</span>
          </div>
        </div>
        <div class="flex-column space-bettwen">
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Washer</span>
          </div>
          <div class="spacing-15px">
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Dryer</span>
          </div>
          <div>
            <input class="center-5px spacing-10px-right" type="checkbox" />
            <span>Iron</span>
          </div>
        </div>
      </div>
      <button class="add-stay-save-btn">Save</button>
    </div>
  </section>
</template>

<script>
import imgUpload from "@/cmps/img-upload";

export default {
  components: {
    imgUpload,
  },
  data() {
    return {
      imgUrls: [],
    };
  },
  methods: {
    saveImg(imgUrl) {
      this.imgUrls.push(imgUrl);
    }

    // async onUploadImg(ev) {
    //     this.isLoading = true
    //     let res = await uploadImg(ev);
    //     // console.log(res);
    //     this.$emit('onSaveImg', res.url)
    //     this.isLoading = false
    // }
  },
};
</script>

<style>
</style>