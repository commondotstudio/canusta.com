import React from 'react'
import Image from 'next/image'

// TODO: add chapter image
export default function Chapter({
   number,
   children,
   imageSrc,
}: {
   number: number
   children: React.ReactNode
   imageSrc: string
}) {
   return (
      <div className="flex flex-col justify-center gap-10">
         <Image src={imageSrc} width={397} height={208} alt="cover-image" className="w-full" />
         <div className="relative mx-auto flex w-full flex-col items-center justify-center px-10">
            <span className="text-center text-xl font-normal leading-[22px] tracking-wider text-white">
               Chapter {number}
            </span>
            <p className="text-center text-xl font-normal leading-[22px] tracking-wider text-white">{children}</p>
         </div>
      </div>
   )
}
