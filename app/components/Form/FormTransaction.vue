<script setup lang="ts">
const form = ref({
  title: "",
  amount: 0,
  type: "income",
});
</script>

<template>
  <div class="shape">
    <div class="grid grid-cols-2 gap-3 mb-4">
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
    <div class="flex items-center gap-2">
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
  </div>
</template>
