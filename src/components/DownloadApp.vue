<template>
  <div>
    <section class="rgb-bg bg-gray-100 px-6 pt-10">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center md:w-9/12 m-auto"
      >
        <div
          class="flex flex-col justify-between items-center md:justify-start md:items-start mb-4 md:mb-0"
        >
          <h3
            class="text-2xl md:text-5xl font-bold text-gray07 w-8/12 text-center md:text-left mb-6"
          >
            Download Sycamore
          </h3>

          <div class="flex gap-x-3">
            <a
              target="_blank"
              href="https://apps.apple.com/ng/app/sycamore-ng/id1592757960"
            >
              <div
                class="bg-white border border-gray07 px-4 md:px-7 py-3 flex rounded-2xl items-center cursor-pointer gap-x-2"
              >
                <appstore />

                <div class="text-gray07">
                  <p class="text-xxs">Get it on</p>
                  <p class="text-sm font-semibold">Appstore</p>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ng.sycamore.app2"
            >
              <div
                class="bg-white border border-gray07 px-4 md:px-7 py-3 flex rounded-2xl items-center cursor-pointer gap-x-2"
              >
                <playstore />

                <div class="text-gray07">
                  <p style="font-size: 10px">Get it on</p>
                  <p class="text-sm font-semibold">Playstore</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="w-3/4 md:w-4/12 m-auto mt-10 md:mt-20">
            <LazyImage 
                src = "@/assets/invest-phone.png"
                classNames = ""
            />
          <!-- <img src="@/assets/invest-phone.png" class="" alt="" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Appstore from "@/svg/Appstore.vue";
import Playstore from "@/svg/Playstore.vue";
import LazyImage from "@/components/LazyImage.vue";

export default {
  name: "DownloadApp",

  components: {
    Appstore,
    Playstore,
    LazyImage
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
