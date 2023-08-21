import React from 'react'
import NavButton, { ScrollableButtonProps } from '@/~components/elements/nav-button'
import { cn } from '@/~lib/cn'
import { Variants, motion } from 'framer-motion'
import { kgid } from 'kgid'

export default function DesktopNavigation({
   items,
   style = 'numeric',
   ltr = true,
   vertical = true,
   classNames,
}: {
   items: INavItem[]
   /**
    * @description Think like `list-style-type` in CSS
    * @default numeric
    */
   style?: 'numeric' | 'alphabedic'
   ltr?: boolean
   vertical?: boolean
   classNames?: {
      wrapper?: string
      navButton?: string
   }
}) {
   const buttonAnimation: Variants = {
      offscreen: {
         opacity: 0,
         x: -200,
      },
      onscreen: (i) => ({
         opacity: [0,1, 1, 1],
         x: 0,
         transition: {
            duration: 2,
            delay: i * 0.5 + 3,
            ease: 'circOut'
         },
      }),
   }
   return (
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
         <div
            className={cn('flex', vertical ? 'flex-col' : 'flex-row gap-3', !ltr && 'items-end', classNames?.wrapper)}
         >
            {items.map((item, idx) => {
               const listStyle = style === 'numeric' ? idx + 1 : String.fromCharCode(65 + idx)
               return (
                  <motion.div
                     key={kgid()}
                     variants={buttonAnimation}
                     custom={idx}
                     className=""
                  >
                     <NavButton
                        key={kgid()}
                        className={cn(!ltr && 'flex-row-reverse ', 'pointer-events-auto gap-2 ', classNames?.navButton)}
                        {...item}
                     >
                        <div className={cn('flex flex-row items-center', !ltr && 'flex-row-reverse')}>
                           <span>{listStyle}</span>
                           <div>-</div>
                        </div>{' '}
                        <div className={cn('w-max')}>{item.text}</div>
                     </NavButton>
                  </motion.div>
               )
            })}
         </div>
      </motion.div>
   )
}

export interface INavItem extends ScrollableButtonProps {
   text: string
   to: string
}
