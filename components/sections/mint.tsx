import React from 'react'
import LeadButton from '@/elements/lead-button'
import AboutSection from '@/elements/section-about'
import NumberedSectionTitle from '@/elements/section-numbered-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { Variants, motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default function MintToken() {
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
      <Section classNames="flex flex-col items-center" name="mint">
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
                     <NumberedSectionTitle number="4">MINT</NumberedSectionTitle>
                     <Space className="!h-[57px] md:!h-[60px]" />
                     <AboutSection
                        more={{
                           href: '/#wallet',
                           text: 'Read More',
                        }}
                     >
                        Text about minting and other things on this step
                     </AboutSection>
                     <Space height={60} />
                     <LeadButton>MINT NFT</LeadButton>
                     <Space className="!h-[93px] md:!h-[85px]" />
                  </motion.div>
               )
            }}
         </InView>
      </Section>
   )
}
