import React from 'react'

/**
 * @returns A big title for video section like a headline
 */
export default function BigVideoTitle({ children }: { children?: React.ReactNode }) {
   return <div className="text-center text-headline font-thin leading-[45px] tracking-wider">{children}</div>
}
