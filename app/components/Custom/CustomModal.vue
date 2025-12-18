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
  <div class="custom-modal">
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      :header="title"
      :style="{ width: '25rem' }"
      class="dialog z-10 rounded-xl bg-slate-900 p-9 text-white/90"
    >
      <slot />
    </Dialog>
  </div>
</template>
