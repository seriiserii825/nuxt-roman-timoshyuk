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
  return { summary, setSummary }
})
