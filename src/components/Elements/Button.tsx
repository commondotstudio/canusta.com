import React from "react";
import { roobert } from "@/utils/fonts";

interface ButtonProps {
  buttonType?: string;
  children: React.ReactNode;
}

export default function Button({ children, buttonType }: ButtonProps) {
  //button types "outline", "blue", "gray"

  return (
    <button
      className={`h-[44px] w-full rounded-md border
        ${roobert.className} pointer-events-auto text-base font-light
        ${
          buttonType === "outline"
            ? "border-white text-white"
            : buttonType === "blue"
            ? "bg-blue border-0 text-white"
            : buttonType === "gray"
            ? "bg-darkgray border-0 text-white"
            : ""
        }
    `}
    >
      {children}
    </button>
  );
}
