import React from 'react'
import { cn } from '@/~lib/cn'
import { motion } from 'framer-motion'

/**
 * @description Vertical lines
 * @returns Vertical lines
 */
const LinesVertical = () => {
   const lineData = [
      [-1163, 0.08],
      [-1151, 0.1],
      [-1127, 0.12],
      [-1078, 0.14],
      [-980, 0.16],
      [-784, 0.18],
      [-392, 0.2],
      [392, 0.2],
      [784, 0.18],
      [980, 0.16],
      [1078, 0.14],
      [1127, 0.12],
      [1151, 0.1],
      [1163, 0.08],
   ]

   const lines = Array.from({ length: lineData.length }, (_, i) => {
      const classes = 'absolute o-15 top-0 h-full w-[1px] bg-white opacity-0 '
      return (
         <motion.div
            animate={{ opacity: [0, 1, 1, lineData[i][1]], x: [-40, 0, 0] }}
            transition={{ duration: 4, ease: [0.94, 0, 0, 0.99], delay: 0 + i / 10 }}
            key={i}
            className={cn(classes)}
            style={{
               marginLeft: lineData[i][0],
            }}
         />
      )
   })
   return (
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full">
         <div className="relative h-full w-full overflow-hidden">
            <div
               className={cn(
                  'bg-red pointer-events-none absolute top-0 z-20 flex h-full w-full items-center justify-center align-middle',
               )}
            >
               {lines}
            </div>
         </div>
      </div>
   )
}

LinesVertical.displayName = 'LinesVertical'

export default LinesVertical
