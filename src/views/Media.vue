<template>
  <main class="main">
    <particles />
    <section
      class="bg-opacity-5 bg-gradient-to-b from-lightSecondary to-lighterSecondary flex justify-center items-center px-6 md:px-20 pt-20 pb-10 md:pt-48"
    >
		<div class="md:w-3/5 flex flex-col md:items-center z-10">
			<h1 class="text-2xl md:text-5xl font-semibold text-center text-gray07 md:leading-extra-loose">
			What we've been up to.
			</h1>
			<h2 class="text-gray07 text-opacity-70 text-sm md:text-lg mt-4 md:mt-8 md:px-20 text-center">
			Check our collection of videos to stay up to date with happenings at
			Sycamore.
			</h2>
		</div>
    </section>
    <section class="px-6 mb-24 mt-0">
      <div class="rounded flex flex-col items-center mb-20 md:px-40">
        <iframe
          v-if="topVideo"
          height="600"
          width="100%"
          class="rounded-2xl"
          :src="`https://www.youtube.com/embed/${topVideo.id.videoId}`"
          frameborder="0"
          allowfullscreen
          loading="lazy"
        />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-5 md:gap-x-3 gap-y-5 mt-8 m-auto px-5"
      >
        <div class="mx-2" v-for="(item, index) in videos" :key="index">
          <iframe
            height="200"
            width="100%"
            class="rounded-lg"
            :src="`https://www.youtube.com/embed/${item.id.videoId}`"
            frameborder="0"
            allowfullscreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section
      class="bg-lighterBlue py-28 flex flex-col md:flex-row items-center justify-center px-4 lg:space-x-20 space-x-4"
    >
      <p
        class="lg:max-w-[500px] max-w-[450px] font-medium lg:text-[22px] leading-8 text-center md:text-left"
      >
        Lending in Nigeria: Can Tech Make Borrowing from Family and Friends
        Sustainable?
      </p>
      <button
        type="button"
        @click="DownloadReport"
        class="bg-primary text-white flex items-center justify-center py-5 px-11 transition ease-in-out duration-500 rounded-[10px]"
      >
        <component :is="DownloadIconVue" class="mr-3" /> Download Report
      </button>
    </section>

    <section class="px-6 py-[44px] bg-[#F6F6F7] relative">
      <div class="md:w-9/12 m-auto">
        <p class="md:text-4xl text-2xl text-gray07 font-semibold">
          Press Clippings 📰
        </p>
        <div
          class="flex flex-col overflow-x-scroll scroll-smooth scrollbar"
          id="container"
        >
          <div class="flex space-x-3 mt-10 mb-7 m-auto">
            <div
              class="w-[307px] h-[360px] flex flex-grow"
              v-for="(item, index) in pressClippings"
              :key="index"
              :id="`card${index}`"
            >
              <div
                class="rounded-xl bg-white px-3 pt-3 pb-6 flex flex-col justify-between"
              >
                <div class="">
                  <div
                    class="bg-[#F9FAFA] h-[164px] flex justify-center items-center rounded-[6px]"
                  >
                    <img
                      :src="require(`@/assets/${item.img}`)"
                      :alt="item.title"
                    />
                  </div>
                  <div class="text-xs mt-2.5">
                    <p class="uppercase text-grayA9A">{{ item.title }}</p>
                    <p class="mt-2 leading-5 pr-5">{{ item.caption }}</p>
                  </div>
                </div>
                <a :href="item.link" class="flex">
                  <button
                    class="px-3 md:px-4 py-3 md:py-3 text-xs cursor-pointer md:text-sm bg-black100 text-white rounded-md border border-black100"
                  >
                    Read more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="slideLeft()"
          class="bg-primary cursor-pointer animate-bounce rounded-full w-9 h-9 absolute px-3.5 py-2.5 right-0 md:right-[94px] lg:right-30 xl:right-[180px] top-1/2 p-4 2xl:hidden"
        >
          <ArrowSide />
        </button>
      </div>
    </section>

    <section class="px-6 py-36">
      <div class="md:w-9/12 m-auto flex flex-col">
        <p class="text-2xl md:text-4xl text-gray07 font-semibold">
          Latest from our Blog
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[30px] gap-y-10 mt-10 mb-7 m-auto"
        >
          <div class="" v-for="(item, index) in blogArticles" :key="index">
            <div class="card">
              <div class="cursor-pointer">
                <a :href="item.link">
                  <img
                    :src="require(`@/assets/${item.image}`)"
                    :alt="item.title"
                  />
                </a>
              </div>
              <p class="text-grayA9 text-xs my-3">{{ item.date }}</p>
              <a :href="item.link"
                ><p class="text-s13 cursor-pointer hover:underline">
                  {{ item.title }}
                </p></a
              >
              <div
                class="text-xs rounded-lg p-2 mt-2 w-fit"
                :class="`bg-${item.color}`"
              >
                {{ item.category }}
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://blog.sycamore.ng/"
          target="_blank"
          class="flex justify-center"
        >
          <button
            class="px-3 md:px-4 py-3 md:py-3 text-xs md:text-sm bg-white text-gray07 rounded-md border border-black100 flex items-center"
          >
            <span class="mr-4">
              <ArrowUpRightBlack />
            </span>
            See Our Blog
          </button>
        </a>
      </div>
    </section>
	
    <download-app />
    <Modal ref="dialog" size="md">
      <download-report />
    </Modal>
    <Modal ref="successDialog" size="md">
      <div>
        <component :is="EmailIllustrationVue" class="mx-auto" />
        <div class="text-center text-gray07">
          <p class="text-2xl leading-[64px] font-semibold">Report Sent</p>
          <p class="text-sm font-normal">Check your email for the report</p>
        </div>
        <div class="mt-10 mb-2">
          <button
            type="button"
            @click="hideModal"
            class="bg-primary text-white py-5 px-11 transition ease-in-out duration-500 rounded-[10px] w-full"
          >
            Okay
          </button>
        </div>
      </div>
    </Modal>
  </main>
