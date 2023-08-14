<template>
  <main class="main">
    <page-title title="404 - Lost but found, Invest &amp; Earn - Sycamore.ng" />
    <section
      class="py-28 pt-36 md:pt-48 bg-opacity-5 bg-gradient-to-b from-lightPrimary to-lighterPrimary flex flex-col justify-center items-center px-6 md:px-20"
    >
      <div class="mb-10">
        <img src="@/assets/Group.png" />
      </div>
      <div class="text-center mb-14">
        <p class="font-bold md:text-xl pb-4">
          The page you’re looking for doesn’t exist.
        </p>
        <p class="font-medium text-xxs md:text-sm">Don't stop, keep going!</p>
      </div>
      <router-link
        to="/"
        active-class=""
        class="px-3 md:px-4 py-3 text-xs md:text-sm bg-primary text-white rounded-md mr-3"
      >
        <div class="flex">
          <span class="mr-3"><arrow-up-right /> </span> Return to Home page
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
import ArrowUpRight from "@/svg/ArrowUpRight.vue";
export default {
  name: "NotFound",
  components: {
    ArrowUpRight
  }
};
</script>

<style lang="scss">
/* not-found-section */
.not-found-section {
  background-color: #fff;
}

.not-found-section-details h1 {
  font-size: 55px;
  color: #002d04;
  font-weight: 500;
  padding: 100px 0 20px 0;
  margin-top: 100px;
}

.not-found-section-details p {
  color: #667768;
  font-size: 14px;
  width: 85%;
  margin-top: 0;
}

.not-found-section-details .prev {
  margin-top: -5px;
  margin-bottom: 40px;
}

.not-found-section-details h1 span {
  color: #63c132;
}

.not-found-section-details .first-btn {
  background-color: #63c132;
  border: 1px solid #63c132;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.not-found-section-details .second-btn {
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #000;
  margin-left: 20px;
  font-weight: 300;
}

.not-found-section-details .second-btn a {
  color: #002d04;
}

.not-found-section-details .second-btn svg {
  margin-left: 5px;
}

.not-found-section-details .first-btn a span {
  padding-left: 10px;
}

.not-found-section-details .second-btn a span {
  padding-left: 10px;
}

.not-found-section-img img {
  padding-top: 50px;
}

/* Media queries */
@include mobile {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .not-found-section {
    margin-top: 0px;
  }

  .not-found-section-details h1 {
    font-size: 30px;
    padding-top: 15px;
    margin-top: 50px;
  }

  .not-found-section-details p {
    width: 100%;
  }

  .not-found-section img {
    display: none;
  }

  .justify-content-md-center {
    justify-content: center;
    .col,
    .col-md-3 {
      flex-grow: unset;
      width: auto;
    }
  }
}
</style>
