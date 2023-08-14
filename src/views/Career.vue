<template>
  <main class="main">
    <particles />

    <!-- FRONT BANNER SECTION -->
    <section
      class="bg-opacity-5 bg-gradient-to-b from-darkPrimary to-dark2Primary px-6 md:px-20 py-28 md:py-0 md:pt-56 md:pb-28"
    >
      <div class="flex flex-col place-items-start md:place-items-center">
        <h1
          class="text-2xl md:text-5xl md:w-6/12 md:text-center font-semibold text-gray07 md:leading-extra-loose"
        >
          Join us to build a future void of financial barriers.
        </h1>

        <div class="mt-8">
          <button
            @click="scrollToElement('openPositionById')"
            class="px-4 py-3 text-sm bg-gray07 text-white rounded-md mr-3"
          >
            <div class="flex items-center">
              <span class="mr-3"><arrow-up-right /> </span> Join our team
            </div>
          </button>

          <router-link to="/about">
            <button
              class="px-4 py-3 text-sm bg-white text-gray07 rounded-md mr-3"
            >
              <div class="flex items-center">
                <span class="mr-3"><arrow-up-right-black /> </span> About us
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- OPEN POSITIONS SECTION -->
    <section id="" class="openPositionById px-4 lg:px-64 pb-16 md:pb-20">
      <h2 class="text-xl md:text-3xl font-semibold text-gray07 text-center">
        Open Positions
      </h2>

      <div class="grid grid-cols-12 gap-4 py-10 px-0 md:px-28">
        <div
          class="col-span-12 md:col-span-6 bg-gray-100 flex-1 flex items-center py-1 px-3 rounded-xl"
        >
          <input
            type="text"
            class="text-gray-400 bg-transparent placeholder-gray-500"
            placeholder="Search job title"
          />
          <div><search-icon color="#c4c4c4" /></div>
        </div>

        <div class="col-span-6 md:col-span-3 bg-gray-100 py-1 px-3 rounded-xl">
          <select
            name=""
            id=""
            class="w-full py-3 px-3 text-gray-400 bg-transparent placeholder-gray-500"
          >
            <option value="Sales">Sales team</option>
            <option value="Technical">Technical team</option>
          </select>
        </div>

        <div class="col-span-6 md:col-span-3 bg-gray-100 py-1 px-3 rounded-xl">
          <select
            name=""
            id=""
            class="w-full py-3 px-3 text-gray-400 bg-transparent placeholder-gray-500"
          >
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Ibadan">Ibadan</option>
          </select>
        </div>
      </div>

      <div v-if="noPositions.length">
        <div
          v-for="(noPosition, index) in noPositions"
          :key="index"
          class="py-7 px-7 rounded-2xl bg-white mb-8 shadow-lg"
        >
          <div
            class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-6 md:gap-y-0"
          >
            <div class="flex items-center gap-2">
              <div class="mr-3"><component :is="noPosition.icon" /></div>
              <div>
                <h3 class="text-sm md:text-lg text-gray07 font-semibold">
                  {{ noPosition.role }}
                </h3>
                <p class="text-xs text-gray07 text-opacity-70">
                  {{ noPosition.type }}
                </p>
              </div>
            </div>

            <div class="">
              <a
                class="px-4 py-2 text-sm bg-gray-800 text-white rounded-md"
                :href="noPosition.link"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center mt-8 border border-greyEF py-10 px-6 md:px-16 xl:px-40 rounded-2xl flex justify-center items-center flex-col">
        <component :is="ErrorVue" class="w-full"/>
        <p class="text-gray07 mt-5 md:mt-10 text-sm md:text-lg leading-7 md:w-3/4 w-full font-normal">
          There are no available openings at the moment. Be sure to check back
          sometime soon
        </p>
      </div>
      <div v-if="openPositions.length > 0" class="text-center mt-0 md:mt-12">
        <button
          :class="(noPositions[0].id = 'none' ? ' cursor-not-allowed' : '')"
          class="px-4 py-3 text-sm bg-primary text-white rounded-md"
        >
          <div class="flex items-center">
            <span class="mr-2"><arrow-up-right /> </span> See all positions
          </div>
        </button>
      </div>
    </section>

    <!-- CORE VALUES SECTION -->
    <section class="bg-gray-100 px-6 md:px-48 py-16 md:py-20">
      <div class="">
        <h2 class="text-xl md:text-3xl font-semibold md:text-center">
          Our Core Values
        </h2>
      </div>

      <div
        class="flex flex-wrap justify-center items-center w-full mt-4 md:mt-12"
      >
        <div
          class="w-2/4 md:w-4/12 px-2 py-2 md:px-4 md:py-4"
          v-for="(coreValue, index) in coreValues"
          :key="index"
        >
          <div
            :style="`background-color: ${coreValue.bgColor}`"
            class="h-32 md:h-36 px-3 py-3 md:px-10 md:py-10 rounded-lg md:rounded-2xl relative overflow-hidden"
          >
            <h3 class="text-white font-semibold text-sm md:text-lg mb-2">
              {{ coreValue.title }}
            </h3>

            <p class="text-xxs md:text-xs text-white">
              {{ coreValue.description }}
            </p>

            <p
              :class="index === 2 ? 'right-0 bottom-0' : '-right-10 -bottom-10'"
              class="absolute"
            >
              <component :is="coreValue.pattern" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="px-4 md:px-48 py-16 md:py-28">
      <div class="text-gray07 md:text-center">
        <h2 class="text-xl md:text-3xl font-semibold">Benefits</h2>
        <p class="text-opacity-70 text-sm pt-6">
          In addition to a competitive salary, here are a few resources we offer
          to help our team excel.
        </p>
      </div>

      <div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 mt-10 md:mt-14"
        >
          <div v-for="(benefit, index) in benefits" :key="index" class="flex">
            <div class="mr-5">
              <component :is="benefit.icon" />
            </div>
            <div>
              <h3 class="text-lg text-gray07 font-semibold mb-3">
                {{ benefit.title }}
              </h3>
              <p class="text-gray07 text-xs text-opacity-70">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DOWNLOAD APP SECTION -->
    <download-app />
  </main>
