import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import UrlRedirect from "../data/UrlRedirect";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Invest from "../views/Invest.vue";
import Loan from "../views/Loan";
import Faq from "../views/Faq.vue";
import Waitlist from "../views/Waitlist.vue";
import Career from "../views/Career.vue";
import Terms from "../views/Terms.vue";
import NotFound from "../views/NotFound.vue";
import Privacy from "../views/Privacy.vue";
import LoanFriends from "../views/LoanFriends.vue";
import DownloadApp from "../views/DownloadApp.vue";
import CookiePolicy from "../views/CookiePolicy.vue";
import Media from "../views/Media.vue";
import Referral from "../views/Referral.vue";
import Amu from "../views/Amu.vue";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/invest",
		name: "Invest",
		component: Invest
	},
	{
		path: "/loan",
		name: "Loan",
		component: Loan
	},
	{
		path: "/faqs",
		name: "Faq",
		component: Faq
	},
	{
		path: "/waitlist",
		name: "Waitlist",
		component: Waitlist
	},
	{
		path: "/career",
		name: "Career",
		component: Career
	},
	{
		path: "/terms",
		name: "Terms",
		component: Terms
	},
	{
		path: "*",
		name: "NotFound",
		component: NotFound
	},
	{
		path: "/privacy",
		name: "Privacy",
		component: Privacy
	},
	{
		path: "/loan-friends",
		name: "LoanFriends",
		component: LoanFriends
	}, 
	{
		path: "/download-app",
		name: "DownloadApp",
		component: DownloadApp
	},
	{
		path: "/cookie-policy",
		name: "CookiePolicy",
		component: CookiePolicy
	},
	{
		path: "/media",
		name: "Media",
		component: Media
	},
	{
		path: "/referral/:id",
		name: "Referral",
		component: Referral
	},
	{
		path: "/amu",
		name: "Amu",
		component: Amu
	},


	{
		path: "/fgloan",
		redirect: "/"
	},
	{
		path: "/foodhamper",
		redirect: "/"
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,

	scrollBehavior: (to, _from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { selector: to.hash, behavior: "smooth" };
		} else {
			window.scrollTo(0, 0);
		}
	}
});

router.beforeEach((to, from, next) => {
	const routeName = to.path;
  
	UrlRedirect.filter(element => {
		if (element.oldUrl == routeName) {
			window.location.href = element.newUrl;
		}
		next();
	});
});

export default router;
