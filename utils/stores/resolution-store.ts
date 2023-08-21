import { useEffect } from 'react'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

// eslint-disable-next-line no-spaced-func
const resolutionStore = create<{
   isMobile: boolean | null
   // eslint-disable-next-line func-call-spacing
   setIsMobile: (isMobile: boolean) => void
}>((set) => ({
   isMobile: null,
   setIsMobile: (isMobile: boolean) => set({ isMobile }),
}))

export { resolutionStore }
mountStoreDevtool('Resolution', resolutionStore)

export const useIsMobile = () => {
   const { isMobile, setIsMobile } = resolutionStore((state) => state)

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768)
      }

      handleResize() // Initial check

      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return isMobile
}
