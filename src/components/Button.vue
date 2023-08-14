<template>
  <button
    type="submit"
    :id="id"
    class="bg-primary text-white flex items-center justify-center py-5 px-11 text-base transition ease-in-out cursor-pointer duration-500 rounded"
    :class="classes"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot>My Button</slot>
  </button>
</template>

<script src="">
export default {
  name: "CButton",
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    classes: {
      type: String,
      default: "",
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  components: {},
};
</script>
<style src="">
button:disabled, button:disabled:hover {
  opacity: .7;
  cursor: not-allowed;
}
</style>
