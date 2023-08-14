<template>
  <ValidationProvider tag="div"
		v-slot="{ errors, ariaMsg }"
		:rules="$attrs.rules"
		:name="name"
    :custom-messages="{required: 'This field is required', email: 'The email field must be a valid email'}"
    >
  <div class="mt-[18px]" :class="inputBoxStyle">
    <label :for="id" class="text-black100 text-base">{{ label }}</label>
    <input
      :type="type"
      class="px-5 py-4 text-sm w-full h-[60px] outline-0 mt-2 font-normal rounded-[10px] border border-grayD3 "
      :class="inputStyle"
      :placeholder="placeHolder"
      :id="id"
      :min="min"
      :max="max"
      :name="name"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      :readonly="readonly"
      autocomplete
    />
    <span class="text-xs text-grey block">
      <slot name="meta"></slot>
    </span>
  </div>
  <span class="text-red-500 text-xs" v-bind="ariaMsg">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script src="">
export default {

name: "TextInput",
props: {
  id: String,
  type: String,
  value: String,
  label: String,
  labelStyle: String,
  inputStyle: [String, Object],
  inputBoxStyle: String,
  placeHolder: String,
  disabled: Boolean,
  readonly: String,
  rows: String,
  min: String,
  max: String,
  name: String
},
};
</script>
