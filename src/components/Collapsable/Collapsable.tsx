import React, { useState, useEffect, ReactNode } from "react";
import useStore from "@/utils/geo-3-store";
import { roobert, tobias } from "@/utils/fonts";
import { InterfaceUnknownObject } from "@/pages/[slug]";
import { stringToHTML } from "@/utils/stringToHTML";

export default function Collapsable(props: InterfaceUnknownObject) {
  const sectionHeader = props.section_header;
  const length = props.content as number;
  const contentItems = Array.from({ length: length }, (_, index) => ({
    header: props[`content_${index}_header`] as string,
    text: props[`content_${index}_text`] as string,
  }));

  const [open, setOpen] = useState<number | null>(null);
  const [theme, setTheme] = useState("");
  const { websiteBackgroundState } = useStore();

  useEffect(() => {
    if (websiteBackgroundState === "white") {
      setTheme("light");
    } else if (websiteBackgroundState === "black") {
      setTheme("dark");
    }
  }, [websiteBackgroundState]);

  const toggleCollapse = (collapseNumber: number) => {
    if (open === collapseNumber) {
      setOpen(null);
    } else {
      setOpen(collapseNumber);
    }
  };

  return (
    <div
      className={` my-10 h-auto px-sm sm:my-6 sm:px-md 
      ${theme === "light" ? "text-black" : "text-white"}
      full grid-cols-1
      `}
    >
      <div
        className={`${tobias.className} row-start-1 row-end-2 mb-[60px] mt-[20px] grow text-4xl font-thin`}
      >
        {sectionHeader}
      </div>
      <div className="flex flex-col gap-4">
        {contentItems.map((item, index) => (
          <div
            className={`space-y-2 py-4
        ${index === contentItems.length - 1 ? "" : "border-b"}`}
            key={index}
          >
            <button
              className={`flex w-full items-center justify-between
          ${roobert.className} -translate-y-[3px] text-xl
          font-medium sm:text-2xl
        `}
              onClick={() => toggleCollapse(index)}
            >
              {item.header}
              <div className="relative flex flex-col items-center">
                <div
                  className={`absolute h-[1px] w-[12px] rotate-90 border-b transition-all duration-300 ${
                    open === index ? "opacity-0" : "opacity-1"
                  }`}
                ></div>
                <div className="h-[1px] w-[14px] border-b"></div>
              </div>
            </button>
            <div
              style={{
                maxHeight: open === index ? "980px" : "0",
                overflow: "hidden",
                transition: "max-height 0.5s ease-in-out",
              }}
              className={`w-full space-y-2 text-[16px] font-light
              sm:w-1/2 sm:text-base 
              `}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
