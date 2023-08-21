import React from 'react'
import { cn } from '@/~lib/cn'

/**
 * Adds vertical space between elements.
 * @returns A div with no content, used to create space between elements.
 */
export default function Space({ height = 40, className }: { height?: number; className?: string }) {
   return (
      <div
         className={cn('w-full', className)}
         style={{
            height: height,
         }}
      />
   )
}
