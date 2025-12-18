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
          <p class="text-md text-center font-bold uppercase">Total Income:</p>
          <p class="mt-2 rounded-sm bg-green-600 p-1 text-center font-bold">
            1000$
          </p>
        </div>
        <div>
          <p class="text-md text-center font-bold uppercase">Total Expense:</p>
          <p class="mt-2 rounded-sm bg-red-600 p-1 text-center font-bold">
            1000$
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
