<template>
  <div>
    <v-window v-model="onboarding">
      <v-window-item v-for="item in image" :key="`card-${item}`">
        <v-col>
          <v-card @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide" style="height: 100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img style="height: 100%" :src="item">
                <v-card-actions style="height: 100%" class="justify-space-between">
                  <v-btn @mouseenter="colorIcon" @mouseleave="colorIcon" style="
                      height: 100%;
                      width: 15%;
                      background-color: transparent;
                      box-shadow: none;
                      border: none;
                      color: transparent;
                    " disable-ripple text @click="prev">
                    <v-icon :color="color" size="55">mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-item-group style="height: 100%" v-model="onboarding" mandatory>
                    <v-item style="top: 90%" v-for="item in image" :key="`card-${item}`" v-slot="{ active, toggle }">
                      <v-btn class="mx-1" :input-value="active" icon @click="toggle" disable-ripple style="
                          background-color: none;
                          box-shadow: none;
                          border: none;
                          color: transparent;
                        ">
                        <v-icon color="#fff" size="55">mdi-minus</v-icon>
                      </v-btn>
                    </v-item>
                  </v-item-group>
                  <v-btn @mouseenter="colorIcon" @mouseleave="colorIcon" style="
                      height: 100%;
                      width: 15%;
                      background-color: transparent;
                      box-shadow: none;
                      border: none;
                      color: transparent;
                    " disable-ripple text @click="next(item)">
                    <v-icon size="55" :color="color">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-img>
            </v-row>
          </v-card>
        </v-col>
      </v-window-item>
    </v-window>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-col>
            <v-img style="height: 100%; width: 100%" src="https://iblaos.com/iblaos/image/default/mb_banking.PNG" />
          </v-col>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat class="text-center d-flex align-center" style="height: 100%; text-align: center">
            <v-card-text class="px-0">
              <v-card-text class="px-0" style="width: 100%; top: 20%">
                <h1 class="font_display title_color">
                  IB COOL MOBILE BANKING APPLICATION
                </h1>
                <br />
                <v-card-text class="pa-0" style="color: #735f5f">
                  360 view of customer relationship
                </v-card-text>
                <p>
                  Customers are able to view all their relationships with the
                  bank, may it be, savings accounts, current accounts,
                  Þxeddeposits and loans.
                </p>
                <v-btn @mouseenter="setOutlined('button1')" @mouseleave="detOutlined(true)" color="#FFc107"
                  :outlined="show === 'button1' ? false : true" :style="{ boxShadow: show ? 'none' : '0' }">
                  See More
                </v-btn>
              </v-card-text>
              <v-btn class="ma-1" style="width: 126px; height: 40px">
                <v-img src="https://iblaos.com/iblaos/image/personal/ib_cool/Appstore.png"
                  style="width: 130px; height: 40px" />
              </v-btn>
              <v-btn class="ma-1" style="width: 126px; height: 40px">
                <v-img src="https://iblaos.com/iblaos/image/personal/ib_cool/Google_Play.png"
                  style="width: 132px; height: 40px; object-fit: cover" />
              </v-btn>
              <v-btn class="ma-1" style="width: 126px; height: 40px">
                <v-img src="https://iblaos.com/iblaos/image/personal/ib_cool/AppGallery.png"
                  style="width: 130px; height: 40px; object-fit: cover" />
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-img src="https://iblaos.com/iblaos/image/default/visa_banner.jpg" />
    <v-container>
      <v-card-text class="text-center">
        <p>Say hello to your new Indochina Bank Visa card!</p>
        <p>
          Say hello to your new Indochina Bank Visa card! The Indochina Bank
          Visa card offers you unmatched privileges and rewards as you travel
          the globe. With acceptance at millions of merchants worldwide and the
          accessibility for local and overseas ATM cash withdrawals and
          advances, it's the seamless way to pay anywhere.
        </p>
        <p>
          We hope that you enjoy your shopping, dining and leisure experiences
          with this card.
        </p>
        <div class="py-2">
          <v-btn @mouseenter="setOutlined('button2')" @mouseleave="detOutlined(true)" color="#FFc107"
            :outlined="show === 'button2' ? false : true" :style="{ boxShadow: show ? 'none' : '0' }">
            See More
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text class="py-0">
        <v-row>
          <v-col>
            <v-img src="https://iblaos.com/iblaos/image/personal/cards/cards.png" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <v-img style="100%" gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
      src="https://sgp1.digitaloceanspaces.com/adaybulletin/2017/12/1200-x-400.jpg">
      <v-container style="height: 100%" class="py-center">
        <v-row justify="center" align="center" class="ma-0" style="height: 100%">
          <v-col cols="12" sm="6">
            <v-card-text>
              <v-card-title style="color: rgb(255, 255, 255)">
                PREMIER BANKING
              </v-card-title>
              <v-card-text>
                <p style="color: aliceblue">
                  As the pioneer in the premier banking service in Lao PDR,
                  Indochina Bank's VIP Premier Banking Service is one of the
                  Þnest luxury banking experience that if offered to all high
                  net worth customers that comes with superior service coupled
                  with specially tailored amenities.
                </p>
                <v-btn @mouseenter="setOutlined('button3')" @mouseleave="detOutlined(true)" color="#FFc107"
                  :outlined="show === 'button3' ? false : true" :style="{ boxShadow: show ? 'none' : '0' }">
                  See More
                </v-btn>
              </v-card-text>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto" align="center" justify="center">
            <v-window v-model="onboarding1" justify="center">
              <v-window-item v-for="item in image1" :key="`card-${item}`">
                <v-col>
                  <v-card style="height: 100%; border-radius: 5%" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide"
                    color="grey">
                    <v-row>
                      <v-img style="height: 100%; width: 100%; border-radius: 4%" :src="item" />
                    </v-row>
                  </v-card>
                </v-col>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <!-- <div style="position: absolute;"></div> -->
        </v-col>
    
        <v-col cols="12" sm="6">
        </v-col>
      </v-row>
    </v-img>

    <v-card-text class="px-0">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }" open-delay="50">
              <v-card outlined :elevation="hover ? 14 : 0" min-height="300px" max-width="100%" class="pb-2">
                <v-img style="width: 100%; height: auto"
                  src="https://iblaos.com/iblaos/image/news/20230403144915_2.jpg" />
                <v-card-text>
                  <v-card-title class="title_color pa-0">
                    Payengxa Lor Official Appointment of IB Brand Ambassador
                  </v-card-title>
                  <v-btn class="my-2" @mouseenter="setOutlined('button4')" @mouseleave="detOutlined(true)" color="#FFc107"
                    :outlined="show === 'button4' ? false : true" :style="{ boxShadow: show ? 'none' : '0' }">
                    See More
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card-title class="pa-0" style="color: #ff3333">
              Exchange rate
            </v-card-title>
            <v-card-text class="px-0" style="color: #aca8a8">
              Date: 06/11/2023
            </v-card-text>
            <v-card outlined>
              <v-simple-table max-height="450px">
                <template v-slot:default>
                  <thead>
                    <tr style="background-color: #ff3333">
                      <th style="color: #fff" class="text-left">Currency</th>
                      <th style="color: #fff" class="text-center">Buy</th>
                      <th style="color: #fff" class="text-center">Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in desserts" :key="item.Currency" :style="{
                      backgroundColor:
                        index % 2 == 0 ? 'rgb(242, 242, 242)' : '#ffffff',
                    }">
                      <td class="text-left">
                        <v-row>
                          <v-col cols="6" align="center">
                            <v-card-actions>
                              <div style="height: 35px; width: 35px">
                                <v-img style="
                                    border-radius: 50%;
                                    height: 100%;
                                    width: 100%;
                                  " :src="item.image" />
                              </div>
                              <div class="pl-4">
                                {{ item.Currency }}
                              </div>
                            </v-card-actions>
                          </v-col>
                          <v-col cols="6"></v-col>
                        </v-row>
                      </td>
                      <td class="text-center" style="color: black;">{{ item.Buy }}.00</td>
                      <td class="text-center">{{ item.Sell }}.00</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </div>
