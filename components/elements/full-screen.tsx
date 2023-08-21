import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/~lib/cn'
import { openScrolling } from '@/~utils/functions'
import * as Portal from '@radix-ui/react-portal'
import { AnimatePresence, motion } from 'framer-motion'

import FullScreenExit from '../svg/material-symbols/full-screen-exit'
import LocationOff from '../svg/material-symbols/location-off'

export default function FullScreen({
   children,
   close,
   isOpened,
}: {
   children: React.ReactNode
   close: () => void
   isOpened: boolean
}) {
   return (
      <AnimatePresence mode="wait">
         {isOpened && (
            <Portal.Root className="fixed inset-0 z-[60] ">
               <motion.div
                  initial={{ opacity: 0, width: '100%' }}
                  animate={{ opacity: 1, width: '100%' }}
                  exit={{ opacity: 0 }}
               >
                  <div
                     className={cn(
                        gridnikFont.variable,
                        'fixed inset-0 z-30 overflow-y-auto bg-black px-5 py-[100px]',
                        'h-screen w-screen',
                        'font-gridnik text-xl leading-[25px] tracking-wide text-white',
                        'flex flex-col items-center gap-9',
                     )}
                  >
                     <button
                        onClick={() => {
                           openScrolling()
                           close()
                        }}
                        className={cn(
                           'flex h-16 w-16 flex-col items-center justify-center',
                           'border border-black bg-black hover:border-white',
                           'transform transition-all duration-150',
                           'fixed left-1/2 top-5 -translate-x-1/2',
                        )}
                     >
                        <FullScreenExit className="h-6 w-6 fill-current text-white" />
                     </button>
                     {children}
                  </div>
               </motion.div>
            </Portal.Root>
         )}
      </AnimatePresence>
   )
}

const gridnikFont = localFont({
   variable: '--font-gridnik',
   weight: '100 400 600 1000',
   src: [
      {
         path: '../../pages/fonts/Black.woff2',
         weight: '1000',
         style: 'normal',
      },
      {
         path: '../../pages/fonts/Medium.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: '../../pages/fonts/Book.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../../pages/fonts/Light.woff2',
         weight: '100',
         style: 'normal',
      },
   ],
})
