<template>
  <main class="main">
    <section class="py-14 md:px-20 green-bg h-auto md:h-screen">
      <div
        class="w-10/12 m-auto flex flex-col justify-center items-center px-6"
      >
        <div class="mb-10 m-auto">
          <router-link to="/" class="md:w-36">
            <img src="@/assets/Group-mono.png" class="w-24" />
          </router-link>
        </div>

        <div>
          <p class="text-white text-center text-sm pb-6">
            Referral Bonus Program Suspended.
          </p>

          <div class="w-8/12 m-auto">
            <p class="text-white text-center text-xs font-light pb-4">
              The Sycamore referral program has been suspended effective May
              27th, 2022.
            </p>
            <p class="text-white text-center text-xs font-light pb-4">
              Referral codes used after this date will not qualify for a
              referral bonus.
            </p>
            <p class="text-white text-center text-xs font-light pb-4">
              You can enjoy the benefits Sycamore offers and carry out your
              everyday transactions seamlessly when you download the mobile App.
            </p>

            <p class="text-white text-center text-xs font-light pb-4">
              This is to allow us to improve the referral program in order to
              serve you more optimally. We will communicate with you when it's
              open again.
            </p>
          </div>
        </div>
        <!-- <div class="flex flex-col md:flex-row">
          <div
            class="md:flex-1 mb-14 text-center md:text-left text-white md:px-14"
          >
            <p class="pb-4 text-xxs md:text-xs leading-6">
              You have been referred to download the Sycamore App. <br />Please
              sign up using the following referral code
            </p>
            <div>
              <p
                class="text-center md:text-left text-xs md:text-sm font-medium mb-6"
              >
                Copy This Referral Code:
              </p>
              <div
                class="m-auto md:ml-0 bg-white rounded-xl p-4 flex justify-between items-center w-2/3"
              >
                <span
                  class="text-gray07 text-base md:text-lg font-medium"
                  id="tagname"
                  >{{ referralId }}</span
                >
                <span
                  class="flex text-white bg-primary1 p-3 rounded-md text-xs cursor-pointer"
                  @click="copyText(referralId)"
                >
                  <Copy class="mr-2" /> {{ buttonText }}
                </span>
              </div>
            </div>
          </div>
          <div class="md:flex-1 text-white text-xs md:ml-4">
            <p class="text-xxs md:text-xs leading-6 pb-4">
              <span class="mr-2">1</span>
              Download the Sycamore App on the app store.
            </p>
            <p class="text-xxs md:text-xs leading-6 pb-4">
              <span class="mr-2">2</span>
              Enter the referral code in the referral code option.
            </p>
            <p class="text-xxs md:text-xs leading-6 pb-4">
              <span class="mr-2">3</span>
              Validate your BVN
            </p>
            <p class="text-xxs md:text-xs leading-6 pb-4">
              <span class="mr-2">4</span>
              Fund your wallet with at least ₦1,000 and keep for 3 days
            </p>
            <p class="text-xxs md:text-xs leading-6 pb-4">
              <span class="mr-2">5</span>
              Get ₦200 reward, referrer gets ₦800
            </p>
            <p class="text-italics">Terms and conditions apply</p>
          </div>
        </div> -->
        <div class="mt-16">
          <p class="text-white text-center text-xs">
            Download the Sycamore app to sign up
          </p>
          <div class="flex mt-4 ">
            <a
              target="_blank"
              href="https://apps.apple.com/ng/app/sycamore-ng/id1592757960"
              class="mr-3 md:w-36"
            >
              <img src="../assets/appStore2.svg" class="md:w-40" alt="" />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ng.sycamore.app2"
              class="md:w-36"
            >
              <img src="../assets/playStore2.svg" class="md:w-40" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import { verifyReferral } from "@/api/referral";
// import Copy from "@/svg/Copy.vue";
// import appStore from "@/svg/Appstore.vue";
export default {
  components: {
    // Copy
    // appStore
  },

  data() {
    return {
      buttonText: "copy",
      referralId: "",
      isReferralValid: false,
      loadingStatus: false
    };
  },

  methods: {
    async copyText(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.buttonText = "copied";
      } catch ($e) {
        this.buttonText = "cannot copy";
      }
    }
    // getUserReferralId() {
    //   const { id } = this.$route.params;
    //   this.referralId = id;
    // },
    // async validateReferral() {
    //   try {
    //     this.loadingStatus = true;
    //     const { id } = this.$route.params;
    //     const response = await verifyReferral(id);
    //     this.loadingStatus = false;
    //     if (response.status === 200) {
    //       this.isReferralValid = response.data.data;
    //       if (!response.data.data) {
    //         this.$router.push({
    //           name: "NotFound"
    //         });
    //       }
    //     }
    //   } catch (err) {
    //     this.loadingStatus = false;
    //   }
    // }
  },
  mounted() {
    // this.getUserReferralId();
    // this.validateReferral();
  }
};
</script>

<style lang="scss">
/* not-found-section */

.green-bg {
  background-image: url("../assets/green-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.not-found-section {
  background-color: #fff;
}

.not-found-section-details h1 {
  font-size: 55px;
  color: #002d04;
  font-weight: 500;
  padding: 100px 0 20px 0;
  margin-top: 100px;
}

.not-found-section-details p {
  color: #667768;
  font-size: 14px;
  width: 85%;
  margin-top: 0;
}

.not-found-section-details .prev {
  margin-top: -5px;
  margin-bottom: 40px;
}

.not-found-section-details h1 span {
  color: #63c132;
}

.not-found-section-details .first-btn {
  background-color: #63c132;
  border: 1px solid #63c132;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.not-found-section-details .second-btn {
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #000;
  margin-left: 20px;
  font-weight: 300;
}

.not-found-section-details .second-btn a {
  color: #002d04;
}

.not-found-section-details .second-btn svg {
  margin-left: 5px;
}

.not-found-section-details .first-btn a span {
  padding-left: 10px;
}

.not-found-section-details .second-btn a span {
  padding-left: 10px;
}

.not-found-section-img img {
  padding-top: 50px;
}

/* Media queries */
@include mobile {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .not-found-section {
    margin-top: 0px;
  }

  .not-found-section-details h1 {
    font-size: 30px;
    padding-top: 15px;
    margin-top: 50px;
  }

  .not-found-section-details p {
    width: 100%;
  }

  .not-found-section img {
    display: none;
  }

  .justify-content-md-center {
    justify-content: center;
    .col,
    .col-md-3 {
      flex-grow: unset;
      width: auto;
    }
  }
}
</style>
