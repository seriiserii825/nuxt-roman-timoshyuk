<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    required: false,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-white">
      {{ label }}
    </label>
    <input
      :name="name"
      :id="name"
      :type="type"
      v-model="value"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      :placeholder="placeholder"
    />
  </div>
</template>
