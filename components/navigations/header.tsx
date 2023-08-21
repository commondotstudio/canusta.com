import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import ConnectWallet from '../elements/connect-wallet'

export default function Header() {
   const [isVisible, setIsVisible] = useState(false)
   const [prevScrollPos, setPrevScrollPos] = useState(0)

   const ref = useRef<HTMLAnchorElement>(null)

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPos = window.pageYOffset
         const halfScreenHeight = document.documentElement.clientHeight / 2

         if (currentScrollPos > halfScreenHeight) {
            setIsVisible(true)
         } else {
            setIsVisible(false)
         }

         setPrevScrollPos(currentScrollPos)
      }

      window.addEventListener('scroll', handleScroll)

      const currentRef = ref.current

      if (currentRef) {
         currentRef.addEventListener('click', scrollToTop)
      }

      return () => {
         window.removeEventListener('scroll', handleScroll)

         if (currentRef) {
            currentRef.removeEventListener('click', scrollToTop)
         }
      }
   }, [prevScrollPos])

   const containerVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   }

   return (
      <div className="fixed left-1/2 top-10 z-50 mx-auto w-full max-w-8xl -translate-x-1/2 justify-between px-7.5 md:flex">
         <div className="cursor-pointer  text-[32px] font-thin leading-[28px] tracking-wider text-white">
            <AnimatePresence>
               {isVisible && (
                  <motion.a
                     ref={ref}
                     initial="hidden"
                     animate="visible"
                     variants={containerVariants}
                     exit="hidden"
                     onClick={scrollToTop}
                  >
                     GLACIER <br /> DREAMS
                  </motion.a>
               )}
            </AnimatePresence>
         </div>
         {/* <ConnectWallet /> */}
      </div>
   )
}
