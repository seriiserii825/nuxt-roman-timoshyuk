import type { TColorName } from '~/interfaces/TColor'

export default function setColorByPercent(percent: number): TColorName {
  if (percent <= 10) return 'red' // самый большой расход - красный
  if (percent <= 20) return 'orange'
  if (percent <= 30) return 'amber'
  if (percent <= 50) return 'yellow'
  if (percent <= 70) return 'lime'
  if (percent <= 90) return 'green'
  if (percent < 100) return 'emerald'
  return 'teal' // самый маленький расход - зеленый
}
