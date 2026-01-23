<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { ITransaction } from '~/interfaces/ITransaction'

  defineProps({
    transactions: {
      type: Array as PropType<ITransaction[]>,
      required: true,
    },
  })
</script>

<template>
  <div class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-xl font-semibold text-white">Recent Transactions</h3>
      <NuxtLink
        to="/transactions"
        class="text-blue-400 hover:text-blue-300 text-sm"
        >View all</NuxtLink
      >
    </div>
    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="space-y-4 my-4"
    >
      <TransactionItem :transaction="transaction" />
    </div>
  </div>
</template>
