import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface IsLoadingStore {
  homeComponent: boolean;
  setHomeComponent: (homeComponent: boolean) => void;
  /**
   * Use it when route will change
   */
  pageLoading: boolean;
  setPageLoading: (pageLoading: boolean) => void;
  contactPage: boolean;
  setContactPage: (contactPage: boolean) => void;
}

const useIsLoadingStore = create<IsLoadingStore>((set) => ({
  homeComponent: false,
  setHomeComponent: (homeComponent) => set({ homeComponent }),
  pageLoading: false,
  setPageLoading: (pageLoading) => set({ pageLoading }),
  contactPage: false,
  setContactPage: (contactPage) => set({ contactPage }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("useIsLoadingStore", useIsLoadingStore);
}

export default useIsLoadingStore;
