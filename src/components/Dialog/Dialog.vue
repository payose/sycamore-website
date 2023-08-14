<template>
     <dialog
        v-bind="$attrs"
        :class="[     {
            'w-[475px]': size === 'sm',
            'w-[516px]': size === 'md'
          },
          'dialog m-auto rounded-[20px]',
          modalClass]"
      >
        <div :class="['py-12 px-5 md:px-[60px]', bodyClass]"><slot></slot></div>
      </dialog>
</template>
<script>

export default {
  name: "Dialog",
  props : {
    onClose: {
      type: Function
    },
    modalClass: {
      type:String
    },
    bodyClass: {
      type: String
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    const dialog = this.$parent.$refs.dialog.$el
    dialog.addEventListener('click', this.closeModal);
  },
  beforeDestroy() {
    const dialog = this.$parent.$refs.dialog.$el
    dialog.removeEventListener('click', this.closeModal);
  },
  methods: {
    closeModal(event) {
      const dialog = this.$parent.$refs.dialog.$el;
      const rect = dialog.getBoundingClientRect();

      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        dialog?.close?.();
        this.onClose?.();
      }
    }

  }
}
</script>
<style src="./dialog.css" scoped>

</style>

