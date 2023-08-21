import { create } from 'zustand'

// eslint-disable-next-line no-spaced-func
const hamburgerMenuStore = create<{
   isOpened: boolean | null
   // eslint-disable-next-line func-call-spacing
   setIsOpened: (isOpened: boolean) => void
}>((set) => ({
   isOpened: null,
   setIsOpened: (isOpened: boolean) => set({ isOpened }),
}))

export { hamburgerMenuStore }
