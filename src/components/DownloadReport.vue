<template>
  <div>
    <div class="text-center text-gray07">
      <p class="text-2xl leading-[64px] font-semibold">Download Report</p>
      <p class="text-sm font-normal">
        Complete this form to get full access to the report
      </p>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form
        action="https://sycamore.us10.list-manage.com/subscribe/post?u=4673517822183d1554b66f2e5&amp;id=74aa277f31&amp;f_id=006ba3e5f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_self"
      >
        <div class="mt-10">
          <text-input
            rules="required"
            id="mce-FNAME"
            name="FNAME"
            label="First name"
            placeHolder="first name"
            v-model="formData.first_name"
          />
          <text-input
            rules="required"
            id="mce-LNAME"
            name="LNAME"
            label="Last name"
            placeHolder="last name"
            v-model="formData.last_name"
          />
          <text-input
            rules="required|email"
            id="mce-EMAIL"
            name="EMAIL"
            label="Email"
            placeHolder="your email address"
            v-model="formData.email"
          />
          <c-button
            size="lg"
            @click="downloadReport"
            :disabled="invalid || isLoading"
            class="text-white w-full text-center mt-10 mb-8"
          >
            <component :is="ArrowUpRightVue" class="mr-4" />
            {{ isLoading ? "Submitting..." : "Download report" }}
          </c-button
          >
          <button
            type="submit"
            class="hidden"
            id="mc-embedded-subscribe"
            name="subscribe"
          ></button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import TextInput from "@/components/Input/index";
import CButton from "@/components/Button.vue";
import ArrowUpRightVue from "@/svg/ArrowUpRight.vue";

export default {
  name: "DownloadReport",
  data() {
    return {
      formData: {},
      isLoading: false,
      ArrowUpRightVue,
    };
  },
  components: {
    TextInput,
    CButton,
  },
  methods: {
    downloadReport() {
      this.isLoading = true;
      document.getElementById("mc-embedded-subscribe").click();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>