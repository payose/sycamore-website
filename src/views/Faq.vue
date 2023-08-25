<template>
  <main class="main">
    <particles />

    <section class="">
      <div
        class="h-42 w-full pt-28 pb-10 md:pt-48 md:pb-20 bg-no-repeat bg-cover flex flex-col justify-center items-center px-6 md:px-20 banner"
      >
        <div class="absolute left-0 bottom-30 z-0">
          <FaqPattern1 />
        </div>
        <div class="absolute right-0 bottom-40 z-0">
          <FaqPattern2 />
        </div>

        <div
          class="text-center text-gray07 font-semibold text-2xl md:text-4xl md:w-1/3"
          style="line-height: 4rem"
        >
          <h1>Frequently Asked Questions</h1>
        </div>

        <!-- <div class="w-full md:w-5/12 mt-8 relative">
          <input
            type="text"
            placeholder="Search for anything"
            class="search-input focus:shadow-md"
            v-model="search"
          />
          <span @click="checkResults" class="search right-4 top-4">
            <search />
          </span>
        </div> -->
      </div>

      <!-- FAQ TABS -->
      <div>
		<nav class="flex flex-row justify-center">
			<button
				v-for="(tab, index) in tabs"
				:key="index"
				@click="activeTab = tab"
				:class="`${
				activeTab.name == tab.name
					? 'text-gray07 font-semibold border-b-2 border-primary'
					: ''
				}`"
				class="text-gray-500 text-xs md:text-base py-4 px-1 md:px-6 block outline-none font-medium transition-all duration-500 cursor-pointer"
			>
				{{ tab.name }}
			</button>
		</nav>

        <!-- FREQUENTLY ASKED QUESTIONS -->
        <div class="mb-12">
            <div class="md:w-2/3 m-auto">
				<div v-for="(faq, index) in activeTab.faqs" :key="index">
					<accordion :faq="faq" />
				</div>
            </div>
            <br />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { LoanfriendsFaq, SycamoreFaqs,InvestmentFaq,LoanFaqs,GeneralFaqs,
} from "@/data/Faqs.js";
import Accordion from "../components/Accordion.vue";
import FaqPattern1 from "@/svg/FaqPattern1.vue";
import FaqPattern2 from "@/svg/FaqPattern2.vue";
export default {
    name: "Faq",

    metaInfo: {
        title: "Sycamore FAQ | ",
        titleTemplate: "%s Fequently Asked Questions -Sycamore.ng",
        meta: [
        {
            vmid: "description",
            name: "description",
            content:
            "Sycamore.ng Frequently Asked Questions - Learn about Sycamore, Sycamore App, Loan Friends, How to apply for loans, Investment, Loan Repayments etc.",
        },
        {
            vmid: "keywords",
            name: "keywords",
            content:
            "sycamore, sycamore solutions, sycamore FAQ, Frequently Asked Questions",
        },
        ],
    },

    components: {
        Accordion,
        FaqPattern1,
        FaqPattern2,
    },

    data() {
        return {
            search: "",
            activeTab: "",
            tabs: [
                { name: "General", faqs: GeneralFaqs },
                { name: "Sycamore 2.0", faqs: SycamoreFaqs },
                { name: "Investment", faqs: InvestmentFaq },
                { name: "Support", faqs: LoanfriendsFaq },
                { name: "Loan Friends", faqs: LoanFaqs },
            ]
        };
    },

    mounted() {
        this.activeTab = this.tabs[0];
    },
};
</script>

<style lang="scss" scoped>

.banner {
  background: linear-gradient(
    180deg,
    rgba(246, 171, 25, 0.1) 0%,
    rgba(246, 171, 25, 0) 100%
  );
  position: relative;
}

.search {
  position: absolute;
  text-align: center;
  font-size: 24px;
  z-index: 2;
  cursor: pointer;
}

.search-input {
  border: 1px solid rgba(7, 48, 66, 0.9);
  border-radius: 10px;
}

input {
  outline: none !important;
}
</style>
