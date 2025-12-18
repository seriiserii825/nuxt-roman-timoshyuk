<script setup lang="ts">
import type { PropType } from "vue";
import type { ITransaction } from "~/interfaces/ITransaction";

const props = defineProps({
  transactions: {
    type: Array as PropType<ITransaction[]>,
    required: true,
  },
});
</script>

<template>
  <div class="shape">
    <table class="table w-full">
      <thead>
        <tr>
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
          class="border-b border-b-slate-700 transition-colors hover:bg-gray-700"
          v-for="(transaction, index) in transactions"
          :key="transaction.id"
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
            {{ transaction.amount }}
          </td>
          <td class="px-6 py-4">{{ transaction.category.title }}</td>
          <td class="px-6 py-4">
            {{ new Date(transaction.createdAt).toLocaleDateString() }}
          </td>
          <td class="px-6 py-4">
            <button class="text-red-600 hover:underline">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
