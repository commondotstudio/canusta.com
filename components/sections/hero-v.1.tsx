import React from 'react'
import Image from 'next/image'
import BigVideoTitle from '@/elements/big-video-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { cn } from '@/~lib/cn'
import { resolutionStore } from '@/~utils/stores/resolution-store'
import { siteSettingsStore } from '@/~utils/stores/site-settings-store'
import { AnimatePresence, Variants, motion } from 'framer-motion'

// FIXME: needs detailed numbers for responsive changes
export default function HeroSection() {
   // const { isMobile } = resolutionStore()
   // console.log({ isMobile })
   const { isOpeningAnimation } = siteSettingsStore()
   console.log(isOpeningAnimation)

   const buttonAnimation: Variants = {
      offscreen: {
         opacity: 0,
         x: -50,
      },
      onscreen: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 2,
            delay: isOpeningAnimation ? 3 : 1.5,
         },
      },
   }

   const titleVariants: Variants = {
      offscreen: {
         opacity: 0,
         x: -30,
         scale: 1,
      },
      onscreen: {
         opacity: 1,
         x: 0,
         scale: 1,
         transition: {
            duration: 2,
            delay: isOpeningAnimation ? 1.5 : 1,
            ease: 'easeOut',
         },
      },
   }

   const videoAnimation: Variants = {
      offscreen: {
         opacity: 0,
         x: -10,
         scale: 1,
      },
      onscreen: {
         opacity: 1,
         x: 0,
         scale: 1,
         transition: {
            duration: 2,
            delay: isOpeningAnimation ? 2.5 : 0,
            ease: 'easeInOut',
         },
      },
   }

   return (
      <Section
         classNames="relative z-10 flex flex-col w-full md:min-h-screen items-center md:justify-center relative"
         name="section1"
      >
         <Space className="!h-0 md:!h-10" />
         <div className={cn('w-full items-center justify-between', 'grid max-w-[393px] grid-cols-1')}>
            <div />
            {/* TODO: need details about full screen portal */}
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
               <div className="relative box-border h-fit w-auto">
                  <AnimatePresence>
                     <motion.div className="card" variants={videoAnimation}>
                        <Image
                           src="/images/hero_painting-2.jpg"
                           width={393}
                           height={701}
                           alt="Glacier Dreams"
                           className="w-full object-contain"
                           quality={100}
                        />
                        <div
                           className="bottom absolute bottom-0 left-0 z-10 flex w-full"
                           style={{
                              height: '36%',
                              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
                           }}
                        />
                     </motion.div>
                  </AnimatePresence>

                  <div className="absolute left-1/2 top-1/2 z-20 h-fit w-fit -translate-x-1/2 -translate-y-1/2 transform">
                     <motion.div initial="offscreen" animate="onscreen" variants={titleVariants}>
                        <BigVideoTitle>GLACIER DREAMS</BigVideoTitle>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
            <div />
         </div>
         <Space height={116} className="!h-[68px] md:!h-[116px]" />
         <button className="absolute bottom-[177px] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform ">
            <motion.div
               initial="offscreen"
               animate="onscreen"
               variants={buttonAnimation}
               className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-[rgba(255,255,255,0.7)] bg-white bg-opacity-10"
            >
               <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L14.5 14.5L28 1" stroke="white" />
               </svg>
            </motion.div>
         </button>
      </Section>
   )
}
