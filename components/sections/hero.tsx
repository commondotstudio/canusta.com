import React from 'react'
import Image from 'next/image'
import BigVideoTitle from '@/elements/big-video-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { cn } from '@/~lib/cn'
import { resolutionStore } from '@/~utils/stores/resolution-store'
import { siteSettingsStore } from '@/~utils/stores/site-settings-store'
import { AnimatePresence, Variants, motion } from 'framer-motion'

export default function HeroSection() {
   const { isOpeningAnimation } = siteSettingsStore()

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
         y: 30,
         scale: 1,
      },
      onscreen: {
         opacity: 1,
         y: 0,
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

   const scrollToContent = () => {
      // if is mobile, scroll to 636 below the top of the page
      if (resolutionStore.getState().isMobile) {
         const scrollHeight = 636
         window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
         })
      } else {
         // if is desktop, scroll 824 below the top of the page
         const scrollHeight = 824
         window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
         })
      }
   }

   return (
      <Section
         classNames="relative z-10 flex flex-col w-full md:min-h-screen items-center md:justify-center relative"
         name="section1"
      >
         <div className={cn('w-full h-[100vh] items-center justify-between', 'grid grid-cols-1')}>
            <div />
            <motion.div initial="offscreen" className='h-[100vh]' whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
               <div className="relative box-border h-fit w-auto h-[100vh]">
                  <AnimatePresence>
                     <motion.div className="card h-[100vh] flex" variants={videoAnimation}>
                        <div
                           className="bottom absolute bottom-0 left-0 z-10 flex w-full"
                           style={{
                              height: '56%',
                              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
                           }}
                        />
                     </motion.div>
                  </AnimatePresence>

                  <div className="absolute left-1/2 top-1/2 z-20 h-fit w-fit -translate-x-1/2 -translate-y-1/2 transform">
                     <motion.div initial="offscreen" animate="onscreen" variants={titleVariants}>
                        <BigVideoTitle>
                           soon
                        </BigVideoTitle>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
            <div />
         </div>
      </Section>
   )
}
