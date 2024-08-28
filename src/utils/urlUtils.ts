export function extractIdFromSwapiUrl(url: string): string | null {
  const parts = url.split('/').filter(Boolean) // split into an arrau of string and remoce empty strings

  return parts.length > 0 ? parts[parts.length - 1] : null
}
