import React from 'react'

export default function Introduction({ children }: { children: React.ReactNode }) {
   return (
      <div className="relative mx-auto w-full max-w-[323px] md:max-w-[393px]">
         <p className="text-center text-xl font-normal leading-[25px] tracking-wider text-white">{children}</p>
      </div>
   )
}
