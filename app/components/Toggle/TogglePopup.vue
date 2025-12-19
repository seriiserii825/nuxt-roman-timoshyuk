<script setup lang="ts">
const emits = defineEmits(["emit_click"]);
const props = defineProps({
  label: { type: String, required: false, default: "Label" },
});
</script>

<template>
  <div
    @click="emits('emit_click')"
    class="mb-4 mt-4 flex cursor-pointer items-center gap-1 text-white/50 transition-colors hover:text-white"
  >
    <font-awesome-icon icon="fa-solid fa-plus" />
    <span>{{ label }}</span>
  </div>
</template>
