<template>
  <div>
    <particles />
    <div
      class="h-screen pt-32 py-4 bg-gradient-to-b from-lightPrimary to-lighterPrimary px-6"
    >
      <div class="flex flex-col items-center justify-center h-full">
        <p class="coming-soon mb-5" style="font-family: 'CabinetGrotesk-Bold';">Coming Soon!</p>
        <p class="text-center text-gray78">
          With our exciting products, there's more for you. <br />
          Get quick loans, pay bills, and transfers on the go.
        </p>
        <button class="bg-primary text-white rounded-md px-4 py-3 mt-5">
          Go back to homepage
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon'
}
</script>

<style lang="scss" scoped>
.coming-soon {
  font-size: 128px;
}

@include tablet {
  .coming-soon {
    font-size: 72px;
  }
}

@include mobile {
  .coming-soon {
    font-size: 50px;
  }
}
</style>