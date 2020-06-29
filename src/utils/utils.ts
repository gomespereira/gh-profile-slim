export function formatter(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}
