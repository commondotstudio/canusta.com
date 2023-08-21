import React from 'react'
import { Variants, motion } from 'framer-motion'

export default function ConnectWallet() {
   const buttonAnimation: Variants = {
      offscreen: {
         opacity: 0,
      },
      onscreen: {
         opacity: 1,
         transition: {
            duration: 2,
            delay: 4,
         },
      },
   }

   return (
      <motion.div initial="offscreen" animate="onscreen" variants={buttonAnimation} className="hidden md:block">
         <button className="rounded-[10px] bg-white px-[22px] py-2 text-[13px] font-bold uppercase leading-[25px] tracking-wide text-black transition duration-200 ease-out hover:shadow-[0px_0px_10px_2px_rgba(0,163,255,1)]">
            CONNECT WALLET
         </button>
      </motion.div>
   )
}
