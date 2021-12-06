<template>
  <div class="host-view">
    <div class="main-area">
      <div class="menu-bar">
        <div>
          <button class="airbnb-medium menu-bar-button">
            <span class="spacing-20px-right">+</span>Add Stay
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button">
            <span class="spacing-20px-right">+</span>My Stays
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button">
            <span class="spacing-20px-right">+</span>Orders
          </button>
        </div>
        <div>
          <button class="airbnb-medium menu-bar-button">
            <span class="spacing-20px-right">+</span>Rates
          </button>
        </div>
        <div></div>
      </div>
      <div class="display-bar">
        <div class="dashboard-header">
          <div>
            <div class="airbnb spacing-25px">Total Rate</div>
            <div class="flex-center space-bettwen">
              <div>
                <div class="flex-center">
                  <div class="spacing-10px-right">
                    <img
                      class="star center-5px"
                      src="../assets/imgs/icons/star.jpg"
                    />
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
        <div class="editing-layout">
          <input class="stay-name" type="text" placeholder="stay name" />
          <div class="flex-center">
            <div class="spacing-10px-right">
              <img class="star center" src="../assets/imgs/icons/star.jpg" />
            </div>
            <div class="airbnb spacing-5px-right">
              New (0 Reviews) • Address:
            </div>

            <div>
              <input
                class="stay-address"
                type="text"
                placeholder="stay address"
              />
            </div>
          </div>
          <div class="imgs-layout-host marging-bottom-25">
            <div class="img1 gray">
              <form action="/action_page.php">
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  placeholder="Upload Image"
                />
                <input type="submit" />
              </form>
            </div>
            <div class="row1">
              <div>
                <div class="img2-host gray">
                  <form action="/action_page.php">
                    <input type="file" id="myFile" name="filename" />
                    <input type="submit" />
                  </form>
                </div>
                <div class="img3-host gray">
                  <form action="/action_page.php">
                    <input type="file" id="myFile" name="filename" />
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
            <div class="second-row">
              <div class="img5 gray">
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                  <input type="submit" />
                </form>
              </div>
              <div class="img5 gray">
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
          <div class="flex-center airbnb space-bettwen">
            <div class="flex-center airbnb border-bottom">
              <div class="spacing-10px-right center-5px">Capacity:</div>
              <div class="spacing-10px-right center-5px">
                <input class="stay-capacity" type="number" />
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
                <select name="stayType" class="stay-typeof-select">
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
                <input class="stay-capacity airbnb-medium" type="number" />
              </div>
              <div class="spacing-10px-right center-5px">/night</div>
            </div>
          </div>
          <div class="border bottom center-20">
            <div class="flex-center airbnb">
              <div class="spacing-10px-right center-5px">
                <img class="icons" src="../assets/imgs/icons/home.png" alt="" />
              </div>
              <div class="spacing-10px-right center-5px">
                <h3>private room</h3>
                <h4>You'll have a private room to yourself.</h4>
              </div>
            </div>
          </div>
          <div class="border bottom center-20">
            <div class="flex-center airbnb">
              <div class="spacing-10px-right center-5px">
                <img class="icons" src="../assets/imgs/icons/home.png" alt="" />
              </div>
              <div class="spacing-10px-right center-5px">
                <h3>House rules</h3>
                <h4>This place isn’t suitable for children under 12 and the host doesn’t allow pets.</h4>
              </div>
            </div>
          </div>
          <div class="border bottom center-20">
            <div class="flex-center airbnb">
              <div class="spacing-10px-right center-5px">
                <img class="icons" src="../assets/imgs/icons/home.png" alt="" />
              </div>
              <div class="spacing-10px-right center-5px">
                <h3>tal is a Superhost</h3>
                <h4>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</h4>
              </div>
            </div>
          </div>
          <div class="border bottom center-20">
            <div class="flex-center airbnb">
              <div class="spacing-10px-right center-5px">
                <img class="icons" src="../assets/imgs/icons/home.png" alt="" />
              </div>
              <div class="spacing-10px-right center-5px">
                <h3>Wifi</h3>
                <h4>Guests often search for this popular amenity.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>