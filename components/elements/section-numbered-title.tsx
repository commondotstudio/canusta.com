import React from 'react'

/**
 * @description Section title with number and horizontal line
 * @param number Order number of the section
 * @param children Title of the section
 * @returns
 */
export default function NumberedSectionTitle({ children, number }: { children: React.ReactNode; number?: string }) {
   return (
      <div className=" flex items-center justify-center">
         <div className="z-9 absolute flex h-[1px] w-full max-w-[1000px] bg-white bg-gradient-to-r from-black via-white to-black" />
         <div className="z-10 flex w-fit flex-col items-center gap-[19px] border border-hidden bg-transparent px-[21px] py-[6px] md:flex-row md:gap-0 md:border-solid md:bg-black">
            {number && (
               <div className="bg-white px-[35px] py-2 text-xl font-normal leading-[22px] text-black md:bg-black md:px-0 md:py-0 md:text-[13px] md:font-bold md:text-white">
                  {number}
               </div>
            )}
            <span className="hidden text-[13px] font-bold uppercase leading-[25px] tracking-[0.25em] text-white md:block">
               -
            </span>
            <div className="text-[13px] font-bold uppercase leading-[25px] tracking-[0.25em] text-white">
               {children}
            </div>
         </div>
      </div>
   )
}
