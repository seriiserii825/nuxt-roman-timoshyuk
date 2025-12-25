<script setup lang="ts">
  const emits = defineEmits(['update:is_visible'])
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  })

  const visible = computed({
    get: () => props.isVisible,
    set: (value: boolean) => {
      emits('update:is_visible', value)
    },
  })
</script>

<template>
  <div v-if="visible" class="custom-modal">
    <slot ></slot>
  </div>
</template>
