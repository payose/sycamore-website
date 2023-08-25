<template>
  <div
    class="accordion-body pr-5"
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

ul li[data-v-7a6425cc]:before {
  display: none;
}
</style>
