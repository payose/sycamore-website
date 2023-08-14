<template>
  <div>
    <particles />
    <div
      class="pt-28 md:pt-48 bg-opacity-5 bg-gradient-to-b from-lightPrimary to-lighterPrimary flex justify-center items-center px-6 md:px-20"
    >
      <div class="absolute left-0 bottom-0 z-0">
        <invest-pattern-1 />
      </div>
      <div class="absolute right-0 top-0 z-0">
        <invest-pattern-2 />
      </div>
      <div class="md:w-3/5 flex flex-col md:items-center z-10">
        <h1
          class="text-3xl md:text-5xl font-semibold md:text-center text-gray07 md:leading-extra-loose"
        >
          Gain Total Control of your Finances
        </h1>
        <p class="text-gray07 text-opacity-70 text-sm md:text-lg mt-4 md:mt-8">
          Enjoy up to 16.5% returns per annum on your investments.
        </p>
        <div class="flex mt-4 md:mt-14">
          <a
            target="_blank"
            href="https://bit.ly/download-sycamore"
            class="px-3 md:px-4 py-3 text-xs md:text-sm bg-primary text-white rounded-md mr-3"
          >
            <div class="flex items-center">
              <span class="mr-3"><arrow-up-right /> </span> Invest now
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- INVESTMENT PLANS -->
    <div class="px-6 mb-20 mb:mb-0 pt-20 md:pt-40 md:mt-12 pr-0 relative">
      <div id="container" class="overflow-x-scroll">
        <div
          class="md:pb-16 md:pl-40 grid grid-cols-10 md:grid-cols-10 gap-2 plans-width"
        >
          <div class="col-span-2 md:col-span-2 bg-gray07 rounded-md md:mx-6">
            <div class="px-4 md:px-8 pt-8">
              <p class="md:text-2xl font-semibold text-white">
                Plans
              </p>
              <p class="md:text-2xl font-semibold text-white">
                tailored for you
              </p>
              <p class="text-white mt-3" style="font-size:0.69rem">
                Earn competitive returns per annum with our various investment
                plans tailored just for you.
              </p>
            </div>
            <div class="w-full mt-10">
              <img
                class="rounded-b-md"
                src="@/assets/invest.png"
                width="100%"
              />
            </div>
          </div>

          <div class="col-span-8 pt-10">
            <div class="flex flex-row mt-7 trans">
              <div
                v-for="(item, index) in investmentOptions"
                :key="index"
                class="bg-white py-10 px-7 rounded-2xl mx-2 md:mx-5"
                style="box-shadow: 2px 8px 48px -16px rgba(28, 37, 71, 0.2)"
              >
                <div>
                  <h3 class="font-semibold text-xl text-gray07">
                    {{ item.title }}
                  </h3>
                  <p class="text-grayA9 text-xs">
                    Mininum tenure: {{ item.duration }} months
                  </p>
                  <p class="text-xs mt-3 text-gray07" style="line-height: 20px">
                    {{ item.description }}
                  </p>
                </div>
                <div
                  class="border-gray-3
                  00 border-dashed mt-8 mb-6"
                  style="border-width: 0.5px"
                />
                <div class="flex flex-col items-center">
                  <p class="text-primary font-medium text-xs mb-5">From</p>
                  <p class="font-semibold text-2xl text-gray07">
                    ₦{{ Number(item.fromPrice).toLocaleString() }}
                  </p>
                </div>
                <div class="mt-10 flex justify-center">
                  <a
                    target="_blank"
                    href="https://bit.ly/download-sycamore"
                    class="px-3 md:px-4 py-3 text-xs md:text-sm bg-primary text-white rounded-md mr-3"
                  >
                    <div class="flex items-center">
                      <span class="mr-3"><arrow-up-right /> </span> Invest now
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="absolute right-10 cursor-pointer animate-bounce"
        style="top: calc(50% - 50px)"
        @click="slideLeft()"
      >
        <right />
      </button>
    </div>

    <!-- REASONS -->
    <div class="px-6 mb-10 md:mb-0 md:p-20 md:px-80 flex">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
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

    <div class="hidden md:block">
      <download-app />
    </div>
  </div>
