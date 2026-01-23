<script setup lang="ts">
  import { categoryService } from '~/api/services/categoryService'
  import { transactionService } from '~/api/services/transactionService'
  import type {
    ICategoryWithRating,
    ICategoryWithTransactions,
    ITransaction,
    ITransactionWithoutRelations,
  } from '~/interfaces/ITransaction'

  definePageMeta({
    middleware: 'auth',
  })

  const transactions = ref<ITransaction[]>([])

  const categories_with_rating = ref<ICategoryWithRating[]>()

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

  async function getCategoriesWithTransactions() {
    try {
      const response = await categoryService.getAllWithTransactions()
      generateCategoriesWithRating(response.data)
    } catch (error) {
      handleAxiosError(error)
    }
  }
  getCategoriesWithTransactions()

  function generateCategoriesWithRating(
    categories: ICategoryWithTransactions[]
  ) {
    let maxCategoryTransactionPrice = 0
    const randomColors = generateRandomColors(categories.length)
    categories.forEach((category) => {
      const totalCategoryTransactionPrice = category.transaction.reduce(
        (acc: number, transaction: ITransactionWithoutRelations) =>
          acc + transaction.amount,
        0
      )
      if (totalCategoryTransactionPrice > maxCategoryTransactionPrice) {
        maxCategoryTransactionPrice = totalCategoryTransactionPrice
      }
    })

    categories_with_rating.value = categories.map((category, index) => {
      const totalCategoryTransactionPrice = category.transaction.reduce(
        (acc: number, transaction: ITransactionWithoutRelations) =>
          acc + transaction.amount,
        0
      )
      const rating =
        (totalCategoryTransactionPrice / maxCategoryTransactionPrice) * 100
      return {
        ...category,
        rating,
        total: totalCategoryTransactionPrice,
        color: randomColors[index] ?? 'hsl(0, 0%, 50%)',
      }
    })
  }

  function generateRandomColors(length: number): string[] {
    const tailwindColors = [
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'pink',
      'rose',
    ]

    const shuffled = [...tailwindColors].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(length, tailwindColors.length))
  }
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
      <TopSpendingCategories
        v-if="categories_with_rating"
        :categories="categories_with_rating"
      />
    </div>
  </main>
</template>
