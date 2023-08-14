<template>
	<div id="app">
		<div v-if="cookiesSet == false">
			<Cookies @cookieIsSet="hideCookie($event)" />
		</div>

		<div id="nav" v-if="$route.name !== 'Referral'">
			<div id="md">
				<Navbar />
			</div>

			<div id="sm">
				<Nav />
			</div>
		</div>

		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__fadeIn"
			leave-active-class="animate__animated animate__fadeOut"
		>
			<router-view />
		</transition>

		<Footer v-if="$route.name !== 'Referral'" />
	</div>
</template>

<script>
	import Navbar from "./components/Navbar";
	import Nav from "./components/Nav";
	import Footer from "./components/Footer";
	import Cookies from "./components/Cookies";
	export default {
		metaInfo: {
			title: "",
			titleTemplate:
			"%s Get Loans, Invest & Earn, Pay bills, Transfer money in Nigeria - Sycamore.ng",
			meta: [
			{
				vmid: "description",
				name: "description",
				content:
				"Get personal or business loans, Invest & earn, Lend or borrow money from friends, Manage & track your loans, Pay bills, Transfer money in Nigeria with Sycamore."
			},
			{
				vmid: "keywords",
				name: "keywords",
				content:
				"quick loan in Nigeria, quick cash loan, quick online loans in Nigeria, quick cash loan code, fast cash loans Lagos, 24hrs loan in Nigeria, petty cash loan, loan, Saving Money in Nigeria, Savings Account, Periodic savings, Fixed savings, Onetime savings, Digital savings, Savings Automation, High-interest rate, Save Money, FinTech, Online savings platform, Digital savings in Nigeria, Personal Finance, Investments, Wealth Management, savings account interest rate, saving account interest rate calculator, savings account with high interest, savings account promotions, monthly savings account, payday investor, payday automated savings, digital piggy bank, payday online investment, fixed savings rate, fixed savings high interest, fixed deposit, fixed deposit account"
			}
			]
		},
		
		components: {
			Navbar,
			Nav,
			Footer,
			Cookies
		},

		data() {
			return {
				cookiesSet: false
			};
		},

		methods: {
			hideCookie(isSet) {
				this.cookiesSet = isSet;
			}
		},

		mounted() {
			const decodedCookie = decodeURIComponent(document.cookie);
			const ca = decodedCookie.split(";");
			const c = ca.filter(item => item == " Sycamore");

			if (c.length != 0) {
				this.cookiesSet = true;
				// vm.$forceUpdate();
			}
		}
	};
</script>

<style scoped>
	@media only screen and (min-width: 760px) {
		#md {
			display: block;
		}
		#sm {
			display: none;
		}
	}

	@media only screen and (max-width: 759px) {
		#md {
			display: none;
		}
		#sm {
			display: block;
		}
	}
</style>
