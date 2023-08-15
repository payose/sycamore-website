<template>
	<!-- <section class="bg-gray07 py-20 px-52 flex"> -->
	<section class="bg-gray07 pt-20 pb-6 pl-8">
		<div class="pb-16 md:px-40 grid grid-cols-1 md:grid-cols-5 gap-2">
			<div class="md:col-span-2 mb-6">
				<div class="footer-logo">
					<router-link to="/">
						<img class="black-logo" src="@/assets/logo-white.png" alt="" />
					</router-link>
				</div>
				<NDPR/>
			
			</div>
			
			<div class="md:col-span-3 flex flex-col md:flex-row justify-between">
				<div class="mb-6">
					<h2 class="mb-2 font-semibold text-base">Quick Links</h2>
					<p class="logo-message text-sm">
						<ul class="[&>*]:py-1">
							<li><router-link to="/about" class="link">About Us</router-link></li>
							<li><router-link to="/career" class="link">Careers</router-link></li>
							<li><router-link to="/privacy" class="link"> Privacy Policy</router-link></li>
							<li><router-link to="/terms" class="link">Terms and Conditions </router-link></li>
						</ul>
					</p>
				</div>

				<div class="mb-6">
					<h2 class="mb-2 font-semibold text-base">Resources</h2>
					<p class="logo-message text-sm">
						<ul class="[&>*]:py-1">
							<li><router-link to="/faqs" class="link">FAQs</router-link></li>
							<li class="link cursor-pointer" @click="talkToUs">Talk to us</li>
						</ul>
					</p>
				</div>

				<div class="mb-6">
					<h2 class="font-semibold text-base">Get in Touch</h2>
				
					<div class="logo-message text-sm">
						<div class="flex flex-row mt-4">
							<phoneCall/>
							<span><p class="ml-4"><a href="tel:017003497" class="link">01 700 3497</a></p></span>
						</div>
						
						<div class="flex flex-row mt-3">
							<envelope/>
							<span><p class="ml-4"><a href="mailto:info@sycamore.ng" class="link">info@sycamore.ng</a></p></span>
						</div>
						
						<div class="flex flex-row mt-3">
							<location/>
							<span><p class="ml-4"><a target="_blank" href="https://bit.ly/3sPOSdX" class="link">53b Oduduwa way, Ikeja, Lagos</a></p></span>
						</div>
					</div>

					<h2 class="font-semibold text-base pt-5">Socials</h2>
				
					<div class="logo-message text-sm">
						<div class="flex flex-row mt-4 [&>*]:pr-2">
							<span><a href="https://www.instagram.com/sycamoreng/" target="_blank"><instagram/></a></span>
							<span><a href="https://www.linkedin.com/company/sycamore-finance/" target="_blank"><linkedinfooter/></a></span>
							<span><a href="https://twitter.com/SycamoreNG" target="_blank"><twitter/></a></span>
							<span><a href="https://www.youtube.com/channel/UCzsMXDElPmWUht3mfQOJBkg" target="_blank"><youtube/></a></span>
							<span><a href="https://www.facebook.com/SycamoreNG" target="_blank"><facebook/></a></span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div>
			<p class="logo-message text-center" style="font-size: 0.7rem;">
				All rights reserved. © {{new Date().getFullYear()}} Sycamore Integrated Solutions Limited
			</p>
		</div>
	</section>
</template>

<script>
import instagram from "@/svg/instagram.vue"
import linkedinfooter from "@/svg/linkedinfooter.vue"
import twitter from "@/svg/twitter.vue"
import youtube from "@/svg/youtube.vue"
import facebook from "@/svg/facebook.vue"
import phoneCall from "@/svg/phoneCall.vue"
import envelope from "@/svg/envelope.vue"
import location from "@/svg/location.vue"
import NDPR from '@/svg/NDPR.vue'
export default {
  components:{
    instagram,
    linkedinfooter,
    twitter,
    youtube,
    facebook,
    phoneCall,
    envelope,
    location,
	NDPR
  },
  methods: {
    talkToUs() {
      this.$intercom.show();
    }
  }
};
</script>

<style lang=scss scoped>
*{
  color: #fff
}
.link{
    display: block;
    &:hover{
        color: #26C165 !important
    }
}
.footer-logo {
  width: 15rem;
  padding-bottom: 1.2rem
  /* height: 7rem; */
}
.logo-message {
  color: #fff;
  opacity: 0.7;
}
</style>
