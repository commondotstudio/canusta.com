import React, { useState } from 'react'
import Image from 'next/image'
import Introduction from '@/elements/introduction'
import LongIntroduction from '@/elements/long-introduction'
import Space from '@/elements/space'
import Vignette from '@/elements/vignette'
import Section from '@/layouts/section'
import { closeScrolling } from '@/~utils/functions'
import { Variants, motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'

import FullScreen from '../elements/full-screen'
import LineHorizontal from '../elements/line-horizontal'

// TODO: this component is not responsive
export default function SecondSection() {
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
      <Section classNames="justify-center flex flex-col items-center" name="about">
         <Space className="!h-0 md:!h-[50px]" />
         <InView>
            {({ inView, ref, entry }) => {
               return (
                  <div ref={ref}>
                     <motion.div custom={inView} initial="offscreen" animate="onscreen" variants={commonAnimations}>
                        <LongIntroduction CompWidth="full">
                           {
                              'Refik Anadol Studio is excited to unveil its next Digital Collectibles production in collaboration with Julius Baer as part of a global multichapter AI art journey that started at Art Dubai 2023. The collection will develop from a series of aesthetic interpretations of the dataset that Anadol and his team collected for Glacier Dreams – an interdisciplinary research and art project aiming to raise awareness about climate change as well as ethical data collection methods in the field of generative AI. For Glacier Dreams, Refik Anadol Studio utilized over 100 million visual materials from online and institutional archives along with an additional dataset of more than 10 million glacier visuals that Anadol has personally collected in Iceland, Greenland, and Antarctica. This unique set of Digital collectibles will provide collectors a way to customize the image and the metadata of their collectibles through interactions with a Diffusion model of glaciers and artistic post-processing to the image. Conceptual details such as using the freezing point of water at 273 Kelvin throughout the project will add another layer to its thematic focus on glaciers, further connecting users with the global cause that the project contributes to.'
                           }
                        </LongIntroduction>
                     </motion.div>
                  </div>
               )
            }}
         </InView>

         <Space className="!h-0 md:!h-[50px]" />
         <LineHorizontal />

         <Space className="!h-[69px] md:!h-[40px]" />
         <InView>
            {({ inView, ref, entry }) => {
               return (
                  <div ref={ref}>
                     <motion.div custom={inView} initial="offscreen" animate="onscreen" variants={commonAnimations}>
                        <Video />
                     </motion.div>
                  </div>
               )
            }}
         </InView>

         <Space className="!h-[88px] md:!h-[78px]" />
         <LineHorizontal />
         <Space className="!h-[105px] md:!h-[115px]" />

         <InView>
            {({ inView, ref, entry }) => {
               return (
                  <div ref={ref}>
                     <motion.div custom={inView} initial="offscreen" animate="onscreen" variants={commonAnimations}>
                        <LongIntroduction CompWidth="half" title="ABOUT THE PROJECT">
                           {
                              'Commissioned by Swiss Wealth Manager Julius Baer, Glacier Dreams is Refik Anadol’s groundbreaking new project inspired by the beauty and fragility of the world’s glaciers resulting from a long-term research project at the intersection of multisensory new media art, machine learning, and environmental studies. For Glacier Dreams, Refik Anadol processed a dataset of visual materials from online and institutional archives along with additional, personally-collected glacier visuals in Iceland through machine learning algorithms. The artist then transformed the processed dataset into AI-based multisensory narratives. The resulting audio-visual, immersive artwork also has an olfactory component created with a pioneering artificial intelligence model'
                           }
                        </LongIntroduction>
                     </motion.div>
                  </div>
               )
            }}
         </InView>

         <Space className="!h-[105px] md:!h-[115px]" />
      </Section>
   )
}

// FIXME: this should be a Vimeo
function Video() {
   const [isOpened, setIsOpened] = useState<boolean>(false)
   const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

   const commonAnimations: Variants = {
      offscreen: {
         opacity: 0,
         width: '100%',
         height: '100%',
      },
      onscreen: (i) => ({
         opacity: i ? 1 : 0,
         width: '100%',
         height: '100%',
         transition: {
            duration: 2,
            delay: 0,
         },
      }),
   }

   return (
      <Vignette>
         <Image src="/images/second-section.jpg" width={824} height={433} alt="" className="relative z-10" />
         <button
            className="absolute left-1/2 top-1/2 z-20 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center  justify-center rounded-full border-[3px] border-solid border-white bg-white bg-opacity-20 backdrop-blur-sm"
            onClick={() => {
               closeScrolling()
               setIsOpened(true)
            }}
         >
            <svg
               className="ml-[4px]"
               width="10"
               height="20"
               viewBox="0 0 10 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M0 20V0L10 10L0 20Z" fill="white" />
            </svg>
         </button>
         <FullScreen
            isOpened={isOpened}
            close={() => {
               setIsOpened(false)
               setVideoLoaded(false)
            }}
         >
            <motion.div custom={videoLoaded} initial="offscreen" animate="onscreen" variants={commonAnimations}>
               <ReactPlayer
                  url={
                     'https://player.vimeo.com/progressive_redirect/playback/804705619/rendition/1080p/file.mp4?loc=external&signature=dc758b10aee5e3aa8ac283d14d7c62fe1c939812415573631a3e7f29df1fc703'
                  }
                  width={'100%'}
                  height={'100%'}
                  controls
                  playing={true}
                  onReady={(a) => {
                     if (a) {
                        setTimeout(() => {
                           setVideoLoaded(true)
                        }, 300)
                     }
                  }}
               />
            </motion.div>
         </FullScreen>
      </Vignette>
   )
}
