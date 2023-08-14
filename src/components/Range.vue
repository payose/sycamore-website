<template>
  <input
    type="range"
    min="0"
    max="100"
    step="1"
    v-model="value"
    @input="updateSlider"
    :style="{ backgroundSize: backgroundSize }"
  />
  <!-- <div class="data">Slider value: {{ value }}/100</div> -->
</template>

<script>
export default {
  components: "Range",
  data() {
    return {
      value: 20,
      backgroundSize: "20% 100%"
    };
  },
  methods: {
    updateSlider(e) {
      const clickedElement = e.target,
        min = clickedElement.min,
        max = clickedElement.max,
        val = clickedElement.value;

      this.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    }
  }
};
</script>

<style>
/* Slider CSS */
input[type="range"] {
  -webkit-appearance: none;
  display: block;
  border-radius: 7px;
  width: 100%;
  margin: 16px 0;
  background: #eff5ef;
  background-image: -webkit-gradient(
    linear,
    20% 0%,
    20% 100%,
    color-stop(0%, #12ba12),
    color-stop(100%, #12ba12)
  );
  background-image: -webkit-linear-gradient(left, #12ba12 0%, #12ba12 100%);
  background-image: -moz-linear-gradient(left, #12ba12 0%, #12ba12 100%);
  background-image: -o-linear-gradient(to right, #12ba12 0%, #12ba12 100%);
  background-image: linear-gradient(to right, #12ba12 0%, #12ba12 100%);
  background-repeat: no-repeat;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: none;
  /* border: 4px solid #12ba12; */
  border-radius: 50%;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #e23939;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: none;
  border: 4px solid #add8e6;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input[type="range"]::-ms-fill-upper {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input[type="range"]::-ms-thumb {
  box-shadow: none;
  border: 4px solid #add8e6;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
  height: 4px;
}
input[type="range"]:focus::-ms-fill-lower {
  background: transparent;
}
input[type="range"]:focus::-ms-fill-upper {
  background: transparent;
}
/* End Range Slider */
</style>
