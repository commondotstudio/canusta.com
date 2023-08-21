import React from 'react'
import Accordions from '@/elements/accordion'
import SectionTitle from '@/elements/section-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { Variants, motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default function FAQ() {
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
      <Section classNames="justify-center flex flex-col items-center" name="faq">
         <InView>
            {({ inView, ref, entry }) => {
               return (
                  <motion.div
                     className="flex flex-col items-center justify-center"
                     custom={inView}
                     initial="offscreen"
                     animate="onscreen"
                     variants={commonAnimations}
                     ref={ref}
                  >
                     <Space className="!h-[52px] md:!h-[76px]" />
                     <SectionTitle>FAQ</SectionTitle>
                     <Space height={35} />
                     <Accordions items={faqContent} />
                  </motion.div>
               )
            }}
         </InView>
      </Section>
   )
}

const faqContent = [
   {
      title: 'What is minting?',
      content:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   },
   {
      title: 'How do I get a wallet?',
      content:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   },
   {
      title: 'How does a whitelist work?',
      content:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   },
]
