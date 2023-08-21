import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge use class names conditionally
 * @param inputs Class names to merge
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}
