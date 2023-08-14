<template>
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.7">
      <ellipse
        cx="6.5"
        cy="6.97729"
        rx="5.5"
        ry="5.75"
        :stroke="color"
        stroke-width="2"
      />
      <path
        d="M11.5 12.2046L15.3184 16.1965"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="square"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Search",
  props: {
    color: {
      type: String,
      default: "#073042"
    }
  }
};
</script>

<style></style>
