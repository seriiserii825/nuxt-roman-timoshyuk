<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { ICategoryWithRating } from '~/interfaces/ITransaction'

  defineProps({
    categories: {
      type: Array as PropType<ICategoryWithRating[]>,
      required: true,
    },
  })
</script>

<template>
  <div class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-xl font-semibold text-white">Top Spending Categories</h3>
      <NuxtLink
        to="/categories"
        class="text-blue-400 hover:text-blue-300 text-sm"
        >View all</NuxtLink
      >
    </div>
    <TopCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
      class="my-4"
    />
  </div>
</template>
