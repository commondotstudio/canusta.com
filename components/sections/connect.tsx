import React from 'react'
import LeadButton from '@/elements/lead-button'
import AboutSection from '@/elements/section-about'
import NumberedSectionTitle from '@/elements/section-numbered-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { Variants, motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

// TODO: this component is not responsive
export default function ConnectSection() {
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
      <Section classNames="flex flex-col items-center p-10 md:p-0" name="connect">
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
                     <NumberedSectionTitle number="1">Connect</NumberedSectionTitle>
                     <Space className="!h-[42px] md:!h-[50px]" />
                     <AboutSection
                        more={{
                           href: '/#wallet',
                           text: 'Read More',
                        }}
                     >
                        Text about wallet and other things on this step!
                     </AboutSection>
                     <Space height={50} />
                     <LeadButton>Connect Wallet</LeadButton>
                     <Space className="!h-[199px] md:!h-[120px]" />
                  </motion.div>
               )
            }}
         </InView>
      </Section>
   )
}
