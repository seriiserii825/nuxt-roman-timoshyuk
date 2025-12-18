<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="mt-4 grid grid-cols-3 items-start gap-4">
    <div class="col-span-2 grid">
      <FormTransaction />
    </div>
    <div class="shape">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <p class="text-md text-center font-bold uppercase">Total income:</p>
          <p class="mt-2 rounded-sm bg-green-600 p-1 text-center">1000$</p>
        </div>
        <div>
          <p class="text-md text-center font-bold uppercase">Total Expense:</p>
          <p class="mt-2 rounded-sm bg-red-500 p-1 text-center">1000$</p>
        </div>
      </div>
      chart
    </div>
  </div>
</template>
