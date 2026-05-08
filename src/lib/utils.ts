export function formattedDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export function lowercaseAndHyphenate(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}
