<script setup lang="ts">
  import { transactionService } from '~/api/services/transactionService'

  definePageMeta({
    middleware: 'auth',
  })

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
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold text-white">Recent Transactions</h3>
          <a href="#" class="text-blue-400 hover:text-blue-300 text-sm"
            >View all</a
          >
        </div>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-red-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-red-400"
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
                <p class="text-white font-medium">A notebook</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-red-400 font-semibold">-$8,999.00</span>
          </div>
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-green-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">Gift for me</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-green-400 font-semibold">+$898.00</span>
          </div>
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-red-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">For expense</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-red-400 font-semibold">-$3,800.00</span>
          </div>
        </div>
      </div>

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
