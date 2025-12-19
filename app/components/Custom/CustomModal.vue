<script setup lang="ts">
const emits = defineEmits(["update:is_visible"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  is_visible: {
    type: Boolean,
    required: true,
  },
});

const visible = computed({
  get: () => props.is_visible,
  set: (value: boolean) => {
    emits("update:is_visible", value);
  },
});
</script>

<template>
  <div v-if="is_visible" class="custom-modal">
    <slot />
  </div>
</template>
