import { create } from "zustand";

interface AppControllerStore {
  windowSize: {width: number, height: number};
  setWindowSize: (windowSize: {width: number, height: number}) => void;
  scrollY: number;
  setScrollY: (scrollY: number) => void;
  currentPageTheme: 'dark' | 'light';
  setCurrentPageTheme: (currentPageTheme: 'dark' | 'light') => void;
  isMainOverflowHidden: boolean
  setIsMainOverflowHidden: (mainOverflow: boolean) => void;
  isWindowWidthMd: boolean;
  setIsWindowWidthMd: (isWindowWidthMd: boolean) => void;
}

const useAppControllerStore = create<AppControllerStore>((set) => ({
  windowSize: {width: 0, height: 0},
  setWindowSize: (windowSize) => set({ windowSize }),
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
  currentPageTheme: 'dark',
  setCurrentPageTheme: (currentPageTheme) => set({ currentPageTheme }),
  isMainOverflowHidden: false,
  setIsMainOverflowHidden: (isMainOverflowHidden) => set({ isMainOverflowHidden }),
  isWindowWidthMd: false,
  setIsWindowWidthMd: (isWindowWidthMd) => set({ isWindowWidthMd }),
}));

export default useAppControllerStore;
