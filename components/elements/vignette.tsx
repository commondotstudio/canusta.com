import React from 'react'

/**
 * This is a vignette component.
 */
export default function Vignette({ children }: { children: React.ReactNode }) {
   return (
      <div className="relative z-20 box-border h-fit w-fit">
         <div
            className="absolute inset-0 z-20 h-full w-full"
            style={{
               background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 48.44%, #000000 100%)',
            }}
         />
         {children}
      </div>
   )
}
