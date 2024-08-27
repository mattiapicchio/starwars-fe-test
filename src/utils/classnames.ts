import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Helper to make it easier to conditionally add Tailwind CSS classes
 */
export function classnames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
