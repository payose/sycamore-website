<template>
  <div>
    <particles />
    <div
      class="bg-opacity-5  bg-no-repeat bg-cover flex justify-center items-center pt-28 md:pt-40 px-6 md:px-20 borrow"
    >
      <div class="hidden md:block absolute left-0 bottom-0 z-0">
        <BorrowPattern1 />
      </div>

      <div class="hidden md:block absolute right-0 top-0 z-0">
        <BorrowPattern2 />
      </div>

      <div class="md:w-1/2 flex flex-col md:items-center z-10">
        <h1
          class="text-gray07 text-3xl md:text-5xl font-semibold md:text-center"
        >
          Loan
        </h1>
        <h2
          class="text-gray07 text-opacity-70 mt-4 md:mt-8 text-sm md:text-base md:text-center"
        >
          Gain access to quick loans to cater for your financial needs. Our no
          collateral loans are available to both salaried employees and
          registered business owners.
        </h2>
        <div class="flex mt-14">
          <a
            target="_blank"
            href="https://bit.ly/download-sycamore"
            class="px-2 md:px-4 py-3 text-xs md:text-sm bg-grayA91 text-white rounded-md md:mr-3"
          >
            <div class="flex items-center">
              <span class="mr-1 md:mr-3"><arrow-up-right /> </span>
              Get a Loan
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- LOAN CALCULATOR -->
    <div class="px-6 md:p-20 pt-10 md:mt-10">
      <div class="">
        <div class="rounded-lg m-auto md:w-2/5">
          <widget header="Get a Loan" />
        </div>
      </div>
      <div class="md:mx-52 mb-12 mt-8 text-sm opacity-70">
        <p class="md:text-center">
          The amount on the loan calculator is an initial estimate only. We’ll
          make you a loan offer based on the information you share with us in
          your loan application.
        </p>
      </div>
    </div>

    <!-- FOUR CARDS -->
    <div class="px-6 md:p-20 mb-10 md:pb-0 pt-10 md:pt-0 md:px-80 flex">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-20">
        <div v-for="(reason, index) in reasons" :key="index" class="flex">
          <div class="mr-5">
            <component :is="reason.icon" />
          </div>
          <div>
            <h2 class="text-lg text-gray07 font-semibold mb-3">
              {{ reason.title }}
            </h2>
            <p class="text-gray07 text-xs text-opacity-70">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- DOWNLOAD THE SYCAMORE APP -->
    <div class="hidden md:block">
      <download-app />
    </div>
  </div>
</template>

<script>
import DownloadApp from "@/components/DownloadApp.vue";
import BorrowPattern1 from "@/svg/BorrowPattern1.vue";
import BorrowPattern2 from "@/svg/BorrowPattern2.vue";
import DoubleChecks from "@/svg/DoubleChecks.vue";
import ClockClockWise from "@/svg/ClockClockWise.vue";
import Percent from "@/svg/Percent.vue";
import ScribbleLoopVue from "@/svg/ScribbleLoop.vue";
import LeftBubble from "@/svg/LeftBubble.vue";
import Appstore from "@/svg/Appstore.vue";
import Playstore from "@/svg/Playstore.vue";
import RightBubble from "@/svg/RightBubble.vue";
import BottomBubble from "@/svg/BottomBubble.vue";
import ArrowUpRight from "@/svg/ArrowUpRight.vue";
import ArrowUpRightBlack from "@/svg/ArrowUpRightBlack.vue";
import ArrowUpRightRed from "@/svg/ArrowUpRightRed.vue";
import Widget from "@/components/Widget.vue";

const investReasons = [
  {
    title: "No hidden fees",
    description: "Borrowers only pay the amount they owe.",
    icon: DoubleChecks
  },
  {
    title: "Get money in 24 hours",
    description:
      "Apply and get credited in 24 hours. It’s that easy! No paperwork, no collateral required.",
    icon: ClockClockWise
  },
  {
    title: "Competitive rates",
    description:
      "With our loans, borrowers are rest assured to get the best rates.",
    icon: Percent
  },
  {
    title: "Flexible loan tenures",
    description:
      "With our flexible loan scheme, borrowers can select an option that best suits their needs.",
    icon: ScribbleLoopVue
  }
];

export default {
  metaInfo: {
    title: "Sycamore Loan | ",
    titleTemplate:
      "%s Get Personal, Payday & Business loans in Nigeria - Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Get Personal loans, Payday loans & business loans in Nigeria. No hidden charges. Get quick online loans for urgent needs, salary advance & business loans now!"
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "sycamore loan nairaland, sycamore loan app, fast loans, quick loans, fast loan nigeria, quick loan nigeria, federal government employee loan nigeria, employee loan nigeria, public sector worker loan nigeria, collateral free loans, state employer loans, loans in Nigeria,Loans for civil servants,Emergency loans in minutes, Loans Sharp Sharp, Fast Loans in Nigeria, Loans in Seconds, Loans without collateral, Instant Loans in Nigeria, Quick Online Loans, Fast Emergency Loans, Online Loans in Lagos, Payday loan, Salary Advance, loan calculator"
      }
    ]
  },

  components: {
    LeftBubble,
    DownloadApp,
    Widget,
    Appstore,
    Playstore,
    RightBubble,
    BottomBubble,
    ArrowUpRight,
    ArrowUpRightBlack,
    ArrowUpRightRed,
    BorrowPattern1,
    BorrowPattern2
  },
  data() {
    return {
      DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL
    };
  },
  computed: {
    reasons() {
      return investReasons;
    }
  },
  methods: {
    talkToUs() {
      this.$intercom.show();
    }
  }
};
</script>
<style lang="scss" scoped>
.borrow {
  background: linear-gradient(
    180deg,
    rgba(90, 88, 88, 0.1) 0%,
    rgba(255, 86, 94, 0) 100%
  );
  position: relative;
}
.hello {
  position: absolute;
  width: 100%;
  height: 100%;
}
form {
  padding: 10px 100px;
}
h1 {
  line-height: 72px;
}

span {
  left: 10px;
  top: 62px;
  z-index: 2;
}
label {
  line-height: 150%;
  color: #758c96;
}
input {
  display: block;
  width: 500px;
  height: 72px;
  border: #f4f5f7;
  background-color: #f4f5f7;
  margin-top: 20px;
  outline: none;
  color: #020202;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 150%;
  font-style: normal;
  font-size: 24px;
  padding-left: 3rem !important;
}
.month {
  grid-template-columns: 3fr 1fr;
}

.repayment-period {
  width: 60%;
}

.repayment-value {
  line-height: 150%;
  color: #5b7681;
}
.repayment-label {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #758c96;
}
/* button {
  width: 218px;
  height: 69px;
  border-radius: 6px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
} */

.error {
  font-family: "Poppins", sans-serif;
  color: red;
  font-size: 12px;
}
</style>
