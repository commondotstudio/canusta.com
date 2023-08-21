import { create } from 'zustand'

// eslint-disable-next-line no-spaced-func
const siteSettingsStore = create<{
   isOpeningAnimation: boolean | null
   // eslint-disable-next-line func-call-spacing
   setIsOpeningAnimation: (isOpeningAnimation: boolean) => void
}>((set) => ({
   isOpeningAnimation: true,
   setIsOpeningAnimation: (isOpeningAnimation: boolean) => set({ isOpeningAnimation }),
}))

export { siteSettingsStore }