</template>
<script>
export default {
  Currency: "DefaultLayout",
  data() {
    return {
      show: true,
      onboarding: 0,
      onboarding1: 0,
      color: "#e5e5e5",
      image: [
        "https://iblaos.com/iblaos/image/slide/20230912154356_2.jpg",
        "https://iblaos.com/iblaos/image/slide/20230913144236_2.jpg",
        "https://iblaos.com/iblaos/image/slide/20230913145105_2.jpg",
        "https://iblaos.com/iblaos/image/slide/20230913144400_2.jpg",
        "https://iblaos.com/iblaos/image/slide/20220818163616_2.jpg",
      ],
      image1: [
        "https://iblaos.com/iblaos/image/default/VIP_slide-1.jpg",
        "https://iblaos.com/iblaos/image/default/VIP_slide-2.jpg",
        "https://iblaos.com/iblaos/image/default/Premier_slide_1.jpg",
        "https://iblaos.com/iblaos/image/default/Premier_slide_2.jpg",
        "https://iblaos.com/iblaos/image/default/Premier_slide_3.jpg",
        "https://iblaos.com/iblaos/image/default/Premier_slide_4.jpg",
        "https://iblaos.com/iblaos/image/default/Premier_slide_5.jpg",
      ],
      desserts: [
        {
          Currency: "USD",
          Buy: "20,680",
          Sell: "20.812",
          image: "https://iblaos.com/iblaos/image/rate/usd.png",
        },
        {
          Currency: "TBM",
          Sell: 202,
          Buy: 237,
          image: "https://iblaos.com/iblaos/image/rate/thb.png",
        },
        {
          Currency: "GBP",
          Sell: 202,
          Buy: 262,
          image: "https://iblaos.com/iblaos/image/rate/gbp.png",
        },
        {
          Currency: "JPY",
          Sell: 202,
          Buy: 262,
          image: "https://iblaos.com/iblaos/image/rate/gbp.png",
        },
        {
          Currency: "AUD",
          Sell: 202,
          Buy: 262,
          image: "https://iblaos.com/iblaos/image/rate/aud.png",
        },
        {
          Currency: "CAD",
          Sell: 202,
          Buy: 200,
          image: "https://iblaos.com/iblaos/image/rate/cad.png",
        },
      ],
    };
  },
  computed: {
    length() {
      return this.image.length;
    },
    length1() {
      return this.image1.length1;
    },
  },
    mounted() {
      // Start automatic image slide when the component is mounted
      this.startAutoSlide();
    },
    beforeDestroy() {
      // Stop automatic image slide when the component is destroyed
      this.stopAutoSlide();
    },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    next1() {
      this.onboarding1 =
        this.onboarding1 + 1 === this.length1 ? 0 : this.onboarding1 + 1;
    },
    prev1() {
      this.onboarding1 =
        this.onboarding1 - 1 < 0 ? this.length1 - 1 : this.onboarding1 - 1;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.next();
        this.next1();
      }, 4500); // Slide every 4 seconds (4000 milliseconds)
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval, this.autoSlideInterval1);
    },

    setOutlined(value) {
      this.show = value;
    },
    detOutlined(value) {
      this.show = value;
    },
    colorIcon() {
      if (this.color !== "#ffffff") {
        this.color = "#ffffff";
      } else {
        this.color = "#e5e5e5";
      }
    },
  },
};
</script>
<style scoped>
.color_background_btn {
  background-color: #ff3333;
  color: #fff;
}

.font_display {
  font-family: "Inter", sans-serif;
}

.title_color {
  color: #ff3333;
}
</style>