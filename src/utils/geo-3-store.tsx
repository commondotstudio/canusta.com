import { create } from "zustand";

interface Geo3Store {
  websiteBackgroundState: "black" | "white" | "color" | "custom";
  setWebsiteBackgroundState: (
    websiteBackgroundState: "black" | "white" | "color" | "custom",
  ) => void;
  geoTheme: "home" | "blackPage" | "whitePage" | "colorPage" | "customPage";
  setGeoTheme: (geoTheme: "home" | "blackPage" | "whitePage" | "colorPage" | "customPage") => void;
  objectScrollInteraction: 'spin' | 'none';
  setObjectScrollInteraction: (objectScrollInteraction: 'spin' | 'none') => void;
  objectMouseInteraction: 'full' | 'half' | 'none';
  setObjectMouseInteraction: (objectMouseInteraction: 'full' | 'half' | 'none') => void;
  cameraPosition: 'farToClose' | 'close' | 'hide';
  setCameraPosition: (cameraPosition: 'farToClose' | 'close' | 'hide') => void;
  geoStateUpdateTimestamp: number;
  setGeoStateUpdateTimestamp: (geoStateUpdateTimestamp: number) => void;
  geoBackground: string;
  setGeoBackground: (geoBackground: string) => void;
  textColor: 'dark' | 'light' | 'color';
  setTextColor: (textColor: 'dark' | 'light' | 'color' ) => void;
}

const useStore = create<Geo3Store>((set) => ({
  websiteBackgroundState: "black",
  setWebsiteBackgroundState: (websiteBackgroundState) =>
    set((state) => ({
      ...state,
      websiteBackgroundState,
    })),

  geoTheme: "home",
  setGeoTheme: (geoTheme) =>
    set((state) => ({
      ...state,
      geoTheme,
    })),
  objectScrollInteraction: 'spin',
  setObjectScrollInteraction: (objectScrollInteraction) =>
    set((state) => ({
      ...state,
      objectScrollInteraction,
    })),
  objectMouseInteraction: 'full',
  setObjectMouseInteraction: (objectMouseInteraction) =>
    set((state) => ({
      ...state,
      objectMouseInteraction,
    })),
  cameraPosition: 'farToClose',
  setCameraPosition: (cameraPosition) =>
    set((state) => ({
      ...state,
      cameraPosition,
    })),
  geoStateUpdateTimestamp: 0,
  setGeoStateUpdateTimestamp: (geoStateUpdateTimestamp) =>
    set((state) => ({
      ...state,
      geoStateUpdateTimestamp,
    })),
  geoBackground: '',
  setGeoBackground: (geoBackground) =>
    set((state) => ({
      ...state,
      geoBackground,
    })),
  textColor: 'dark',
  setTextColor: (textColor) =>
    set((state) => ({
      ...state,
      textColor,
    })),
}));

export default useStore;
