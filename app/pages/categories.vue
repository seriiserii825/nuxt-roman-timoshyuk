<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="mt-10 rounded-md bg-slate-800 p-4">
    <div class="mt-2 flex flex-wrap items-center gap-2">
      <div
        class="group relative flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2"
      >
        <span>Salary</span>
        <div
          class="pointer-events-none absolute inset-0 flex items-center justify-between rounded-lg bg-black/90 px-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          <i
            class="pi pi-pen-to-square transition-colors hover:text-green-600"
          />
          <i class="pi pi-trash transition-colors hover:text-red-600" />
        </div>
      </div>
    </div>
  </div>
</template>
