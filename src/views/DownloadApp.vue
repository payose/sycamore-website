<template>
	<main class="main">
		<particles />
		<section
			class="bg-opacity-5 bg-gradient-to-b from-lightSecondary to-lighterSecondary px-6 pt-20 pb-10 md:pb-24 md:pt-52">
			<div class="flex flex-col justify-center items-center md:w-9/12 m-auto">
				<div class="px-6 md:px-2 text-center md:text-left text-gray07">
					<h1 class="text-2xl md:text-5xl font-semibold">
						Download Sycamore
					</h1>
					<h1 class="text-opacity-70 mt-7 text-sm md:text-base">
						All in one app: Get loans, Lend friends, Pay Bills, and Invest.
					</h1>
				</div>

				<div class="mt-8">
					<div class="flex gap-x-3">
						<a target="_blank" href="https://apps.apple.com/ng/app/sycamore-ng/id1592757960">
							<div
								class="bg-white border border-gray07 px-4 md:px-7 py-3 flex rounded-2xl items-center gap-x-2">
								<appstore />

								<div class="text-gray07">
									<p class="text-xxs">Get it on</p>
									<p class="text-sm font-semibold">Appstore</p>
								</div>
							</div>
						</a>

						<a target="_blank" href="https://play.google.com/store/apps/details?id=ng.sycamore.app2">
							<div
								class="bg-white border border-gray07 px-4 md:px-7 py-3 flex rounded-2xl items-center gap-x-2">
								<playstore />

								<div class="text-gray07">
									<p class="text-xxs">Get it on</p>
									<p class="text-sm font-semibold">Playstore</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- LEND BORROW SECTION -->
		<section class="blue-bg px-6 pt-10 md:pt-0">
			<div class="flex flex-col md:flex-row items-center md:w-9/12 m-auto">
				<div class="md:w-1/2 mt-4 md:mr-24 text-white">
					<h2 class="text-2xl md:text-5xl font-semibold">
						Get urgent 2k when you need it
					</h2>

					<p class="text-sm md:text-lg font-light md:w-3/4 mt-5 opacity-70">
						Lend or borrow money from friends, set reminders for repayments, add
						interests at will
					</p>
				</div>

				<div class="pt-6 md:pt-20">
					<img src="../assets/loan_friends.png" class="w-2/4 md:w-10/12 m-auto" alt="loan friends on sycamore" />
				</div>
			</div>
		</section>

		<!-- INSTANT CASH SECTION -->
		<section class="px-6 pt-10 md:pt-28">
			<div class="flex flex-col-reverse md:flex-row items-center md:w-9/12 m-auto">
				<div class="mt-6 md:mt-0">
					<img src="../assets/friends.png" class="w-2/4 md:w-10/12 m-auto md:mr-28" alt="earn referral" />
				</div>

				<div class="md:w-1/2 mt-4">
					<h2 class="text-2xl md:text-5xl font-semibold text-gradient">
						Be a friend with benefits
					</h2>
					<p class="text-sm md:text-lg text-blue46 md:w-3/4 mt-5">
						Pay for your friends with <span class="text-purple-800">PayForMe</span> on <router-link to="/faqs" class="text-primary">Sycamore</router-link> and get your money back when they can afford it.
					</p>
				</div>
			</div>
		</section>

		<!-- BILL PAYMENT SECTION -->
		<section class="yellow-bg px-6 pt-10 md:pt-0">
			<div class="flex flex-col md:flex-row items-center md:w-9/12 m-auto">
				<div class="md:w-1/2 mt-4 md:mr-24 text-white">
					<h2 class="text-2xl md:text-5xl font-semibold">
						Bills Payment
					</h2>
					<p class="text-sm md:text-lg font-light md:w-3/4 mt-5 opacity-70">
						Enjoy seamless transactions when you send money to people and pay
						for all sorts of bills - airtime, data, cable subscriptions,
						utilities
					</p>
				</div>

				<div class="pt-2 md:pt-20">
					<img src="../assets/yellow.png" class="w-2/4 md:w-10/12 m-auto" alt="pay your bills with ease" />
				</div>
			</div>
		</section>

		<!-- FAQ TABS SECTION -->
		<section class="px-4 py-10 md:py-28">
			<div class="flex flex-col items-center md:w-9/12 m-auto">
				<div class="flex gap-x-4 md:gap-x-28">
					<button v-for="(tab, index) in tabs" 
                        :key="index"
                        @click="activeTab = tab"
						:class="`${activeTab.name == tab.name
								? 'text-gray07 font-semibold border-b-2 border-primary'
								: ''
							}`
							" class="text-gray-500 text-sm md:text-base py-4 px-1 md:px-6 block outline-none font-medium transition-all cursor-pointer">
						{{ tab.name }}
					</button>
				</div>

				<div class="md:w-9/12 m-auto">
					<div v-for="(faq, index) in activeTab.faqs" :key="index">
						<accordion :faq="faq" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import { LoanfriendsFaq, SycamoreFaqs, SupportFaqs } from "@/data/Faqs.js";
import Accordion from "../components/Accordion.vue";
import Appstore from "@/svg/Appstore.vue";
import Playstore from "@/svg/Playstore.vue";

export default {
	metaInfo: {
		title: "Sycamore Mobile App | ",
		titleTemplate:
			"%s Download Sycamore App - Get loans, Lend friends, Pay Bills & Invest",
		meta: [
			{
				vmid: "description",
				name: "description",
				content:
					"Download Sycamore App - Get loans, Lend to friends or borrow money from friends, Pay Bills, and Invest and earn returns. Download Sycamore App Today"
			},
			{
				vmid: "keywords",
				name: "keywords",
				content:
					"sycamore school login, sycamore loan apk, sycamore investment, sycamore education, sycamore loan nairaland, sycamore credit borrow money app, sycamore referral code, nigeria loan app on iphone, remita loans for civil servants"
			}
		]
	},

	components: {
		Accordion,
		Appstore,
		Playstore
	},

	data() {
		return {
			activeTab: '',
			tabs: [
                {name: "Loan Friends", faqs: LoanfriendsFaq},
                {name: "Sycamore 2.0", faqs: SycamoreFaqs},
                {name: "Support", faqs: SupportFaqs}
            ]
		};
	},

	mounted() {
        this.activeTab = this.tabs[0]
	}
};
</script>

<style scoped>
.text-gradient{
	background: linear-gradient(180deg, #1A2837 0%, #031A05 100%);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
}
.blue-bg {
	background-image: url("../assets/blue-bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.yellow-bg {
	background-image: url("../assets/yellow-bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
</style>
