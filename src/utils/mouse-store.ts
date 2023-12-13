import { create } from "zustand";

interface MouseStore {
  mouseCoordinates: {x: number, y:number, centeredx: number , centeredy: number};
  setMouseCoordinates: (
      mouseCoordinates: {x: number, y:number, centeredx: number, centeredy: number},
  ) => void;
}

const useMouseStore = create<MouseStore>((set) => ({
  mouseCoordinates: {x:0, y:0, centeredx: 0, centeredy: 0},
  setMouseCoordinates: (mouseCoordinates) =>
    set((state) => ({
      ...state,
      mouseCoordinates,
    })),
}));

export default useMouseStore;
