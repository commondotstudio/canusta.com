import React from "react";
import { useTeamInViewStore } from "@/utils/teamInView";

export default function TeamBackground() {
  const teamInView = useTeamInViewStore((state) => state.teamInView);
  return (
    <div
      className={`fixed left-0 top-0 z-[1] h-screen w-screen bg-darkGray transition-all duration-500 ease-linear
    ${teamInView ? "opacity-1" : "opacity-0"}
    `}
    ></div>
  );
}
