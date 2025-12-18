<script setup lang="ts">
import type { ISelectOption } from "~/interfaces/ISelectOption";

const form = ref({
  title: "",
  amount: 0,
  type: "income",
  category: "",
});

const categories = ref<ISelectOption[]>([
  {
    value: "salary",
    text: "Salary",
  },
  {
    value: "freelance",
    text: "Freelance",
  },
  {
    value: "food",
    text: "Food",
  },
  {
    value: "entertainment",
    text: "Entertainment",
  },
]);
</script>

<template>
  <div class="shape">
    <h2 class="mb-4 text-lg font-semibold">Add New Transaction</h2>
    <div class="mb-8 grid grid-cols-2 gap-3">
      <FormInput
        label="Title"
        name="title"
        placeholder="Enter transaction title"
        v-model="form.title"
      />

      <FormInput
        label="Amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
        v-model="form.amount"
      />
    </div>
    <div class="label">Type: </div>
    <div class="mb-8 flex items-center gap-2">
      <label class="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          value="income"
          v-model="form.type"
          class="form-radio text-blue-600"
        />
        <span>Income</span>
      </label>
      <label class="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          value="expense"
          v-model="form.type"
          class="form-radio text-blue-600"
        />
        <span>Expense</span>
      </label>
    </div>
    <FormSelect
      label="Manage Category"
      name="category"
      :options="categories"
      v-model="form.category"
      class="mb-8"
    />
    <Btn type="submit" class="w-fit" variant="btn-success"
      >Add Transaction</Btn
    >
  </div>
</template>
