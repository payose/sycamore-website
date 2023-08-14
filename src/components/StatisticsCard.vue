<template>
    <div
      class="lg:h-[228px] md:h-[200px] h-[100px] lg:border-r-[6px] border-r-4 border-b-4 lg:border-b-[6px] lg:border-l-[1.5px] border-l-[0.6px] lg:border-t-[1.5px] border-t-[0.6px] flex justify-center items-center md:rounded-[30px] rounded-xl flex-col lg:px-2"
      :class="variant"
    >
      <h2 class="lg:text-[50px] md:text-[40px] text-[26px]" :id="title">
        {{ value }}
      </h2>
      <slot></slot>
      <p class="lg:text-lg md:text-sm text-[8px] text-center">{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatCard",
    data() {
      return {
        isVisible: false,
      };
    },
    props: {
      variant: String,
      title: String,
      value: String,
    },
    methods: {
      animateValue(elementId, start, end, duration) {
        const element = document.getElementById(elementId);
        const startTimestamp = performance.now();
        const formatNumberWithCommas = (value, elementId) => {
          const formattedValue = value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          if (elementId === "Loans Disbursed") {
            return "₦" + formattedValue + "B+";
          } else if (elementId === "Businesses & Individuals Supported") {
            return formattedValue + "K+";
          } else {
            return formattedValue + "+";
          }
        };
        const step = (timestamp) => {
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(progress * (end - start) + start);
          const formattedValue = formatNumberWithCommas(
            value,
            elementId
          );
          element.innerHTML = formattedValue;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      },
      handleIntersection(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
          if (!entry.isIntersecting) {
            this.isVisible = false;
          }
        });
      },
    },
    mounted() {
      const targetSection = document.querySelector("#statistics");
      const options = {
        rootMargin: "0px",
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(this.handleIntersection, options);
      observer.observe(targetSection);
    },
    watch: {
      isVisible: function (newV) {
        if (newV) {
          this.animateValue("Loans Disbursed", 0, 20, 1500);
          this.animateValue(
            "Businesses & Individuals Supported",
            0,
            100,
            1500
          );
          this.animateValue("Active Lenders", 0, 500, 1500);
        }
      },
    },
  };
  </script>
  
  <style>
  </style>