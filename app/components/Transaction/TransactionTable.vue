<script setup lang="ts">
import type { PropType } from "vue";
import formatCurrency from "~/helpers/formatCurrency";
import formatDate from "~/helpers/formatDate";
import type { ITransaction } from "~/interfaces/ITransaction";

const emits = defineEmits(['emit_delete'])

const props = defineProps({
  transactions: {
    type: Array as PropType<ITransaction[]>,
    required: true,
  },
});

const deleteTransaction = (id: number) => {
  emits('emit_delete', id);
};
</script>

<template>
  <div class="shape md:overflow-x-auto">
    <table class="table w-full md:min-w-[700px]">
      <thead>
        <tr class="border-b border-slate-700">
          <th class="px-6 py-3 text-left text-sm font-semibold">N</th>
          <th class="px-6 py-3 text-left text-sm font-semibold">Title</th>
          <th class="px-6 py-3 text-left text-sm font-semibold">Amount $</th>
          <th class="px-6 py-3 text-left text-sm font-semibold">Category</th>
          <th class="px-6 py-3 text-left text-sm font-semibold">Date</th>
          <th class="px-6 py-3 text-left text-sm font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(transaction, index) in transactions"
          :key="transaction.id"
          class="border-b border-slate-700 transition-colors hover:bg-gray-700"
          :class="{ 'bg-gray-800': index % 2 === 0 }"
        >
          <td class="px-6 py-4">{{ index + 1 }}</td>
          <td class="px-6 py-4">{{ transaction.title }}</td>
          <td
            class="px-6 py-4"
            :class="{
              'text-green-600': transaction.type === 'income',
              'text-red-600': transaction.type === 'expense',
            }"
          >
            {{ transaction.type === "expense" ? "-" : "+" }}
            {{ formatCurrency(transaction.amount) }}
          </td>
          <td class="px-6 py-4">{{ transaction.category.title }}</td>
          <td class="group relative cursor-pointer px-6 py-4">
            <span class="group-hover:hidden">{{
              formatDate(transaction.createdAt, true)
            }}</span>
            <span class="hidden group-hover:block">{{
              formatDate(transaction.createdAt)
            }}</span>
          </td>
          <td class="px-6 py-4">
            <button class="text-red-600 hover:text-red-800" @click="deleteTransaction(transaction.id)">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
