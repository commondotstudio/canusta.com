import React from 'react'

/**
 * @description A little bit smaller section title
 * @param children Title of the section
 * @returns A section title
 */
export default function SectionTitle({ children }: { children: React.ReactNode }) {
   return (
      <h3 className="text-center text-[13px] font-[1000] uppercase leading-[25px] tracking-[0.25em] text-white">
         {children}
      </h3>
   )
}
