<script setup lang="ts">
import { transactionService } from "~/api/services/transactionService";
import TransactionForm from "~/components/Transaction/TransactionForm.vue";
import useSweetAlert from "~/composable/useSweetAlert";
import type { ITransaction } from "~/interfaces/ITransaction";

definePageMeta({
  middleware: "auth",
});

const transaction_is_loading = ref(false);

const transactions = ref<ITransaction[]>([]);

const is_transaction_popup_visible = ref(false);

async function getTransactions() {
  try {
    transaction_is_loading.value = true;
    const response = await transactionService.getAll();
    console.log("response", response);
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

async function deleteTransaction(id: number) {
  try {
    const confirm = await useSweetConfirm(
      "Are you sure?",
      "You won't be able to revert this!"
    );
    if (!confirm) return;
    await transactionService.delete(id);
    useSweetAlert("success", "Transaction deleted successfully");
    await getTransactions();
  } catch (error) {
    handleAxiosError(error);
  }
}

onMounted(() => {
  getTransactions();
});
</script>

<template>
  <div>
    <div class="mb-4 mt-4 flex justify-between gap-4">
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
    <TransactionTable
      :transactions="transactions"
      v-else-if="transactions"
      @emit_delete="deleteTransaction"
    />
  </div>
</template>
