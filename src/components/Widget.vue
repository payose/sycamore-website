<template>
	<div class="animate__animated animate__zoomIn bg-white md:px-10 py-7 shadow-xl rounded-2xl">
		<div class="md:px-10 flex justify-center">
			<h1 v-if="header" class="font-bold text-gray07 text-center">
				Get a Loan
			</h1>

			<div v-else class="flex bg-grayF5" style="padding: 2px; border-radius: 14.5px">
				<div v-for="(tab, index) in tabs" :key="index" @click="() => switchTab(index)" :class="
					tabIndex === index
						? `${tab.bgColor} text-white`
						: 'bg-grayF5 text-gray8D'
				" class="py-2 px-4 md:px-12 rounded-xl cursor-pointer">
					<p class="text-xs md:text-sm">{{ tab.title }}</p>
				</div>
			</div>
		</div>

		<div v-if="tabIndex === 0" class="mx-4 md:mx-0">
			<div class="mt-6 md:mt-10">
				<label for="borrowAmount" class="text-gray07 text-xs md:text-sm">
					How much?
				</label>

				<input id="borrowAmount"
					class="bg-grayF5 text-gray07 text-xs font-medium md:text-base border-0 outline-none mt-3"
					type="text"
					min="100000"
					max="5000000"
					maxlength="12"
					@keypress="validate_onlyNumberKeys($event)"
					:value="Number(borrowValues.amount).toLocaleString()"
					@input="event => { changeText(event.target.value, 'borrowValues', 'amount')}" 
				/>
				<span v-if="errorMsg.borrowValues" class="text-xxs text-secondary">Amount can not be less than  ₦100,000</span>
			</div>

			<div class="flex items-center w-full mt-6 md:mt-10">
				<div class="w-1/3 md:w-1/2">
					<label for="borrowDuration" class="text-gray07 text-xs md:text-sm">
						How many months?
					</label>
					<input id="borrowDuration"
						class="bg-grayF5 text-gray07 text-xs md:text-base border-0 outline-none mt-3 font-medium text-center"
						type="number"
						min="1"
						max="18"
						v-model="borrowValues.months"
						@input="event => { checkDuration(event.target.value)}"
					/>
					<span v-if="errorMsg.duration" class="text-xxs text-secondary">Tenor can not be less than 3 months</span>

				</div>
				<div class="w-2/3 md:w-1/2 flex flex-col items-end">
					<p class="text-gray07 text-xs md:text-sm">Monthly repayment</p>
					<p class="text-gray07 text-xl md:text-2xl font-medium mt-6">
						₦{{ Number(calculateLoanMonthlyRepayment).toLocaleString() }}
					</p>
				</div>
			</div>

			<div class="mt-6 md:mt-10 flex justify-center">
				<a href="https://bit.ly/download-sycamore" id="minMax" :class="errorMsg.borrowValues || errorMsg.duration ? 'disable-link' : ''" target="_blank">
					<button class="px-8 py-3 text-xs md:text-sm bg-grayF3 text-secondary rounded-md">
						<div class="flex items-center">
							<span class="mr-3 text-xs md:text-sm">
								<arrow-up-right-red />
							</span>
							Request loan
						</div>
					</button>
				</a>
			</div>
		</div>

		<div v-else class="mx-4 md:mx-0">
			<div class="mt-6 md:mt-10">
				<label for="investAmount" class="text-gray07 text-xs md:text-sm">
					How much do you want to lend?
				</label>
				<input id="investAmount"
					class="bg-grayF5 text-gray07 text-xs md:text-base border-0 outline-none mt-3 font-medium"
					type="text"
					min="100000"
					max="5000000"
					maxlength="12"
					:value="Number(lendValues.amount).toLocaleString()"
					@keypress="validate_onlyNumberKeys($event)"
					@input="event => { changeText(event.target.value, 'lendValues', 'amount')}"
				/>
				<span v-if="errorMsg.lendValues" class="text-xxs text-secondary">Amount can not be less than  ₦100,000</span>
			</div>
			<div class="flex items-center w-full mt-6 md:mt-10">
				<div class="w-1/3 md:w-1/2">
					<label for="borrowDuration" class="text-gray07 text-xs md:text-sm">
						How many months?
					</label>
					<input id="borrowDuration"
						class="bg-grayF5 text-gray07 border-0 outline-none mt-3 text-xs md:text-base text-center font-medium"
						type="number"
						min="1"
						max="18"
						v-model="lendValues.months"
						@input="event => { checkDuration(event.target.value)}"
					/>
					<span v-if="errorMsg.duration" class="text-xxs text-secondary">Tenor can not be less than 3 months</span>
				</div>
				<div class="w-2/3 md:w-1/2 flex flex-col items-end">
					<p class="text-gray07 text-xs md:text-sm">Total at maturity</p>
					<p class="text-gray07 text-xl md:text-2xl mt-6 font-medium">
						₦{{
							Number(Math.floor(calculateInvestmentPayment)).toLocaleString(0)
						}}
					</p>
				</div>
			</div>
			<div class="mt-6 md:mt-10 flex justify-center">
				<a href="https://bit.ly/download-sycamore" id="minMax" :class="errorMsg.lendValues || errorMsg.duration ? 'disable-link' : ''" target="_blank">
					<button class="px-8 py-3 text-sm bg-grayF3 text-primary rounded-md">
						<div class="flex items-center text-xs md:text-sm">
							<span class="mr-3">
								<arrow-up-right-green /> 
							</span>
							Create investment
						</div>
					</button>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import ArrowUpRightRed from "@/svg/ArrowUpRightRed.vue";
