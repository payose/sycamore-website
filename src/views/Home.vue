<template>
	<div id="home">
		<!-- HERO SECTION -->
		<particles />
		<div
			class="pt-32 py-4 bg-opacity- bg-gradient-to-b from-lightPrimary to-lighterPrimary flex flex-col md:flex-row items-center px-6 md:px-40"
		>
			<div class="md:w-1/2">
				<h1 class="text-3xl md:text-6xl text-gray07 font-semibold">
					<vue-typer
						:text="['Achieve', 'Lend', 'Borrow']"
						:repeat="Infinity"
						:shuffle="false"
						initial-action="typing"
						:pre-type-delay="200"
						:type-delay="100"
						:pre-erase-delay="4000"
						:erase-delay="100"
						erase-style="backspace"
						:erase-on-complete="false"
						caret-animation="blink"
						@typed="onTyped"
					></vue-typer>
					more with Sycamore.
				</h1>
				<p class="text-gray07 text-opacity-70 md:text-lg mt-5">
					With our exciting products, there’s more for you. Get quick
					loans, invest, lend friends, pay bills and make transfers on
					the go.
				</p>
			</div>
			<!-- LOAN CALCULATOR -->
			<div class="w-full md:w-1/2 md:pl-12 mt-8">
				<widget />
			</div>
			<!-- </div> -->
		</div>
		<!-- WHAT WE OFFER -->
		<div class="pt-20 pb-8 md:pb-28 px-10 md:px-0">
			<div class="flex md:justify-center">
				<p class="text-2xl md:text-3xl text-gray07 font-semibold mb-12">
					What we offer
				</p>
			</div>
			<div class="hidden md:block -mb-8 overflow-x-hidden">
				<div class="border border-dashed border-primary" />
			</div>
			<div class="flex flex-col md:flex-row justify-between md:mx-16">
				<div class="block md:hidden">
					<div
						class="border border-dashed border-primary absolute z-0 left-16 w-0"
						style="height: 460px"
					/>
				</div>
				<div
					class="flex flex-row md:flex-col md:items-center md:px-2 md:text-center w-full md:w-1/3 mb-10 md:mb-0 z-10"
					v-for="(item, index) in whatWeOfferArray"
					:key="index"
				>
					<div
						class="flex flex-col items-center justify-center self-start md:self-auto mr-3 md:mr-0 bg-white border border-primary h-14 w-14 rounded-full p-2"
					>
						<div
							class="flex flex-col items-center justify-center bg-primary text-white h-9 w-9 rounded-full"
						>
							<p class="text-2xl">{{ index + 1 }}</p>
						</div>
					</div>
					<div class="flex flex-col md:items-center">
						<p
							class="text-gray07 font-semibold text-lg mt-5 mb-3 md:mb-5"
						>
							{{ item.title }}
						</p>
						<p
							class="text-gray07 text-xs md:text-sm text-opacity-70"
						>
							{{ item.description }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- DOWNLOAD THE SYCAMORE APP -->
		<div class="px-4 md:mt-40 md:w-8/12 m-auto">
			<div
				class="mock-up-container bg-gray07 rounded-xl md:rounded-r-20 relative flex flex-col md:flex-row text-center md:text-left pt-8 md:px-14 md:py-14"
			>
				<div class="md:w-7/12 px-3 md:px-0 md:pt-0">
					<p
						class="text-xl md:text-5xl text-white font-semibold md:leading-extra-loose"
					>
						Download Sycamore
					</p>
					<h3
						class="text-grayF8 text-opacity-70 mt-2 text-xs font-light md:text-sm"
					>
						All in one app: Get loans, Lend friends, Pay Bills, and
						Invest.
					</h3>
					<div
						class="flex justify-center md:justify-start mt-4 md:mt-9"
					>
						<span class="mr-3">
							<a
								target="_blank"
								href="https://apps.apple.com/ng/app/sycamore-ng/id1592757960"
							>
								<img
									src="../assets/playstore.svg"
									class="md:w-40"
									alt=""
								/>
							</a>
						</span>

						<span class="">
							<a
								target="_blank"
								href="https://play.google.com/store/apps/details?id=ng.sycamore.app2"
							>
								<img
									src="../assets/appstore.svg"
									class="md:w-40"
									alt=""
								/>
							</a>
						</span>
					</div>
				</div>
				<img
					src="@/assets/sycamore-app-screen.png"
                    alt="sycamore app interface"
                    loading="lazy"
					class="mock-up md:bottom-1 md:right-0"
				/>
			</div>
		</div>

		<!-- OUR UNIQUE APROACH -->
		<div
			class="md:text-left mx-6 md:p-20 mt-16 md:pt-36 md:w-4/5 md:m-auto"
		>
			<div class="md:mb-16">
				<p class="text-gray07 text-2xl md:text-3x font-semibold">
					Our unique approach
				</p>
			</div>
			<div class="flex flex-col md:flex-row justify-between">
				<div
					class="flex-1 text-left md:px-3 mt-6 md:mt-0"
					v-for="(approach, index) in approaches"
					:key="index"
				>
					<component :is="approach.component" />
					<div>
						<p class="text-gray07 text-xl font-semibold my-4">
							{{ approach.title }}
						</p>
						<p
							class="text-gray07 text-opacity-70 text-xs md:text-sm"
						>
							{{ approach.description }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Our Statistics -->
		<div
			class="mx-6 md:p-20 mt-16 md:pt-36 md:w-4/5 md:m-auto"
			id="statistics"
			ref="stats"
		>
			<div class="md:mb-16 mb-8 md:text-center text-left">
				<p
					class="text-gray07 lg:text-2xl md:text-lg text-base font-semibold"
				>
					By the Numbers
				</p>
				<p class="text-xs md:text-sm text-gray07 mt-1.5">
					Take a quick glimpse at our performance metrics
				</p>
			</div>
			<div
				class="font-semibold justify-between items-center grid xl:grid-cols-3 grid-cols-2 lg:gap-8 gap-4"
			>
				<StatCard
					v-for="(data, index) in statisticsArray"
					:key="data.title"
					v-bind="data"
					:variant="data.variant"
					:class="
						index === 2 &&
						'col-span-2 w-1/2 mx-auto xl:w-full xl:col-span-1'
					"
				/>
			</div>
		</div>

		<!-- OUR PARTNERS -->
		<div class="px-0 bg-grayF89 overflow-x-scroll mt-10">
			<div class="flex py-12 md:py-12">
				<p class="text-xl text-gray07 font-semibold px-6">
					Solutions that work for you
				</p>
			</div>

			<div class="overflow-x-scroll pb-14" id="partners">
				<div class="flex items-center justify-between m-auto min-w-max">
					<div
						class="bg-white h-20 flex mx-4 items-center rounded-lg shadow-xl"
						v-for="(brand, index) in brands"
						:key="index"
					>
						<img
							:src="require(`@/assets/brands/${brand.name}.png`)"
                            :alt="brand.name"
                            loading="lazy"
							class="md:w-48 px-8"
						/>
					</div>
				</div>
			</div>
		</div>

		<!--CUSTOMER TESTIMONIES -->
		<div class="pt-16 md:pt-36 mb-12 pl-6 md:pl-40">
			<div>
				<p class="text-gray07 text-xl md:text-3xl font-semibold">
					What our customers say
				</p>
			</div>
			<div class="overflow-x-auto">
				<div
					class="flex flex-row mt-6 md:mt-14 overflow-x-scroll"
					id="container"
					style="scroll-behavior: smooth"
				>
					<div
						v-for="(testimonial, index) in testimonialsArray"
						:key="index"
						class="min-w-4/5 md:min-w-2/5 p-4 md:p-7 border border-gray-300 rounded-lg mr-3 md:mr-6 hover:border-primary transition-all"
					>
						<p class="text-gray26 text-sm md:text-base">
							{{ testimonial.name }}
						</p>
						<p class="text-s13 text-gray4F">
							{{ testimonial.city }}
						</p>
						<p class="text-xs md:text-xs text-gray52 leading-5 mt-6">
							{{ testimonial.text }}
						</p>
					</div>
				</div>
				<div class="pt-12 m-auto text-center">
					<button @click="slideRight()" class="pr-5">
						<previous />
					</button>
					<button @click="slideLeft()">
						<next />
					</button>
				</div>
			</div>
		</div>
		<div
			v-show="showDisclaimer"
			class="bg-black bg-opacity-60 w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center z-50"
		>
			<div
				class="bg-white w-[80%] md:w-[60%] h-[70%] md:h-[60%] rounded-[20px] relative flex flex-col md:flex-row items-center"
			>
				<div
					class="absolute right-4 top-2 bg-grayF8 h-[25px] w-[25px] md:h-[40px] md:w-[40px] rounded-full flex items-center justify-center cursor-pointer"
					@click="showDisclaimer = !showDisclaimer"
				>
					<img src="@/assets/X.svg" class="w-[15px]" />
				</div>
				<div class="w-full md:w-1/2 md:h-full">
					<img
						src="@/assets/importantnotice.jpg"
                        loading="lazy"
						class="w-full h-full rounded-t-[20px] md:rounded-tr-[0px] md:rounded-l-[20px]"
					/>
				</div>
				<div
					class="w-full md:w-1/2 h-full px-5 py-5 md:px-10 md:py-12 overflow-y-scroll"
				>
					<p
						class="text-gray07 text-sm md:text-xl font-semibold mb-5"
					>
						IMPORTANT NOTICE: Sycamore Integrated Solutions Limited
						(SycamoreNG) Distances Itself from Imposter “Get Loan”
					</p>
					<p
						class="text-gray07 text-opacity-60 leading-5 md:leading-8 text-xs mb-10"
					>
						Sycamore Integrated Solutions Limited (SycamoreNG)
						categorically denies that it is involved in the practice
						that has been alleged and is not, in any way involved
						or, in any manner or form, with the app,
						<span class="text-red-500 font-semibold">“Get Loan”</span>
						which we only became aware of, following the report in
						the news by the FCCPC. We state unequivocally that
						Sycamore Integrated Solutions Limited has no affiliation
						with the entity “Get Loan” and their actions are in no
						way associated with our company. The only app owned by
						us is “Sycamore”.
					</p>
					<a
						class="w-full"
						href="https://blog.sycamore.ng/important-notice-sycamore-integrated-solutions-limited-sycamoreng-distances-itself-from-imposter-get-loan/"
						target="_blank"
					>
						<div class="flex flex-col items-center">
							<button
								class="bg-primary text-white text-sm rounded-md py-3 px-10 w-[80%]"
							>
								Read More
							</button>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { VueTyper } from "vue-typer";
import Widget from "@/components/Widget.vue";
import Appstore from "@/svg/Appstore.vue";
import Playstore from "@/svg/Playstore.vue";
import TreeStructureVue from "@/svg/TreeStructure.vue";
import ChartPieSliceVue from "@/svg/ChartPieSlice.vue";
import ShieldChevronVue from "@/svg/ShieldChevron.vue";
import Previous from "@/svg/Previous.vue";
import Next from "@/svg/Next.vue";
import StatCard from "@/components/StatisticsCard.vue";

const statistics = [
  {
    title: "Loans Disbursed",
    value: "0",
    variant: "loan bg-size",
  },
  {
    id: 2,
    title: "Businesses & Individuals Supported",
    variant: "individual-supported bg-size",
  },
  {
    id: 3,
    title: "Active Lenders",
    variant: "active-lenders bg-size",
  },
];

const whatWeOffer = [
	{
		title: "Investing",
		description:
			"Gain total control of your finance. Enjoy up to 16.5% returns per annum on your investments.",
	},
	{
		title: "Borrowing",
		description:
			"Turn your dreams to reality with our no collateral loans for salaried employees and business owners.",
	},
	{
		title: "Loan friends",
		description:
			"Manage and track the money you lend your friends and family with ease.",
	},
];

const uniqueApproaches = [
	{
		title: "Alternative data",
		description:
			"We analyse a broad range of alternative data points ranging from social media to bank statements.",
		component: TreeStructureVue,
	},
	{
		title: "Psychometric analysis",
		description:
			"In determining the eligibility of a borrower, one of the things we consider is the character and intergrity of individual by way of behavioural deduction.",
		component: ChartPieSliceVue,
	},
	{
		title: "Secured lending",
		description:
			"Depending on our risk assessment of the loan applicant in question, some of our loans are collaterised with movable assets.",
		component: ShieldChevronVue,
	},
];

const testimonials = [
	{
		name: "Ifunanya Igweze",
		city: "Lagos",
		text: "Finally, I needed my account statement from Sycamore.NG. I didn't need to contact them because the app is easy to navigate. Through their app, I requested my account report, which was sent to my email in less than 60 seconds. Very seamless and timely. I must also note that the report was the easiest to understand. You can download the app and try it out yourself. Putting Providus bank and Sycamore side by side, you will agree with me that even though they both boast of good customer care, Sycamore gave me the most timely and seamless experience. I also found their report very easy to understand.",
	},
	{
		name: "Mrs Oluwatoyin Adeosun",
		city: "Lagos",
		text: "Dear Sycamore Customer Service, it’s been a pleasure dealing with Sycamore over the past 12 months. I have received absolute good service as you have never missed any interest payment. Hence I plan to continue with the investment I have with you and I plan to top it up sometime in the new year 2021.",
	},
	{
		name: "Joy Esozle-Amaye",
		city: "Lagos",
		text: "Like I said, you guys are doing something different to attain this height of customer experience. Loans shouldn't be complicated to access. You guys have proven that it can be done, and like you affirmed, the TAT ('Turn Around Time') will even further improve...now that's what differentiation is all about! ",
	},
	{
		name: "Divine Children's Place",
		city: "Lagos",
		text: "I really enjoyed the service from sycamore it was fast and the online process was easy and straightforward. We look forward to always working with them.",
	},
	{
		name: "Obelanse Enterprises",
		city: "Lagos",
		text: "I got my loan within 24 hours!!! Well done guys.",
	},
	{
		name: "Chidinma Akaniro",
		city: "Lagos",
		text: " I spoke to a friend who suggested I take a loan from Sycamore. I had never taken a loan before and wasn't sure what to expect. I contacted the Sycamore team and in just a few hours, my loan was processed and approved. To say I was impressed is a gross understatement. ",
	},
	{
		name: "Ayodeji Osisami",
		city: "Lagos",
		text: "Sycamore has been a blessing to the family business. At the time when we were short of funds to pay salaries, sycamore came to the rescue and sent funds in less than a hour. I also was looking for where to put some of my savings and sycamore gave me the best rate possible while guaranteeing the safety of my funds.",
	},
	{
		name: "Ola Nnachi",
		city: "Lagos",
		text: "Their customer service is excellent and prompt. Remittance within 24 hours is real. No collateral, no processing fees and rates are competitive with any other Microfinance Institution. I recommend Sycamore to any Business.",
	},
];

export default {
	name: "Home",
	components: {
		VueTyper,
		Widget,
		Appstore,
		Previous,
		Next,
		StatCard,
		Playstore,
	},
	data() {
		return {
			brands: [
				{
					name: "mono",
					link: "",
				},
				{
					name: "paystack",
					link: "",
				},
				{
					name: "sendgrid",
					link: "",
				},
				{
					name: "remitta",
					link: "",
				},
				{
					name: "mbs",
					link: "",
				},
			],
			showDisclaimer: false,
		};
	},
	computed: {
		approaches() {
			return uniqueApproaches;
		},
		testimonialsArray() {
			return testimonials;
		},
		whatWeOfferArray() {
			return whatWeOffer;
		},
		statisticsArray() {
			return statistics;
		},
	},

	methods: {
		slideLeft() {
			document.getElementById("container").scrollLeft += 100;
		},
		slideRight() {
			document.getElementById("container").scrollLeft -= 100;
		},
		scrollPartners() {
			const partnersContainer = document.getElementById("partners");
			const partnersScrollWidth = partnersContainer.scrollWidth;

			window.addEventListener("load", () => {
				self.setInterval(() => {
					if (partnersContainer.scrollLeft !== partnersScrollWidth) {
						partnersContainer.scrollTo(
							partnersContainer.scrollLeft + 1,
							0
						);
					} else {
						partnersContainer.scrollLeft = 0;
					}
				}, 15);
			});
		},

		onTyped(typedString) {
			const vueTyperSelectorArray = document.querySelectorAll(
				".vue-typer .custom.char.typed"
			);
			for (let index = 0; index < vueTyperSelectorArray.length; index++) {
				const vueTyperSelector = vueTyperSelectorArray[index];
				if (vueTyperSelector && vueTyperSelector.style) {
					if (typedString === "Achieve") {
						vueTyperSelector.style.color = "#073042";
					} else if (typedString === "Lend") {
						vueTyperSelector.style.color = "#26C165";
					} else if (typedString === "Borrow") {
						vueTyperSelector.style.color = "#E23939";
					}
				}
			}
		},
	},

	mounted() {
		this.scrollPartners();
	},
};
</script>

<style scoped>
.mock-up {
	position: relative;
	width: 50%;
	padding-top: 28px;
	margin: auto;
}
.loan {
	background-image: url("../assets/statistics/coins-hand.svg");
	background-repeat: no-repeat;
	background-position: bottom left;
	border-color: #073042;
	color: #073042;
}
.individual-supported {
	background-image: url("../assets/statistics/users-01.svg");
	background-repeat: no-repeat;
	background-position: bottom right;
	border-color: #26c165;
	color: #26c165;
}
.active-lenders {
	background-image: url("../assets/statistics/handshake.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-position: top right;
	border-color: #ff7600;
	color: #ff7600;
}
@media only screen and (max-width: 759px) {
	.bg-size {
		background-size: 100px;
	}
}
@media only screen and (min-width: 759px) {
	.mock-up {
		position: absolute;
		width: 45%;
		margin-bottom: -4px;
		border-radius: 0px 0px 20px 0px;
	}
}

::-webkit-scrollbar {
	display: none;
}
</style>
