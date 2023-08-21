import React from 'react'
import Image from 'next/image'
import Space from '@/elements/space'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default function Footer() {
   const commonAnimations = {
      offscreen: {
         opacity: 0,
      },
      onscreen: (i) => ({
         opacity: i ? 1 : 0,
         transition: {
            duration: 2,
            delay: 0,
         },
      }),
   }

   return (
      <>
         <Space height={95} />
         <div className="flex flex-col items-center justify-center">
            here
            </div>
         <Space height={95} />
      </>
   )
}
