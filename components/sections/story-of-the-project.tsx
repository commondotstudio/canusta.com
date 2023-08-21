import React from 'react'
import Button from '@/elements/button'
import Chapter from '@/elements/chapter'
import SectionTitle from '@/elements/section-title'
import Space from '@/elements/space'
import Section from '@/layouts/section'
import { Variants, motion } from 'framer-motion'
import { kgid } from 'kgid'
import { InView } from 'react-intersection-observer'

export default function StoryOfTheProject() {
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
      <Section classNames="justify-center flex flex-col items-center max-w-[1230px]" name="story">
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
                     <Space height={24} />
                     <SectionTitle>STORY OF THE PROJECT</SectionTitle>
                     <Space height={40} />
                     <div className="grid grid-cols-1 gap-[58px] md:grid-cols-3 md:gap-0">
                        {chapters.map((chapter, idx) => {
                           const number = idx + 1
                           return (
                              <Chapter key={kgid()} imageSrc={`/images/chapters/${number}.jpg`} number={number}>
                                 {chapter.title}
                              </Chapter>
                           )
                        })}
                     </div>
                  </motion.div>
               )
            }}
         </InView>

         <Space height={41} />
         <Button>READ MORE</Button>
         <Space height={66} />
      </Section>
   )
}

const chapters = [
   {
      title: 'Text about chapter 1 Text about chapter 1 Text about chapter 1 Text about chapter 1 ',
   },
   {
      title: 'Text about chapter 2 Text about chapter 2 Text about chapter 2 Text about chapter 2 ',
   },
   {
      title: 'Text about chapter 3 Text about chapter 3 Text about chapter 3 Text about chapter 3 ',
   },
]
