<script setup lang="ts">
const form = ref({
  title: "",
  amount: 0,
  type: "income",
});
</script>

<template>
  <div class="shape">
    <div class="grid grid-cols-2 gap-3">
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
  </div>
</template>