</template>

<script>
import HeartbeatVue from "@/svg/Heartbeat.vue";
import SmileyVue from "@/svg/Smiley.vue";
import RocketVue from "@/svg/Rocket.vue";
import ErrorVue from "@/svg/503Error.vue";
import Card from "@/svg/Card.vue";
import MartiniVue from "@/svg/Martini.vue";
import Heartbeat from "@/svg/Heartbeat.vue";
import SearchIcon from "@/svg/SearchIcon.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import CareerPattern1Vue from "@/svg/CareerPattern1.vue";
import CareerPattern2Vue from "@/svg/CareerPattern2.vue";
import CareerPattern3Vue from "@/svg/CareerPattern3.vue";
import CareerPattern4Vue from "@/svg/CareerPattern4.vue";
import CareerPattern5Vue from "@/svg/CareerPattern5.vue";
import ArrowUpRight from "@/svg/ArrowUpRight.vue";
import ArrowUpRightBlack from "@/svg/ArrowUpRightBlack.vue";

export default {
  name: "Career",

  metaInfo: {
    title: "Sycamore Careers | ",
    titleTemplate:
      "%s Join our team to build a future void of financial barriers - Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Sycamore Careers - Join our team to build a future void of financial barriers. View open job positions at Sycamore.ng",
      },
      {
        vmid: "keywords",
        name: "keywords",
        content: "sycamore careers, sycamore solutions, sycamore jobs",
      },
    ],
  },

  components: {
    SearchIcon,
    Card,
    RocketVue,
    ErrorVue,
    DownloadApp,
    ArrowUpRight,
    ArrowUpRightBlack,
    MartiniVue,
    Heartbeat,
  },

  data() {
    return {
      openPositions: [],
      ErrorVue,
    };
  },

  computed: {
    coreValues() {
      return [
        {
          title: "Integrity",
          description: "We go extra mile to get the job done",
          bgColor: "#fca200",
          pattern: CareerPattern1Vue,
        },
        {
          title: "Customer Obsession",
          description: "Going above and beyond to provide excellent service",
          bgColor: "#3359df",
          pattern: CareerPattern2Vue,
        },
        {
          title: "Bias for Action",
          description: "We just get it done",
          bgColor: "#1f2c46",
          pattern: CareerPattern3Vue,
        },
        {
          title: "Innovation",
          description: "Scaling suitable solutions with technology",
          bgColor: "#00b140",
          pattern: CareerPattern4Vue,
        },
        {
          title: "Respect",
          description: "Every one gets a say",
          bgColor: "#db5422",
          pattern: CareerPattern5Vue,
        },
      ];
    },

    benefits() {
      return [
        {
          title: "Health Insurance",
          description:
            "Our comprehensive medical insurance covers a wide variety of needs",
          icon: HeartbeatVue,
        },
        {
          title: "Smart, Kind Colleagues",
          description:
            "Learn and grow with highly accomplished colleagues who are invested in your personal and professional development",
          icon: SmileyVue,
        },
        {
          title: "Professional Development",
          description:
            "We invest in our people to ensure they can achieve their short, medium, and long term professional goals",
          icon: RocketVue,
        },
        {
          title: "Annual Leave",
          description:
            "All team members have up to 20 days of annual leave, and are warmly encouraged to use them",
          icon: MartiniVue,
        },
      ];
    },

    noPositions() {
      return [];
    },
  },

  methods: {
    scrollToElement(options) {
      const el = this.$el.getElementsByClassName(options)[0];

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped></style>