</template>

<script>
import { fetchVideos } from "@/api/youtube";
import DownloadApp from "@/components/DownloadApp.vue";
import DownloadIconVue from "@/svg/DownloadIcon.vue";
import Modal from "@/components/Dialog/Dialog";
import DownloadReport from "@/components/DownloadReport.vue";
import EmailIllustrationVue from "@/svg/EmailIllustration.vue";
import ArrowUpRightBlack from "@/svg/ArrowUpRightBlack.vue";
import ArrowSide from "@/svg/ArrowSide.vue";

import { BlogArticles, PressClippings } from "@/data/Media";
export default {
  metaInfo: {
    title: "Sycamore Media | ",
    titleTemplate: "%s See Collection of Videos about Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Sycamore.ng Media - Check our collection of videos to stay up to date with happenings at Sycamore.ng",
      },
      {
        vmid: "keywords",
        name: "keywords",
        content: "sycamore, sycamore solutions, sycamore media",
      },
    ],
  },

  data() {
    return {
      videos: [],
      EmailIllustrationVue,
      topVideo: null,
      DownloadIconVue,
      initial: 1,
      loadingStatus: false,
      blogArticles: BlogArticles,
      pressClippings: PressClippings,
    };
  },
  components: {
    DownloadApp,
    Modal,
    DownloadReport,
    ArrowSide,
    ArrowUpRightBlack,
  },
  methods: {
    async handleFetchVideos() {
      try {
        this.loadingStatus = true;
        const response = await fetchVideos();
        this.loadingStatus = false;
        this.videos = response.data.items.slice(1, response.data.items.length);
        this.topVideo =
          response.data.items.length > 0 ? response.data.items[0] : null;
      } catch (err) {
        this.loadingStatus = false;
      }
    },

    slideLeft() {
      const container = document.getElementById("container");
      container.scrollLeft += 300;
      if (container.scrollLeft > 1200) {
        container.scrollLeft = 0;
      }
    },
    subscriptionSuccess() {
      if (this.$route.query.success === "true") {
        this.$refs.successDialog.$el?.showModal();
      }
    },
    DownloadReport() {
      this.$refs.dialog.$el.showModal();
    },
    hideModal() {
      this.$refs.successDialog.$el?.close();
      this.$router.push("/media");
    },
  },

  mounted() {
    this.handleFetchVideos();
    this.subscriptionSuccess();
  },
};
</script>