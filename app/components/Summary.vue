<script setup lang="ts">
import TogglePopup from "./Toggle/TogglePopup.vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

const balance = computed(() => props.income - props.expense);
</script>

<template>
  <div class="shape">
    <div class="mb-4 grid grid-cols-2 gap-3">
      <div>
        <p class="text-md text-center font-bold uppercase">Total Expense:</p>
        <p class="mt-2 rounded-sm bg-red-600 p-1 text-center font-bold">
          {{ expense }}$
        </p>
      </div>
      <div>
        <p class="text-md text-center font-bold uppercase">Total Income:</p>
        <p class="mt-2 rounded-sm bg-green-600 p-1 text-center font-bold">
          {{ income }}$
        </p>
      </div>
    </div>
    <div class="mb-4 text-center font-bold uppercase">
      Ballance:
      <span :class="{ 'text-red-700': balance <= 0 }">{{ balance }}$</span>
    </div>
    <div class="flex justify-center">
      <TogglePopup
        label="View Detailed Report"
        @emit_click="$emit('emit_view_report')"
      />
    </div>
  </div>
</template>
