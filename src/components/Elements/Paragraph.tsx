import React, { ReactNode } from "react";
import { roobert } from "@/utils/fonts";

interface ParagraphProps {
  children: ReactNode;
  font: "roobert" | "tobias";
  fontSize: "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl";
  startingColumn:
    | "col-start-1"
    | "col-start-2"
    | "col-start-3"
    | "col-start-4"
    | "col-start-5"
    | "col-start-6"
    | "col-start-7"
    | "col-start-8"
    | "col-start-9"
    | "col-start-10"
    | "col-start-11"
    | "col-start-12";
  endingColumn:
    | "col-end-1"
    | "col-end-2"
    | "col-end-3"
    | "col-end-4"
    | "col-end-5"
    | "col-end-6"
    | "col-end-7"
    | "col-end-8"
    | "col-end-9"
    | "col-end-10"
    | "col-end-11"
    | "col-end-12";
  textAlign: "text-left" | "text-center" | "text-right";
}

export default function Paragraph({ children, textAlign }: ParagraphProps) {
  return (
    <p
      className={`${roobert.className} ${textAlign} col-start-1 col-end-3 text-2xl font-medium leading-relaxed `}
    >
      {children}
    </p>
  );
}
