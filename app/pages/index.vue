<script setup lang="ts">
  import { transactionService } from '~/api/services/transactionService'
  import type { ITransaction } from '~/interfaces/ITransaction'

  definePageMeta({
    middleware: 'auth',
  })

  const transactions = ref<ITransaction[]>([])

  const summary_store = useSummaryStore()
  const { balance, summary } = storeToRefs(summary_store)

  async function getSummary() {
    try {
      const response = await transactionService.getSummary()
      summary_store.setSummary({
        income: response.data.income,
        expense: response.data.expense,
      })
    } catch (error) {
      handleAxiosError(error)
    }
  }
  getSummary()

  async function getRecentTransactions() {
    try {
      const response = await transactionService.getRecent()
      transactions.value = response.data
    } catch (error) {
      handleAxiosError(error)
    }
  }
  getRecentTransactions()
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Welcome Section -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-white mb-2">Welcome Back!</h1>
      <p class="text-gray-400 text-lg">Here's your financial overview</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- Total Balance Card -->
      <TotalBalance v-if="balance" :balance="balance" />
      <!-- Total Income Card -->
      <TotalIncome v-if="summary.income" :income="summary.income" />
      <!-- Total Expenses Card -->
      <TotalExpense v-if="summary.expense" :expense="summary.expense" />
    </div>

    <!-- Recent Transactions & Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Transactions -->
      <RecentTransactions
        v-if="transactions.length"
        :transactions="transactions"
      />
      <!-- Top Categories -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold text-white">
            Top Spending Categories
          </h3>
          <a href="#" class="text-blue-400 hover:text-blue-300 text-sm"
            >View all</a
          >
        </div>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Shopping</span>
              <span class="text-gray-400 text-sm">$8,999.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                style="width: 70%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Expenses</span>
              <span class="text-gray-400 text-sm">$3,800.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                style="width: 30%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Food & Dining</span>
              <span class="text-gray-400 text-sm">$1,250.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full"
                style="width: 15%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Transport</span>
              <span class="text-gray-400 text-sm">$750.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                style="width: 10%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
