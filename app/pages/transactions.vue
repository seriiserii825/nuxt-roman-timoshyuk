<script setup lang="ts">
  import { transactionService } from '~/api/services/transactionService'
  import TransactionForm from '~/components/Transaction/TransactionForm.vue'
  import useSweetAlert from '~/composable/useSweetAlert'
  import type { ISummary } from '~/interfaces/ISummary'
  import type { ITransaction } from '~/interfaces/ITransaction'
  import type { ITransactionWithPagination } from '~/interfaces/ITransactionWithPagination.ts'

  import { DoughnutChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  Chart.register(...registerables)

  definePageMeta({
    middleware: 'auth',
  })

  const page = ref(1)
  const limit = ref(4)
  const total_pages = ref(0)
  const is_chart_visible = ref(false)

  const transaction_is_loading = ref(false)
  const transactions = ref<ITransaction[]>([])
  const is_transaction_popup_visible = ref(false)
  const summary = ref<ISummary>({
    income: 0,
    expense: 0,
  })

  async function getTransactions() {
    try {
      transaction_is_loading.value = true

      const [transactionsRes] = await Promise.all([
        transactionService.getAllWithPagination(page.value, limit.value),
        getSummary(), // не блокирует первый
      ])

      const data: ITransactionWithPagination = transactionsRes.data
      transactions.value = data.data
      page.value = data.meta.page
      total_pages.value = data.meta.totalPages
    } catch (error) {
      handleAxiosError(error)
      useSweetAlert('error', 'Failed to fetch data')
    } finally {
      setTimeout(() => {
        transaction_is_loading.value = false
      }, 500)
    }
  }

  async function emitTransactions() {
    await getTransactions()
    is_transaction_popup_visible.value = false
  }

  async function deleteTransaction(id: number) {
    try {
      const confirm = await useSweetConfirm(
        'Are you sure?',
        "You won't be able to revert this!"
      )
      if (!confirm) return
      await transactionService.delete(id)
      useSweetAlert('success', 'Transaction deleted successfully')
      await getTransactions()
    } catch (error) {
      handleAxiosError(error)
    }
  }

  async function getSummary() {
    try {
      const response = await transactionService.getSummary()
      summary.value = response.data
      if (!chart.value.datasets[0]) return
      chart.value.datasets[0].data = [
        summary.value.income,
        summary.value.expense,
      ]
    } catch (error) {
      handleAxiosError(error)
    }
  }

  function emitPagination(new_page: number) {
    page.value = new_page
    getTransactions()
  }

  const chart = ref({
    datasets: [
      {
        data: [30, 40],
        backgroundColor: ['green', 'red'],
      },
    ],
  })

  onMounted(() => {
    getTransactions()
  })
</script>

<template>
  <div class="pb-24">
    <div class="mb-4 mt-4 flex items-start justify-between gap-4 md:block">
      <div>
        <TogglePopup
          label="Add Transaction"
          @emit_click="is_transaction_popup_visible = true"
        />
        <Popup
          v-if="is_transaction_popup_visible"
          title="Add Transaction"
          @emit_close="is_transaction_popup_visible = false"
        >
          <TransactionForm class="mb-4" @emit_transaction="emitTransactions" />
        </Popup>
      </div>
      <div class="w-1/3 lg:w-1/2 md:w-full">
        <Summary
          class="mb-4"
          :income="summary.income"
          :expense="summary.expense"
          @emit_view_report="is_chart_visible = !is_chart_visible"
        />
        <DoughnutChart v-if="is_chart_visible" :chart-data="chart" />
      </div>
    </div>
    <Preloader v-if="transaction_is_loading" />
    <TransactionTable
      v-else-if="transactions"
      :transactions="transactions"
      class="mb-8"
      @emit_delete="deleteTransaction"
    />
    <Pagination
      v-if="transactions && transactions.length > limit"
      :current_page="page"
      :total_pages="total_pages"
      :window="2"
      @emit_update_current="emitPagination"
    />
  </div>
</template>
