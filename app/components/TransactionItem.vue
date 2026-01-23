<script setup lang="ts">
  import formatCurrency from '~/helpers/formatCurrency'
  import formatDate from '~/helpers/formatDate'
  import type { ITransaction } from '~/interfaces/ITransaction'

  defineProps({
    transaction: {
      type: Object as PropType<ITransaction>,
      required: true,
    },
  })
</script>

<template>
  <div
    class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
  >
    <div class="flex items-center space-x-3">
      <div
        class="rounded-lg p-2"
        :class="
          transaction.type === 'income'
            ? 'bg-green-500 bg-opacity-20'
            : 'bg-red-500 bg-opacity-20'
        "
      >
        <svg
          class="w-5 h-5"
          :class="
            transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
          "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <div>
        <p class="text-white font-medium">{{ transaction.title }}</p>
        <p class="text-gray-400 text-sm">
          {{ formatDate(transaction.createdAt) }}
        </p>
      </div>
    </div>
    <span
      class="font-semibold"
      :class="transaction.type === 'income' ? 'text-green-400' : 'text-red-400'"
      >{{ formatCurrency(transaction.amount) }}</span
    >
  </div>
</template>
