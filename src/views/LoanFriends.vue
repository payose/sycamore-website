<template>
  <main class="main">
    <particles />
    <section
      class="flex flex-col justify-center items-center bg-opacity-5 bg-gradient-to-b from-lightSecondary to-lighterSecondary"
    >
      <div
        class="pt-32 md:pt-48 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center md:px-20 pb-0 banner"
      >
        <div class="absolute left-0 bottom-30">
          <FaqPattern1 />
        </div>

        <div class="absolute right-0 bottom-40">
          <FaqPattern2 />
        </div>

        <div class="md:w-1/2 flex flex-col items-center">
          <h1
            class="text-gray07 text-2xl md:text-5xl font-semibold text-center"
          >
            Loan Friends
          </h1>

          <h3
            class="text-gray07 text-opacity-70 mt-7 text-center text-sm md:text-base px-5 md:px-0"
          >
            Manage and track all Loans you Lend and borrow from your Friends,
            all in one place
          </h3>
        </div>
      </div>
    </section>

    <section class="px-6 pt-12 md:pt-[150px] md:px-48">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <div class="grid md:text-right gap-y-6 md:gap-y-24 mb-4 md:mb-0">
          <div class="flex gap-x-4">
            <div>
              <h2 class="font-semibold text-base pb-1">
                Set Reminders
              </h2>
              <p class="text-xs mt-2">
                Never miss repayments! Hold your Debtors accountable for the
                Money you Lend them by setting Reminders for Repayments
              </p>
            </div>

            <div class="order-first md:order-none"><BellRinging /></div>
          </div>

          <div class="flex gap-x-4">
            <div>
              <h2 class="font-semibold text-base pb-1">
                Adjust Loan Requests
              </h2>
              <p class="text-xs mt-2">
                Reduce the Amount requested, shorten/elongate the Tenor and
                trigger Reminders to Friends who owe you to repay in time
              </p>
            </div>

            <div class="order-first md:order-none"><PencilLine /></div>
          </div>
        </div>

        <div class="order-first md:order-none text-center">
          <div>
            <img src="../assets/loan-friends-mockup.jpg" class="" alt="" />
          </div>
        </div>

        <div class="grid gap-y-6 md:gap-y-24">
          <div class="flex gap-x-4">
            <div class=""><FlowArrow /></div>

            <div class="">
              <h2 class="font-semibold text-base pb-1">
                Get your Money without hassle
              </h2>
              <p class="text-xs mt-2">
                Increase your chances of getting your money back with our Swift
                Automated Debits
              </p>
            </div>
          </div>

          <div class="flex gap-x-4">
            <div class=""><RoundNaira /></div>

            <div>
              <h2 class="font-semibold text-base pb-1">
                Earn extra Income on each Loan
              </h2>
              <p class="text-xs mt-2">
                Make more Money for Yourself on every Loan you give your Friends
                by adding Interest
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full md:w-3/5 mx-auto mt-20 mb-28">
      <div class="flex flex-col">
        <div
          class="text-center font-semibold text-2xl md:text-4xl mb-8 px-4 md:px-0"
        >
          <h2>Get started in 4 easy steps</h2>
        </div>

        <div
          class="flex flex-col md:flex-row mx-auto md:gap-x-8 mb-8 px-8 md:px-0 text-xs md:text-base"
        >
          <div>
            <div class="flex items-center gap-1 mb-3">
              <span><check /></span>
              <p>Create a Tag for easy identification</p>
            </div>

            <div class="flex items-center gap-1 mb-3">
              <span><check /></span>
              <p>Search for friend by their tag or phone number</p>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-1 mb-3">
              <span><check /></span>
              <p>Send a Loan request</p>
            </div>

            <div class="flex items-center gap-1 mb-3">
              <span><check /></span>
              <p>Pay with your Sycamore Wallet or Bank Card</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link
            to="/download-app"
            class="px-16 py-2 text-sm bg-primary border border-primary text-white rounded-sm"
          >
            Sign up
          </router-link>
        </div>
      </div>
    </section>

    <section class="w-full mt-20 mb-28 px-5 md:px-0">
      <div class="flex justify-center">
        <iframe
          class="ifame-design"
          width="854"
          height="480"
          src="https://www.youtube.com/embed/tOBWnmFuvvc"
          title="Loan frieds video"
          frameborder="0"
          modestbranding="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </section>

    <!-- DOWNLOAD THE SYCAMORE APP -->
    <download-app />
  </main>
</template>

<script>
import DownloadApp from "@/components/DownloadApp.vue";
import FaqPattern1 from "@/svg/FaqPattern1.vue";
import FaqPattern2 from "@/svg/FaqPattern2.vue";
import Check from "@/svg/Check.vue";
import BellRinging from "@/svg/BellRinging.vue";
import PencilLine from "@/svg/PencilLine.vue";
import FlowArrow from "@/svg/FlowArrow.vue";
import RoundNaira from "@/svg/RoundNaira.vue";

export default {
  metaInfo: {
    title: "Sycamore Loan Friends | ",
    titleTemplate:
      "%s Loan Friends - Lend or borrow money from Friends in Nigeria - Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Lend or borrow money from Friends in Nigeria with Loan Friends. Manage and track all Loans you Lend and borrow from your Friends with interest or interest-free."
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "can i borrow money from friends, my friend wants to borrow money, good excuses to borrow money from friends, how to borrow money from someone, why you should not borrow money from friends, if you lend someone money and they don't pay you back, how to borrow money from a friend, Can you legally borrow money from a friend, Which app can lend me money in Nigeria, Can I borrow money from friends and family, What apps can I use to borrow money"
      }
    ]
  },

  data() {
    return {
      DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL
    };
  },

  components: {
    DownloadApp,
    FaqPattern1,
    FaqPattern2,
    Check,
    BellRinging,
    PencilLine,
    FlowArrow,
    RoundNaira
  },

  methods: {}
};
</script>

<style scoped>
.ifame-design {
  border-radius: 24px;
}
</style>
