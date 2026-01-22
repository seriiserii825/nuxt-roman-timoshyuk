import { defineStore } from 'pinia'

import { ref } from 'vue'

import type { ISummary } from '~/interfaces/ISummary'

export const useSummaryStore = defineStore('summary', () => {
  const summary = ref<ISummary>({
    income: 0,
    expense: 0,
  })
  function setSummary(newSummary: ISummary) {
    summary.value = newSummary
  }

  const balance = computed(() => {
    return summary.value.income - summary.value.expense
  })

  return { summary, setSummary, balance }
})
