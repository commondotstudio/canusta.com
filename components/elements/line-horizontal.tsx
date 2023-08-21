import React from 'react'
import { cn } from '@/~lib/cn'
import { Variants, motion } from 'framer-motion'
import { siteSettingsStore } from '@/~utils/stores/site-settings-store'

/**
 * @description Horizontal line
 * @returns Horizontal line
 */
const LineHorizontal = () => {

   return (
        <div
            className={cn(
                'flex w-full h-[1px] z-20 pointer-events-none bg-gradient-to-r from-black via-[#333] to-black',
            )} />
   )
}

LineHorizontal.displayName = 'LineHorizontal'

export default LineHorizontal
