<template>
  <div
    :class="isAccordionOpen ? 'bg-white' : ' bg-white'"
    class="w-full fixed pb-4 z-20 accordion-body"
  >
    <div
      class="ml-5 pt-5 pr-5 text-xl font-semibold cursor-pointer flex items-between justify-between"
    >
      <div class="w-32">
        <router-link to="/">
          <img src="@/assets/logo.png" width="100%" alt="" />
        </router-link>
      </div>
      <div @click="isAccordionOpen = !isAccordionOpen">
        <div v-if="isAccordionOpen" class="">
          <img src="../assets/X.svg" alt="" />
        </div>
        <div v-else>
          <img src="../assets/List.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="content"
        :style="
          isAccordionOpen
            ? 'height:90vh; overflow-y:scroll;position:fixed'
            : 'height:0 '
        "
      >
        <div class="message-body" @click="isAccordionOpen = !isAccordionOpen">
          <div
            v-for="(item, index) in nav"
            :key="index"
            class="mx-4 nav-border-b"
          >
            <p
              :to="item.path"
              class="cursor-pointer text-xs text-gray-500 mt-6"
            >
              {{ item.title }}
            </p>
            <div class="pb-5 mt-1 rounded-lg w-auto">
              <div v-for="(subItem, index) in item.sub" :key="index">
                <router-link v-if="subItem.inApp" :to="subItem.path">
                  <div class="flex items-center my-5">
                    <div
                      class="mr-2 h-11 w-11 rounded-lg flex items-center justify-center"
                      :style="`background-color: ${subItem.bgColor}`"
                    >
                      <component :is="subItem.icon" />
                    </div>
                    <div>
                      <p class="font-semibold text-xs text-black">
                        {{ subItem.title }}
                      </p>
                      <p class="text-xxs text-black">
                        {{ subItem.description }}
                      </p>
                    </div>
                  </div>
                </router-link>
                <a :href="subItem.path" target="_blank" v-else>
                  <div class="flex items-center my-5">
                    <div
                      class="mr-2 h-11 w-11 rounded-lg flex items-center justify-center"
                      :style="`background-color: ${subItem.bgColor}`"
                    >
                      <component :is="subItem.icon" />
                    </div>
                    <div>
                      <p class="font-semibold text-xs text-black">
                        {{ subItem.title }}
                      </p>
                      <p class="text-xxs text-black">
                        {{ subItem.description }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="mx-4 nav-border-b pb-12">
            <p class="cursor-pointer text-xs text-gray-500 my-6">
              Download Sycamore
            </p>
            <div class="flex items-center justify-around">
              <a
                href="https://bit.ly/download-sycamore"
                target="_blank"
                class="w-5/12 text-center py-3 text-sm bg-white text-primary border border-primary rounded-md"
              >
                Sign in
              </a>
              <a
                href="https://bit.ly/download-sycamore"
                target="_blank"
                class="w-5/12 text-center py-3 text-sm bg-primary border border-primary text-white rounded-md"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuLoanVue from "@/svg/MenuLoan.vue";
import MenuInvestmentVue from "@/svg/MenuInvestment.vue";
import MenuMarketplaceVue from "@/svg/MenuMarketplace.vue";
import MenuAssetFinancingVue from "@/svg/MenuAssetFinancing.vue";
import MenuAboutVue from "@/svg/MenuAbout.vue";
import MenuCareerVue from "@/svg/MenuCareer.vue";
import MenuBlog from "@/svg/MenuBlog.vue";
import MenuMedia from "@/svg/MenuMedia.vue";
import MenuDevelopersVue from "@/svg/MenuDevelopers.vue";

export default {
  components: {
    MenuBlog,
    MenuMedia,
  },

  data() {
    return {
      DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL,
      nav: [
        {
          title: "Features",
          sub: [
            {
              title: "Loans",
              description: "Get instant Loans",
              icon: MenuLoanVue,
              bgColor: "rgba(255, 105, 67, 0.07)",
              path: "/loan",
              inApp: true
            },
            {
              title: "Investments",
              description: "Earn while you sleep",
              icon: MenuInvestmentVue,
              bgColor: "rgba(56, 96, 255, 0.07)",
              path: "/invest",
              inApp: true
            },
            {
              title: "Loan Friends",
              description: "Borrow or Lend your friends",
              icon: MenuMarketplaceVue,
              bgColor: "rgba(255, 73, 171, 0.07)",
              path: "/loan-friends",
              inApp: true
            },
            {
              title: "Mobile App",
              description: "Loans, Pay bills & Invest",
              icon: MenuAssetFinancingVue,
              bgColor: "rgba(39, 231, 162, 0.07)",
              path: "/download-app",
              inApp: true
            },
          ],
        },
        {
          title: "Company",
          sub: [
            {
              title: "About us",
              description: "Solutions for everyone",
              icon: MenuAboutVue,
              bgColor: "rgba(255, 105, 67, 0.07)",
              path: "/about",
              inApp: true
            },
            {
              title: "Careers",
              description: "Join us",
              icon: MenuCareerVue,
              bgColor: "rgba(21, 198, 198, 0.07)",
              path: "/career",
              inApp: true
            },
          ],
        },
        {
          title: "Media",
          sub: [
            {
              title: "Media",
              icon: MenuMedia,
              description: "Gallery, Videos",
              bgColor: "rgba(255, 118, 0, 0.07)",
              path: "/media",
              inApp: true,
            },
            {
              title: "Blog",
              icon: MenuBlog,
              description: "News and updates",
              bgColor: "rgba(56, 96, 255, 0.07)",
              path: "https://blog.sycamore.ng",
              inApp: false,
            },
          ],
        },
        {
          title: "Help",
          sub: [
            {
              title: "FAQs",
              icon: MenuDevelopersVue,
              description: "Answers to Common Questions",
              bgColor: "rgba(39, 231, 162, 0.07)",
              path: "/faqs",
              inApp: true,
            },
          ],
        },
      ],
      isAccordionOpen: false,
    };
  },
  props: {
    faq: Object,
  },
  methods: {
    handleScroll() {
      const scrollView = document.querySelector(".accordion-body");
      if (!this.isAccordionOpen) {
        if (window.scrollY >= 80) {
          scrollView.classList.add("bg-white");
          scrollView.classList.remove("bg-transparent");
        } else {
          scrollView.classList.add("bg-transparent");
          scrollView.classList.remove("bg-white");
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.nav-border-b:not(:last-child) {
  border-bottom: 2px dashed #ccc;
}

.drop {
  transition: max-height 0.7s ease-out;
}

.content {
  overflow: hidden;
  min-width: 100vw;
  width: 100vw;
  float: right;
  background-color: #fff;
  border-radius: 0 0 1rem 1rem;
  z-index: 999;
}

.accordion-body {
  margin-bottom: 1rem;
  /* border-radius: 25px; */
  /* margin: 2rem 0rem; */
}

.contact {
  background-color: #f9faf9;
}

.container {
  display: flex;
  flex-direction: column;
}

.message-content {
  padding: 20px;
}

.message-content li {
  display: flex;
  margin-bottom: 10px;
}

.message-content span {
  margin-right: 1.7rem;
}

.accordion-caret {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
}
</style>