import ArrowUpRightGreen from "@/svg/ArrowUpRightGreen.vue";

export default {
	components: {
		ArrowUpRightRed,
		ArrowUpRightGreen
	},
	data() {
		return {
			tabIndex: 0,
			borrowValues: {
				amount: 100000,
				months: 3
			},
			lendValues: {
				amount: 100000,
				months: 3
			},
			errorMsg: {
				borrowValues: false,
				lendValues: false,
				duration: false
			},

			DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL
		};
	},
	props: {
		header: String
	},

	computed: {
		calculateLoanMonthlyRepayment() {
			if (this.borrowValues.amount <= 1 || this.borrowValues.months < 1) {
				return 0;
			}
			const monthlyPayment =
				this.borrowValues.amount / this.borrowValues.months;
			const interest = (5 / 100) * this.borrowValues.amount;
			const totalPayment = monthlyPayment + interest;
			return Math.round(totalPayment);
		},

		calculateInvestmentPayment() {
			if (this.lendValues.amount <= 1 || this.lendValues.months < 1) {
				return;
			}
			let interestPercentage = 0;
			if (
				this.lendValues.amount >= 100000 &&
				this.lendValues.amount < 1000000
			) {
				interestPercentage = 11;
			} else if (
				this.lendValues.amount >= 1000000 &&
				this.lendValues.amount < 10000000
			) {
				interestPercentage = 14;
			} else if (
				this.lendValues.amount >= 10000000 &&
				this.lendValues.amount < 50000000
			) {
				interestPercentage = 15.5;
			} else if (this.lendValues.amount >= 50000000) {
				interestPercentage = 16.5;
			}

			const grossInterestAccruable =
				((this.lendValues.amount * (interestPercentage / 100)) / 365) *
				(this.lendValues.months * 30);

			return grossInterestAccruable + this.lendValues.amount;
		},

		tabs() {
			return [
				{
					title: "Borrow",
					bgColor: "bg-secondary"
				},
				{
					title: "Invest",
					bgColor: "bg-primary"
				}
			];
		},
	},

	methods: {
		switchTab(value) {
			this.tabIndex = value;
		},

		validate_onlyNumberKeys(event) {
			if (!/\d/.test(event.key)) return event.preventDefault();
		},

		routeToAuth(page) {
			const path = this.tabIndex === 0 ? "apply/loans" : "apply/investment";
			const amount =
				this.tabIndex === 0 ? this.borrowValues.amount : this.lendValues.amount;
			const duration =
				this.tabIndex === 0 ? this.borrowValues.months : this.lendValues.months;
			if (page === "login") {
				window.location.href = `${this.DASHBOARD_URL}${path}?amount=${amount}&duration=${duration}`;
			} else {
				window.location.href = `${this.DASHBOARD_URL}register?redirect=amount%3d${amount}%26duration%3d${duration}`;
			}
		},

		roundToTwoDecimal(num) {
			return +(Math.round(num + "e+2") + "e-2");
		},

		changeText(value = "", type, name) {
			const numberRegex = /^[,0-9]+$/;
			if (value?.match(numberRegex)) {
				const removeComma = value.replace(/,/gi, "");
				this[type][name] = removeComma;
				this.minMax(removeComma, type)
			}
		},

		checkDuration(value) {
			if (value < 3) {
				this.errorMsg.duration = true
			} else {
				this.errorMsg.duration = false
			}
		},

		minMax(value, type) {
			if (value < 100000) {
				this.errorMsg[type] = true
			} else {
				this.errorMsg[type] = false
			}
		}

	}
};
</script>

<style scoped>
.disable-link {
	pointer-events: none;
}
</style>
