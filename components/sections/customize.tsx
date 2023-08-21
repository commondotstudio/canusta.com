import React from 'react'
import AboutSection from '@/elements/section-about'
import NumberedSectionTitle from '@/elements/section-numbered-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { Variants, motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default function CustomizeSection() {
   const commonAnimations: Variants = {
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
      <Section classNames="flex flex-col items-center" name="customize">
         <InView>
            {({ inView, ref, entry }) => {
               return (
                  <motion.div
                     className="flex flex-col items-center"
                     custom={inView}
                     initial="offscreen"
                     animate="onscreen"
                     variants={commonAnimations}
                     ref={ref}
                  >
                     <NumberedSectionTitle number="3">CUSTOMIZE</NumberedSectionTitle>
                     <Space height={50} />
                     <AboutSection
                        more={{
                           href: '/#wallet',
                           text: 'Read More',
                        }}
                     >
                        Text about customizing and other things on this step
                     </AboutSection>
                     <Space height={50} />
                     <div>--- image controls ---</div>
                     {/* <LeadButton>MINT TOKEN</LeadButton> */}
                     <Space height={137} />
                  </motion.div>
               )
            }}
         </InView>
      </Section>
   )
}
