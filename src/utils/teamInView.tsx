import { create } from "zustand";

type TeamInViewStore = {
  teamInView: boolean;
  setTeamInView: (teamInView: boolean) => void;
};

export const useTeamInViewStore = create<TeamInViewStore>((set) => ({
  teamInView: false,
  setTeamInView: (teamInView) => set({ teamInView }),
}));
