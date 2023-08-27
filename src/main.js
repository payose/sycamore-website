/* eslint-disable vue/multi-word-component-names */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import particles from "@/components/Particles.vue";
import "./assets/css/tailwind.css";
import "animate.css";


Vue.config.productionTip = false;
Vue.component("particles", particles);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
