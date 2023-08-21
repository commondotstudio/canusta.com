import React from 'react'
import { cn } from '@/~lib/cn'
import { heroNav } from '@/~utils/navigation'

import Space from '../elements/space'
import Section from '../layouts/section'
import DesktopNavigation from './desktop-nav'

export default function StickyNavigation() {
   return (
      <Section classNames="flex flex-col w-full fixed left-1/2 -translate-x-1/2 top-1/2 z-30 -translate-y-1/2 text-white mx-auto pointer-events-none">
         <Space className="!h-0 md:!h-10" />
         <div className={cn('w-full items-center justify-between', 'grid grid-cols-1 md:grid-cols-3')}>
            <DesktopNavigation
               items={heroNav.left}
               style={'alphabedic'}
               classNames={{
                  wrapper: 'md:flex hidden w-0 md:w-auto',
               }}
            />
            {/* TODO: need details about full screen portal */}
            <div />
            <DesktopNavigation
               items={heroNav.right}
               ltr={false}
               style={'numeric'}
               classNames={{
                  wrapper: 'md:visible invisible w-0 md:w-auto',
               }}
            />
         </div>
         <Space height={116} />
      </Section>
   )
}
