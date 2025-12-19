<script setup lang="ts">
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  value: { type: String, required: true },
});

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emits('update:modelValue', value);
  },
});
</script>

<template>
  <label class="flex cursor-pointer items-center gap-2">
    <input
      type="radio"
      :name="name"
      :value="value"
      v-model="model"
      class="form-radio text-blue-600"
    />
    <span>{{ label }}</span>
  </label>
</template>
