<template>
  <div>
    <div class="fixed w-full bottom-0 md:bottom-10 z">
      <div
        class="bg-gray07 m-auto md:w-5/12 md:rounded-3xl flex flex-col md:flex-row items-center p-6 shadow-md"
      >
        <p class="text-white text-xxs font-light  leading-4 pr-4">
          This website uses cookies to optimize your experience and to provide
          us insight on how to interact with the site. All information shared
          with us through cookies are secure and covered by our data privacy
          obligations. You can access our
          <router-link to="/privacy" class="text-primary"
            >Privacy Policy</router-link
          >
          and
          <router-link to="/cookie-policy" class="text-primary"
            >Cookie Policy
          </router-link>
        </p>
        <div class="w-full md:w-min mt-5 md:mt-0">
          <button
            @click="setCookie()"
            class="py-2 md:py-3 px-5 w-full md:w-full bg-primary text-xs text-white font-semibold md:rounded-lg mr-3"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  methods: {
    setCookie() {
      document.cookie = "Sycamore ;path=/";
      this.$emit("cookieIsSet", true);
    }
  }
};
</script>

<style scoped>
.z {
  z-index: 10000;
}
</style>
