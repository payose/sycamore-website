<template>
  <div>
    <particles />
    <div
      class="pt-32 py-4 bg-gradient-to-b from-lightPrimary to-lighterPrimary px-6"
    >
      <div class="md:w-10/12 m-auto flex flex-col md:flex-row items-center">
        <div class="flex-1">
          <div class="md:w-11/12 lg:w-11/12">
            <h1
              class="text-3xl md:text-5xl md:leading-snug font-semibold text-gray07"
            >
              Think of us as your Growth Partner
            </h1>
            <div class="flex mt-10">
              <a
                target="_blank"
                href="https://dashboard.sycamore.ng/register"
                class="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm bg-primary text-white rounded-md md:mr-3"
              >
                <div class="flex items-center">
                  <span class="mr-1 md:mr-3"><arrow-up-right /> </span> Get
                  started
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-end mt-10 md:mt-0">
          <img
            src="https://storage.googleapis.com/sycamore-assets/images/hero_about.png"
            alt=""
            class="mr-0 rounded-md"
          />
        </div>
      </div>
    </div>

    <!-- WHY WE CARE -->
    <div class="px-6 lg:p-20 md:w-4/5 m-auto mt-16 md:mt-24">
      <div class="md:mb-8">
        <h2 class="text-xl md:text-2xl font-semibold text-gray07">
          Why we care
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
        <div
          v-for="(careReason, index) in careReasons"
          :key="index"
          class="md:px-8 my-2 p-5 md:py-12 text-xs md:text-sm rounded-2xl hover:bg-white shadow-lg careReason"
          :style="careReason.gradient"
        >
          <div
            class="px-3 py-1 bg-gray-800 text-white rounded-lg bg-opacity-10 mb-2 md:mb-6 text-xxs md:text-xs"
            style="width: fit-content"
          >
            {{ careReason.sdg }}
          </div>
          <div>
            <p class="text-white font-semibold mb-4">{{ careReason.title }}</p>
            <p class="text-white md:leading-5 text-xxs md:text-xs">
              {{ careReason.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission and Vision -->
    <div class="px-6 lg:py-2.5 lg:px-20 md:w-4/5 m-auto mt-10 md:mt-24 lg:mt-0">
      <div class="md:mb-8 mb-5">
        <h2 class="text-xl md:text-2xl font-semibold text-gray07">
          Mission and Vision
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] gap-y-8" >
        <div v-for="(item, index) in missionAndVision" :key="index" :style="item.color" class="md:px-10 md:py-16 px-5 py-4 rounded-[20px]">
          <div class="">
            <component :is="item.icon" />
          </div>
          <div class="mt-2.5">
            <p class="text-gray07 font-semibold mb-2.5">{{ item.title }}</p>
            <p class="text-black leading-9 md:text-[14px] text-xs">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- BOARD MEMBERS -->
    <div class="mt-10 lg:py-12 lg:px-20 md:w-4/5 m-auto">
      <div class="md:mb-6">
        <h2 class="text-2xl pl-6 md:pl-0 font-semibold text-gray07">
          Our Board
        </h2>
      </div>
      <div class="container">
        <div class="flex board">
          <div
            v-for="boardmember in boardmembers"
            :key="boardmember.id"
            class="relative mx-3 mt-5"
          >
            <img
              :src="
                require(`@/assets/board-members/board-member-${boardmember.id}.png`)
              "
              alt=""
              class="transition ease-in-out duration-700 board-img"
            />

            <div class="hide overlay-bg absolute w-full bottom-0">
              <div class="content-hide px-4 mt-20 md:mt-16">
                <p class="text-white text-sm md:text-lg font-medium">
                  {{ boardmember.name }}
                </p>
                <p class="text-white font-light text-xxs md:text-xs">
                  {{ boardmember.role }}
                </p>
                <div class="pt-2">
                  <a :href="boardmember.linked" target="_blank">
                    <LinkedIn class="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TEAM LEADERS -->
    <div class="mt-10 md:p-20 md:w-4/5 m-auto">
      <div class="mx-6 md:mx-0 md:mb-12">
        <h2 class="text-2xl md:text-2xl font-semibold md:pl-6 text-gray07">
          Meet our Team
        </h2>
      </div>
      <div class="container md:m-auto mt-8 md:mt-0">
        <div class="flex md:justify-center md:flex-wrap m-auto gallery">
          <div
            v-for="teamMember in teamMembers"
            :key="teamMember.id"
            class="px-6 md:w-1/4"
          >
            <div class="">
              <div class="relative w-max m-auto">
                <img
                  :src="require(`@/assets/managers/${teamMember.img}`)"
                  alt=""
                  class="managers-img linkin-img"
                />

                <div
                  class="linkin overlay-bg flex align-middle justify-center absolute w-full bottom-0 bg-gradient-to-b from-lightPrimary to-lighterPrimary"
                >
                  <div class="relative top-1/2 px-4">
                    <div class="">
                      <a :href="teamMember.linked" target="_blank">
                        <LinkedIn class="m-auto" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col w-full items-center text-center pb-9 pt-5"
              >
                <p
                  class="text-gray07 text-xs md:text-sm font-semibold pb-2 text-center"
                >
                  {{ teamMember.name }}
                </p>
                <p class="text-gray07 text-opacity-70 text-xs text-center">
                  {{ teamMember.designation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowUpRight from "@/svg/ArrowUpRight.vue";
import LinkedIn from "@/svg/LinkedIn.vue";
import ArrowUpRightBlack from "@/svg/ArrowUpRightBlack.vue";
import {
  TeamManagers,
  BoardMembers,
  CareReasons,
  MissionVision,
} from "@/data/About.js";

export default {
  name: "About",

  metaInfo: {
    title: "About Sycamore.ng | ",
    titleTemplate: "%s Meet the Team, Board & Principal Officers.",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Our primary objective is to create more opportunities to get you financially empowered. Get personal or business loans, Invest & earn, Lend or borrow money from friends, Manage & track your loans, Pay bills, and Transfer money in Nigeria.",
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "sycamore contact, sycamore credit, sycamore loan nairaland, sycamore loan app, sycamore solutions, sycamore investment, sycamore ceo",
      },
    ],
  },

  components: {
    ArrowUpRight,
    LinkedIn,
    ArrowUpRightBlack,
  },

  data() {
    return {
      boardmembers: BoardMembers,
      teamMembers: TeamManagers,
      careReasons: CareReasons,
      missionAndVision: MissionVision,
    };
  },
};
</script>

<style lang="scss" scoped>
.managers-img {
  height: 15rem;
  width: 12rem;
  border-radius: 5px;
  object-fit: fill;
}

.overlay-bg {
  background: linear-gradient(180deg, rgba(38, 50, 56, 0) 0%, #263238 100%);
}

.linkin {
  transition: 0.4s ease-in-out;
  border-radius: 5px;
}

.hide {
  transition: 0.7s ease-in-out;
  border-radius: 5px;
}

.hide {
  border-radius: 5px;
}

.linkin {
  height: 50%;
}

.board-img:hover + .hide,
.linkin-img:hover + .linkin {
  display: inline;
}

.about-hero {
  background-image: url("../assets/humans-of-sycamore.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
}

@media only screen and (min-width: 768px) {
  .linkin {
    height: 0;
  }

  .hide {
    height: 40%;
  }

  .linkin-img:hover + .linkin,
  .linkin:hover {
    height: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    overflow-x: scroll;
  }

  .content-hide {
    position: relative;
    bottom: 10px;
  }

  .board-members-section {
    width: 150vw;
  }

  .gallery {
    min-width: 400vw;
  }

  .board {
    width: 150vw;
  }
}

.careReason {
  transition: 0.3s all;
}
</style>
