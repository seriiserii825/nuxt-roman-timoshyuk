<script setup lang="ts">
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
</script>

<template>
  <div class="shape">
    <div class="grid grid-cols-2 gap-3">
      <div>
        <p class="text-md text-center font-bold uppercase">Total Income:</p>
        <p class="mt-2 rounded-sm bg-green-600 p-1 text-center font-bold">
          {{ income }}$
        </p>
      </div>
      <div>
        <p class="text-md text-center font-bold uppercase">Total Expense:</p>
        <p class="mt-2 rounded-sm bg-red-600 p-1 text-center font-bold">
          {{ expense }}$
        </p>
      </div>
    </div>
  </div>
</template>
