<script setup>
const emits = defineEmits(['emit_update_current'])

const props = defineProps({
  current_page: { type: Number, required: true },
  total_pages: { type: Number, required: true },
  window: { type: Number, default: 1 },
})

function goPrev() {
  if (props.current_page > 1) {
    emits('emit_update_current', props.current_page - 1)
  }
}

function goNext() {
  if (props.current_page < props.total_pages) {
    emits('emit_update_current', props.current_page + 1)
  }
}

function goTo(page) {
  if (typeof page === 'number' && page !== props.current_page) {
    emits('emit_update_current', page)
  }
}

function buildPages(current, total, win = 1, edge = 2) {
  if (total <= 0) return []

  const cur = Math.max(1, Math.min(current, total))
  const set = new Set()

  for (let i = 1; i <= Math.min(edge, total); i++) set.add(i)
  for (let i = Math.max(1, cur - win); i <= Math.min(total, cur + win); i++) set.add(i)
  for (let i = Math.max(1, total - edge + 1); i <= total; i++) set.add(i)

  const sorted = [...set].sort((a, b) => a - b)

  const out = []
  let prev = 0
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push('dots')
    out.push(p)
    prev = p
  }
  return out
}
</script>

<template>
  <nav
    class="flex flex-wrap items-center justify-center gap-2 max-w-[900px] mx-auto"
    role="navigation"
    aria-label="Pagination"
  >
    <!-- Prev -->
    <button
      :disabled="current_page === 1"
      class="w-10 h-10 flex items-center justify-center rounded-md
             border border-slate-700 bg-slate-800 text-slate-300
             hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
      aria-label="Previous page"
      @click="goPrev"
    >
      ‹
    </button>

    <!-- Pages -->
    <template v-for="(p, idx) in buildPages(current_page, total_pages, window)" :key="idx">
      <!-- Dots -->
      <span
        v-if="p === 'dots'"
        class="w-10 h-10 flex items-center justify-center text-slate-500"
        aria-hidden="true"
      >
        …
      </span>

      <!-- Page -->
      <button
        v-else
        :aria-current="p === current_page ? 'page' : undefined"
        class="w-10 h-10 rounded-md text-sm font-semibold transition
               border border-slate-700"
        :class="
          p === current_page
            ? 'bg-slate-600 text-white'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
        "
        @click="goTo(p)"
      >
        {{ p }}
      </button>
    </template>

    <!-- Next -->
    <button
      :disabled="current_page === total_pages"
      class="w-10 h-10 flex items-center justify-center rounded-md
             border border-slate-700 bg-slate-800 text-slate-300
             hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
      aria-label="Next page"
      @click="goNext"
    >
      ›
    </button>
  </nav>
</template>
