export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}

export function formatNumber(number: number): string {
  return `${(number / 1000).toFixed(1)}k`
}
