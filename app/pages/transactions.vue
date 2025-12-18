<script setup lang="ts">
import { transactionService } from "~/api/services/transactionService";
import useSweetAlert from "~/composable/useSweetAlert";
import type { ITransaction } from "~/interfaces/ITransaction";

definePageMeta({
  middleware: "auth",
});

const transaction_is_loading = ref(false);

const transactions = ref<ITransaction[]>([]);

async function getTransactions() {
  try {
    transaction_is_loading.value = true;
    const response = await transactionService.getAll();
    transactions.value = response.data;
  } catch (error) {
    handleAxiosError(error);
    useSweetAlert("error", "Failed to fetch transactions");
  } finally {
    setTimeout(() => {
      transaction_is_loading.value = false;
    }, 1000);
  }
}

async function emitTransactions() {
  await getTransactions();
}

onMounted(() => {
  getTransactions();
});
</script>

<template>
  <div>
    <div class="mt-4 grid grid-cols-3 items-start gap-4">
      <div class="col-span-2 grid">
        <FormTransaction class="mb-4" @emit_transaction="emitTransactions" />
      </div>
      <div class="shape">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <p class="text-md text-center font-bold uppercase">Total Income:</p>
            <p class="mt-2 rounded-sm bg-green-600 p-1 text-center font-bold">
              1000$
            </p>
          </div>
          <div>
            <p class="text-md text-center font-bold uppercase">
              Total Expense:
            </p>
            <p class="mt-2 rounded-sm bg-red-600 p-1 text-center font-bold">
              1000$
            </p>
          </div>
        </div>
      </div>
    </div>
    <Preloader v-if="transaction_is_loading" />
    <TransactionTable :transactions="transactions" v-else-if="transactions" />
  </div>
</template>
