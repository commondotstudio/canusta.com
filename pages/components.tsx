import React from 'react'
import Accordions from '@/~components/elements/accordion'
import Button from '@/~components/elements/button'
import Chapter from '@/~components/elements/chapter'
import Introduction from '@/~components/elements/introduction'
import LeadButton from '@/~components/elements/lead-button'
import LongIntroduction from '@/~components/elements/long-introduction'
import AboutSection from '@/~components/elements/section-about'
import NumberedSectionTitle from '@/~components/elements/section-numbered-title'
import SectionTitle from '@/~components/elements/section-title'
import SiteLayout from '@/~components/layouts/general'

export default function TempComponents() {
   return (
      <div className="flex flex-col items-center justify-center gap-20">
         <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined">settings</span>
            <span className="material-symbols-rounded">delete</span>
            <span className="material-symbols-sharp">home</span>
         </div>
         <Button>Read More</Button>
         <div className="flex flex-col gap-2">
            <NumberedSectionTitle number="1">Connect</NumberedSectionTitle>
            <NumberedSectionTitle number="2">Buy Access Token</NumberedSectionTitle>
            <NumberedSectionTitle number="3">CUSTOMIZE</NumberedSectionTitle>
            <NumberedSectionTitle number="4">MINT</NumberedSectionTitle>
         </div>
         <Introduction>
            Commissioned by Swiss Wealth Manager Julius Baer and curated by Hans Ulrich Obrist, Glacier Dreams is Refik
            Anadol’s groundbreaking new project inspired by the beauty and fragility of the world’s glaciers.
         </Introduction>
         <LongIntroduction title="ABOUT THE PROJECT">
            This series of artworks based on a vast dataset comprised of glacier visuals, emerge from a long-term
            research project at the intersection of multi-sensory new media art, machine learning, and environmental
            studies. For Glacier Dreams, Refik Anadol will utilize over 100 million visual materials from online and
            institutional archives along with an additional dataset of more than 10 million personally-collected glacier
            visuals in Iceland, Greenland, and Antarctica. The artist will first process this vast dataset through
            machine learning algorithms and then transform the processed dataset into AI-based multi-sensory narratives.
            The resulting audio-visual, immersive artwork will also have an olfactory component created with a
            pioneering artificial intelligence model. The first chapter of this revolutionary work will be revealed at
            this year’s Art Dubai 2023.
         </LongIntroduction>
         <AboutSection
            more={{
               href: '/wallet',
               text: 'Read More',
            }}
         >
            Text about wallet and other things on this step
         </AboutSection>
         <div className="flex flex-col gap-3">
            <LeadButton>MINT TOKEN</LeadButton>
            <LeadButton>MINT TOKEN</LeadButton>
         </div>
         <SectionTitle>STORY OF THE PROJECT</SectionTitle>
         <Chapter imageSrc="/images/chapters/1.jpg" number={2}>
            Text about chapter 2 Text about chapter 2 Text about chapter 2 Text about chapter 2
         </Chapter>
         <Accordions items={FAQ} />
      </div>
   )
}

TempComponents.getLayout = (page: JSX.Element) => (
   <SiteLayout>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10">{page}</div>
   </SiteLayout>
)

const FAQ = [
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