</template>

<script>
import InvestPattern1 from "@/svg/InvestPattern1.vue";
import InvestPattern2 from "@/svg/InvestPattern2.vue";
import LockKeyVue from "@/svg/LockKey.vue";
import MonitorVue from "@/svg/Monitor.vue";
import UserVue from "@/svg/User.vue";
import ScribbleLoopVue from "@/svg/ScribbleLoop.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import ArrowUpRightBlack from "@/svg/ArrowUpRightBlack.vue";
import ArrowUpRight from "@/svg/ArrowUpRight.vue";
import Right from "@/svg/Right.vue";

const investReasons = [
  {
    title: "Secured Investments",
    description:
      "Your investments with us are secured as our borrower loans are backed by insurance and physical collateral.",
    icon: LockKeyVue
  },
  {
    title: "Real-time monitoring",
    description:
      "Enjoy convenience and transparency through real time monitoring of your investments on our platform.",
    icon: MonitorVue
  },
  {
    title: "Dedicated Managers",
    description:
      "We have dedicated relationship managers assigned to each lender to attend to them specially and promptly.",
    icon: UserVue
  },
  {
    title: "Flexible terms",
    description: "Our lenders enjoy flexible repayment terms.",
    icon: ScribbleLoopVue
  }
];

export default {
  metaInfo: {
    title: "Invest with Sycamore | ",
    titleTemplate:
      "%s Earn High Interest rates on investment & savings in Nigeria - Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Earn up to 16.5% interest rates on your investments & savings in Nigeria. Earn competitive returns per month with secured investment plans tailored just for you."
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "sycamore investment, Saving Money in Nigeria, Savings Account, Periodic savings, Fixed savings, Onetime savings, Digital savings, Savings Automation, High-interest rate, Save Money, FinTech, Online savings platform, Digital savings in Nigeria, Personal Finance, Investments, Wealth Management, savings account interest rate, saving account interest rate calculator, savings account with high interest, savings account promotions, monthly savings account, payday investor, payday automated savings, digital piggy bank, payday online investment, fixed savings rate, fixed savings high interest, fixed deposit, fixed deposit account"
      }
    ]
  },

  data() {
    return {
      DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL,
      optionsPage: 0,
      investmentOptions: [
        {
          title: "Lender's Lite",
          duration: 3,
          description:
            "Enjoy up to 11% in returns per annum when you invest up to ₦999,999. ",
          fromPrice: 100000
        },
        {
          title: "Lender's D-Lite",
          duration: 6,
          description:
            "Enjoy up to 14% in returns per annum when you invest up to ₦9,999,999.",
          fromPrice: 1000000
        },
        {
          title: "Lender's E-Lite",
          duration: 9,
          description:
            "Enjoy up to 15% returns per annum when you invest up to ₦49,999,999.",
          fromPrice: 10000000
        },
        {
          title: "Lender's Platinum",
          duration: 12,
          description:
            "Enjoy up to 16.5% returns per annum when you invest from  ₦50,000,000.",
          fromPrice: 50000000
        }
      ]
    };
  },
  components: {
    InvestPattern1,
    InvestPattern2,
    DownloadApp,
    ArrowUpRightBlack,
    ArrowUpRight,
    Right
  },
  methods: {
    slideLeft() {
      const container = document.getElementById("container");
      container.scrollLeft += 200;
      if (container.scrollLeft > 600) {
        container.scrollLeft = 0;
      }
    },
    talkToUs() {
      this.$intercom.show();
    }
  },
  computed: {
    reasons() {
      return investReasons;
    }
  }
};
</script>

<style scoped>
.plans-width {
  width: 400vw;
}

@media only screen and (min-width: 768px) {
  .plans-width {
    width: 150vw;
  }
}
.mobile {
  width: 300vw;
}
#container {
  scroll-behavior: smooth;
}
.trans {
  transition: 0.9s;
}
::-webkit-scrollbar {
  display: none;
}
</style>
