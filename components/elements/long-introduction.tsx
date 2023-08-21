import React, { useState } from 'react'
import { closeScrolling } from '@/~utils/functions'

import FullScreen from './full-screen'
import Space from './space'

// FIXME: gradient and position of button should be fixed
// FIXME: read more button must open a full screen modal
export default function LongIntroduction({
   children,
   title,
   CompWidth,
}: {
   children: string
   title?: string
   CompWidth?: string
}) {
   const [isOpened, setIsOpened] = useState<boolean>(false)

   if (CompWidth === 'half') {
      CompWidth = '390px'
   } else if (CompWidth === 'full') {
      CompWidth = '768px'
   }

   return (
      <div className="relative flex w-full flex-col" style={{ maxWidth: CompWidth }}>
         {title && (
            <h3 className="text-center text-[13px] font-[1000] uppercase leading-[25px] tracking-[0.25em] text-white">
               {title}
            </h3>
         )}
         <Space height={17} />
         <p className="z-30 bg-[rgba(0,0,0,0.8)] p-[21px] text-center text-xl font-normal leading-[25px] tracking-[0.09em] text-white">
            {children.slice(0, 300)}
         </p>
         <div className="absolute left-0 top-0 z-30 h-full w-full bg-gradient-to-t from-[#000000] to-[#00000000] " />
         {/* TODO: it's block change to twMerge 'open' and 'close'*/}
         <div className="absolute bottom-[40px] sm:bottom-[20px] left-1/2 z-50 -translate-x-1/2">
            <button
               onClick={() => {
                  setIsOpened(!isOpened)
                  closeScrolling()
               }}
               className="w-fit rounded-[4px] border border-white bg-[#D9D9D9] bg-opacity-10 px-8 py-2 text-sm font-normal leading-[22px] tracking-wider text-white backdrop-blur-[5px]"
            >
               {!isOpened ? 'READ MORE' : 'READ LESS'}
            </button>
         </div>
         <FullScreen close={() => setIsOpened(false)} isOpened={isOpened}>
            {title && <div className="text-[13px] font-[1000] uppercase tracking-title">{title}</div>}
            <div className="max-w-2xl">{children}</div>
         </FullScreen>
      </div>
   )
}
