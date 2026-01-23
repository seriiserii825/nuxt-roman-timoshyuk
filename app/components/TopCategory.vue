<script setup lang="ts">
  import type { PropType } from 'vue'

  import formatCurrency from '~/helpers/formatCurrency'
  import type { ICategoryWithRating } from '~/interfaces/ITransaction'

  defineProps({
    category: {
      type: Object as PropType<ICategoryWithRating>,
      required: true,
    },
  })
</script>

<template>
  <div class="space-y-4">
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-300">{{ category.title }}</span>
        <span class="text-gray-400 text-sm">{{
          formatCurrency(category.total)
        }}</span>
      </div>
      <div class="w-full bg-slate-700 rounded-full h-2">
        <div
          class="h-2 rounded-full"
          :style="`width: ${category.rating}%; background: ${category.color};`"
        ></div>
      </div>
    </div>
  </div>
</template>
