<template>
  <div
    class=" bg-opacity-5 bg-gradient-to-b from-lightPrimary to-lighterPrimary"
  >
    <particles />
    <div class="p-20 mb-36 pl-28 pr-0 pt-48 flex z-10 w-7/12 m-auto">
      <div class="m-auto w-3/4">
        <memoji class="m-auto" />
        <div class="mt-5">
          <p class="font-medium text-5xl pt-6 text-center text-gray07">
            Join the waitlist
          </p>
          <p
            class="font-medium text-lg mt-3 text-center pt-2 text-gray07 text-opacity-70"
          >
            Interested in priority access?
          </p>
          <p class="text-lg text-gray07 pt-2 text-center text-opacity-70">
            Get early access to our mobile app by providing your name and email
          </p>
        </div>
        <div class="mt-9">
          <div>
            <label for="name" class="text-gray69 text-sm">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="What should we call you?"
              class="border border-gray86 rounded-md py-2 px-5 text-sm mt-2"
            />
          </div>
          <div class="mt-3">
            <label for="email" class="text-gray69 text-sm">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Please enter your email address"
              class="border border-gray86 rounded-md py-2 px-5 text-sm mt-2"
            />
          </div>
          <div class="mt-5 flex flex-col items-center">
            <button
              class="bg-primary rounded-md py-4 w-full text-white cursor-pointer"
            >
              Request Access
            </button>
            <p class="text-orange mt-3">Coming soon to Web, Android & iOS</p>
          </div>
        </div>
      </div>
      <!-- <div class="w-2/5">
        <img src="@/assets/waitlist.png" alt="Waitlist" class="w-full" />
      </div> -->
    </div>
  </div>
</template>

<script>
// import ColorPattern1 from "@/svg/ColorPattern1.vue";
// import ColorPattern2 from "@/svg/ColorPattern2.vue";
// import ColorPattern3 from "@/svg/ColorPattern3.vue";
import Memoji from "@/svg/Memoji.vue";
export default {
  components: {
    // ColorPattern1,
    // ColorPattern2,
    // ColorPattern3,
    Memoji
  },
  name: "Waitlist"
};
</script>
