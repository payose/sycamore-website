import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import UrlRedirect from "../data/UrlRedirect";

import Home from "../views/Home.vue";

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
		component: () => import(/*webpackChunkName: "about"*/ "../views/About.vue")
	},
	{
		path: "/invest",
		name: "Invest",
		component: () => import(/*webpackChunkName: "invest"*/ "../views/Invest.vue")
	},
	{
		path: "/loan",
		name: "Loan",
		component: () => import(/*webpackChunkName: "loan"*/ "../views/Loan.vue")
	},
	{
		path: "/faqs",
		name: "Faq",
		component: () => import(/*webpackChunkName: "faq"*/ "../views/Faq.vue")
	},
	{
		path: "/waitlist",
		name: "Waitlist",
		component: () => import(/*webpackChunkName: "waitlist"*/ "../views/Waitlist.vue")
	},
	{
		path: "/career",
		name: "Career",
		component: () => import(/*webpackChunkName: "career"*/ "../views/Career.vue")
	},
	{
		path: "/terms",
		name: "Terms",
		component: () => import(/*webpackChunkName: "terms"*/ "../views/Terms.vue")
	},
	{
		path: "*",
		name: "NotFound",
		component: () => import(/*webpackChunkName: "notfound"*/ "../views/NotFound.vue")
	},
	{
		path: "/privacy",
		name: "Privacy",
		component: () => import(/*webpackChunkName: "privacy"*/ "../views/Privacy.vue")
	},
	{
		path: "/loan-friends",
		name: "LoanFriends",
		component: () => import(/*webpackChunkName: "loanfriends"*/ "../views/LoanFriends.vue")
	}, 
	{
		path: "/download-app",
		name: "DownloadApp",
		component: () => import(/*webpackChunkName: "downloadapp"*/ "../views/DownloadApp.vue")
	},
	{
		path: "/cookie-policy",
		name: "CookiePolicy",
		component: () => import(/*webpackChunkName: "cookiepolicy"*/ "../views/CookiePolicy.vue")
	},
	{
		path: "/media",
		name: "Media",
		component: () => import(/*webpackChunkName: "media"*/ "../views/Media.vue")
	},
	{
		path: "/referral/:id",
		name: "Referral",
		component: () => import(/*webpackChunkName: "referral"*/ "../views/Referral.vue")
	},
	{
		path: "/amu",
		name: "Amu",
		component: () => import(/*webpackChunkName: "amu"*/ "../views/Amu.vue")
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
