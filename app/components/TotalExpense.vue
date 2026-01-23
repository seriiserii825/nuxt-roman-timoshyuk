<script setup lang="ts">
  import formatCurrency from '~/helpers/formatCurrency'

  defineProps({
    expense: {
      type: Number,
      required: true,
    },
  })
</script>

<template>
  <div class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="text-gray-400 text-sm mb-1">Total Expenses</p>
        <h2 class="text-3xl font-bold text-red-400">
          {{ formatCurrency(expense) }}
        </h2>
      </div>
      <div class="bg-red-500 bg-opacity-20 rounded-lg p-3">
        <svg
          class="w-6 h-6 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
