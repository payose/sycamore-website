<template>
  <div
    class="rgb-bg bg-opacity-5 bg-gradient-to-b from-lightPrimary to-lighterPrimary relative py-24 md:py-0 md:h-screen"
  >
    <particles />

    <div v-if="regesterStatus" class="flex md:pb-20 mx-4 md:pl-64 pt-40">
      <div class="md:w-2/4 m-auto md:ml-0 md:mt-32">
        <p class="text-4xl text-gray07 font-semibold">
          Thank you for registering with us.
        </p>
        <p class="text-2xl text-gray07 pt-16">
          You are valuable to us and we'll be sending you information about our
          services soon.
        </p>
      </div>
    </div>

    <div v-else class="flex md:pb-20 mx-4 md:pl-64 pt-10">
      <div class="md:w-1/3 m-auto md:ml-0 md:mt-32">
        <h2 class="text-2xl text-gray-900 font-semibold pb-4">Register</h2>
        <div>
          <label for="name" class="text-gray-500 text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            v-model="name"
            class="border border-gray-500 rounded-md py-2 px-5 text-sm mt-2"
          />
          <small
            v-if="error.name.length > 0"
            class="text-red-500"
            style="font-size:0.6rem"
            >{{ error.name }}</small
          >
        </div>

        <div class="mt-3">
          <label for="email" class="text-gray-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="border border-gray-500 rounded-md py-2 px-5 text-sm mt-2"
          />
          <small
            v-if="error.email.length > 0"
            class="text-red-500"
            style="font-size:0.6rem"
            >{{ error.email }}</small
          >
        </div>
        <div class="mt-3">
          <label for="email" class="text-gray-500 text-sm">
            Phone number
          </label>
          <input
            id="phone"
            type="text"
            v-model="phone"
            class="border border-gray-500 rounded-md py-2 px-5 text-sm mt-2"
          />
          <small
            v-if="error.phone.length > 0"
            class="text-red-500"
            style="font-size:0.6rem"
            >{{ error.phone }}</small
          >
        </div>
        <div class="mt-10">
          <small v-if="error.all.length > 0" class="text-red-500 text-xs">{{
            error.all
          }}</small>
          <button
            class="bg-primary text-white w-full rounded-md py-2"
            @click="validate()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="invisible md:visible w-2/5 absolute right-0 bottom-0">
      <img src="@/assets/waitlist.svg" alt="Waitlist" class="w-full" />
    </div>
  </div>
</template>

<script>
import { registerAMU } from "@/api/amu";
export default {
  name: "Waitlist",
  data() {
    return {
      regesterStatus: false,
      name: "",
      email: "",
      phone: "",
      error: {
        name: "",
        phone: "",
        email: "",
        all: ""
      }
    };
  },
  methods: {
    validate() {
      this.error.name = "";
      this.error.phone = "";
      this.error.email = "";
      this.error.all = "";
      if (
        this.phone.length < 1 ||
        this.email.length < 1 ||
        this.name.length < 1
      ) {
        this.error.all = "Please complete all fields";
      } else {
        const format = /[a-zA-Z]+\s+[a-zA-Z]+/g;
        if (!format.test(this.name)) {
          this.error.name = "Provide your first name and surname";
        }

        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!mailformat.test(this.email)) {
          this.error.email = "Enter a valid email";
        }

        if (this.phone.length !== 11) {
          this.error.phone = "Enter a valid phone number";
        } else {
          this.register();
        }
      }
    },

    async register() {
      try {
        this.loadingStatus = true;
        const response = await registerAMU({
          name: this.name,
          email: this.emai,
          phone: this.phone
        });

        this.loadingStatus = false;
        if (response.status === 200) {
          this.isRegistrationSuccessful = response.data.data;
          if (!response.data.data) {
            this.$router.push({
              name: "NotFound"
            });
          }
        }
      } catch (err) {
        this.loadingStatus = false;
      }
    }
  }
};
</script>

<style scoped>
.rgb-bg {
  background-image: url("../assets/rgb-bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
