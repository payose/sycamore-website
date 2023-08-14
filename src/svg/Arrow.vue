<template>
  <svg
    width="26"
    height="15"
    viewBox="0 0 26 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 1L24.5 7.5L18 14" :stroke="color" />
    <path d="M0 7.5H24.5" :stroke="color" />
  </svg>
</template>

<script>
export default {
  name: "Arrow",
  props: {
    color: {
      default: "#000",
      type: String
    }
  }
};
</script>
