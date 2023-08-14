<template>
  <div
    class="accordion-body pr-5 trans"
    :class="isAccordionOpen ? 'bg-accordionBg  border' : ''"
    @click="isAccordionOpen = !isAccordionOpen"
  >
    <div
      class="ml-5 pt-4 text-xs md:text-xl font-semibold cursor-pointer flex items-center justify-between trans"
    >
      <h3 class="text-xs md:text-sm text-gray4F">
        {{ faq.question }}
      </h3>
      <div v-if="isAccordionOpen">
        <Multiply />
      </div>
      <div v-else>
        <Addition />
      </div>
    </div>
    <div
      class="content"
      :class="
        isAccordionOpen ? '  max-h-auto  opacity-90 ' : '    opacity-0 max-h-0 '
      "
    >
      <div class="message-body">
        <ul class="message-content">
          <li
            class="text-xs"
            style="line-height:1.4rem"
            v-for="answer in faq.answers"
            :key="answer"
          >
            <span><check /></span>{{ answer }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Addition from "@/svg/Addition.vue";
import Multiply from "@/svg/Multiply.vue";
import Check from "@/svg/Check.vue";

export default {
  data: () => {
    return {
      isAccordionOpen: false
    };
  },
  name: "Accordion",
  components: {
    Addition,
    Multiply,
    Check
  },
  props: {
    faq: Object
  }
};
</script>

<style scoped>
.trans {
  transition: 0.7s ease-in;
}
.content {
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.accordion-body {
  margin-bottom: 1rem;
  border-radius: 25px;
  margin: 2rem 0rem;
}
.banner {
  background: linear-gradient(
    180deg,
    rgba(246, 171, 25, 0.1) 0%,
    rgba(246, 171, 25, 0) 100%
  );
  position: relative;
}
.hero-area {
  padding: calc(90px + 1rem) 0 3rem;
  min-height: calc(100vh - 90px);
  background-size: cover;
  background-position: center;
}

.hero-area.other-page {
  padding: 5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  border-bottom: 2px solid #eee;
  min-height: initial;
  position: relative;
}

.hero-area.other-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-right: auto;
  color: #09243b;
}

.hero-area.other-page .hero-text h1 {
  margin: auto;
}
.contact {
  background-color: #f9faf9;
}
.swifit {
  margin: 70px 0px;
}
.swifit ul li {
  list-style: none;
  padding: 15px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
}
.swifit ul li img {
  padding-right: 10px;
}
.swifit ul {
  margin-left: -42px;
}
.swifit h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
}
.swifit img {
  width: 36px;
}
.swifit h2 {
  font-weight: 600;
  font-size: 40px;
  font-size: 40px;
  color: #2d0000;
}
.swifit p {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
}

.faq-header h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #e23939;
}
.faq-header h3 {
  font-style: normal;
  font-size: 40px;
}
.search {
  position: absolute;
  text-align: center;
  font-size: 24px;
  z-index: 2;
  cursor: pointer;
}

.search-input {
  border: 1px solid rgba(7, 48, 66, 0.9);
  border-radius: 10px;
}
input {
  outline: none !important;
}
.container {
  display: flex;
  flex-direction: column;
}

.message-content {
  padding: 20px;
}
.message-content li,
p {
  color: #073042;
  opacity: 0.7;
}
.message-content li {
  display: flex;
  margin-bottom: 10px;
}
.message-content span {
  margin-right: 1.7rem;
}
.accordion-caret {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
}
ul li[data-v-7a6425cc]:before {
  display: none;
}
.faq button {
  background: #f9faf9;
  border: 0.16838px solid #a4ae9d;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 4.48563px 4.48563px 0px 0px;
  color: #000;
  text-align: left;
  font-weight: 500;
}
.btn-secondary.focus,
.btn-secondary:focus {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
  box-shadow: none;
}
.btn-secondary:hover {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}

.talk-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq-btn {
  background: #26c165;
  border-radius: 6.64px;
  border: 1px solid #26c165;
  padding: 13px 30px;
  margin: 30px 0;
  color: white;
  width: 179px;
  height: 69px;
}
.faq .faq-btn a {
  color: #fff !important;
}
.faq ul li {
  margin: 20px -20px;
}

.faq .faq-p {
  padding: 20px 17.69px;
}

.faq h4 {
  font-size: 1.25rem;
  color: #dc3545;
  margin: 30px 0 30px;

  /* font-weight: bold; */
}

.acc-img {
  position: sticky;
  top: 50px;
}

.accodion-img {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}
img .acc-image {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
}

@include mobile {
  .faq-header h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .faq h4 {
    font-size: 18px;
  }
  .search-wrapper h1 {
    font-size: 25px;
  }
  .collapse {
    width: calc(100% - 30px);
  }
}
</style>
