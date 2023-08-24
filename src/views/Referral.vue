<template>
  <main class="main">
    <section class="py-14 md:px-20 green-bg h-auto md:h-screen">
      <div
        class="w-10/12 m-auto flex flex-col justify-center items-center px-6 text-xs md:text-s13 text-white"
      >
        <div class="mb-10 m-auto">
          <router-link to="/" class="md:w-36">
            <img src="@/assets/Group-mono.png" class="w-24" />
          </router-link>
        </div>

        <div>
          <p class=" text-center text-sm pb-6">
            Referral Bonus Program Suspended.
          </p>

          <div class="w-8/12 text-center font-light [&>*]:pb-4 m-auto">
            <p>
              The Sycamore referral program has been suspended effective May
              27th, 2022.
            </p>
            <p>
              Referral codes used after this date will not qualify for a
              referral bonus.
            </p>
            <p>
              You can enjoy the benefits Sycamore offers and carry out your
              everyday transactions seamlessly when you download the mobile App.
            </p>

            <p>
              This is to allow us to improve the referral program in order to
              serve you more optimally. We will communicate with you when it's
              open again.
            </p>
          </div>
        </div>
        <!-- <div class="flex flex-col md:flex-row">
          <div
            class="md:flex-1 mb-14 text-center md:text-left md:px-14"
          >
            <p class="pb-4leading-6">
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
                  class="flex  bg-primary1 p-3 rounded-md text-xs cursor-pointer"
                  @click="copyText(referralId)"
                >
                  <Copy class="mr-2" /> {{ buttonText }}
                </span>
              </div>
            </div>
          </div>
          <div class="md:flex-1  text-xs md:ml-4">
            <p class=leading-6 pb-4">
              <span class="mr-2">1</span>
              Download the Sycamore App on the app store.
            </p>
            <p class=leading-6 pb-4">
              <span class="mr-2">2</span>
              Enter the referral code in the referral code option.
            </p>
            <p class=leading-6 pb-4">
              <span class="mr-2">3</span>
              Validate your BVN
            </p>
            <p class=leading-6 pb-4">
              <span class="mr-2">4</span>
              Fund your wallet with at least ₦1,000 and keep for 3 days
            </p>
            <p class=leading-6 pb-4">
              <span class="mr-2">5</span>
              Get ₦200 reward, referrer gets ₦800
            </p>
            <p class="text-italics">Terms and conditions apply</p>
          </div>
        </div> -->
        <div class="mt-16">
          <p class="text-center text-xs">
            Download the Sycamore app to sign up
          </p>
          <div class="flex mt-4">
            <a
              target="_blank"
              href="https://apps.apple.com/ng/app/sycamore-ng/id1592757960"
              class="mr-3 md:w-36"
            >
              <img src="../assets/appStore2.svg" class="md:w-40" alt="appstore download button" />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ng.sycamore.app2"
              class="md:w-36"
            >
              <img src="../assets/playStore2.svg" class="md:w-40" alt="playstore download button" />
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
.green-bg {
  background-image: url("../assets/green-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
