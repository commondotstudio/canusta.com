import React, { useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { resolutionStore } from '@/~utils/stores/resolution-store'
import { NextSeo } from 'next-seo'

import Header from '@/components/navigations/header'
import StickyNavigation from '@/components/navigations/sticky-navigation'

const HamburgerMenu = dynamic(() => import('@/components/navigations/hamburger-menu'), { ssr: false })

export default function SiteLayout({ children }: { children: React.ReactNode }) {
   const MemoizedChecks = useMemo(() => <GlobalChecks />, [])
   return (
      <>
         <div className="relative box-border w-full bg-black text-white">{children}</div>
         {/* <HamburgerMenu /> */}
         {/* <StickyNavigation /> */}
         {/* <Header /> */}
         <NextSeo
            title="Can Usta"
            description=""
            additionalLinkTags={[
               {
                  rel: 'icon',
                  href: '/favicon.ico',
               },
            ]}
         />
         {MemoizedChecks}
      </>
   )
}

function GlobalChecks() {
   const { isMobile, setIsMobile } = resolutionStore((state) => state)

   useEffect(() => {
      const handleResize = () => {
         if (!resolutionStore.getState().isMobile && window.innerWidth <= 768) {
            return setIsMobile(true)
         }
         if (resolutionStore.getState().isMobile && window.innerWidth > 768) {
            return setIsMobile(false)
         }
         if (resolutionStore.getState().isMobile && window.innerWidth <= 768) {
            return
         }
         return
      }

      handleResize() // Initial check

      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return <></>
}
