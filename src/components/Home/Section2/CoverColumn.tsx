import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { celal1, celal2 } from "@/utils/transitions";
import { tobias, roobert } from "@/utils/fonts";
import { useEffect } from "react";
import Link from "@/components/Elements/Link";

interface Props {
  title: string;
  description: string;
  href: string;
  border?: boolean;
  preSetHovered?: boolean;
  isSection2Active: boolean;
}

export default function CoverColumn({
  title,
  description,
  href,
  border,
  preSetHovered,
  isSection2Active,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  const [preHovered, setPreHovered] = useState(false);

  useEffect(() => {
    if (preSetHovered) {
      setPreHovered(true);
    }
  }, [preSetHovered]);

  const handleHover = () => {
    setHovered(true);
    setPreHovered(false);
  };

  return (
    <motion.div
      id="cover-column"
      onClick={handleClick}
      onTap={handleClick}
      className={`flex w-screen flex-grow cursor-pointer transition-all duration-500 xl:mt-0 xl:h-auto xl:w-1/3
      ${border ? "xl:border-r-[1px] xl:border-[#333333]" : "border-none"}
      ${hovered ? "xl:w-2/4" : "xl:w-1/4"}
      ${preHovered ? "xl:w-2/4" : "xl:w-1/4"}
      ${isSection2Active ? "pointer-events-auto" : "pointer-events-none"}
  `}
    >
      <motion.div
        id="filter-container"
        onClick={handleClick}
        onTap={handleClick}
        initial={{ backdropFilter: "grayscale(1)" }}
        onHoverStart={handleHover}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ backdropFilter: "grayscale(0)" }}
        transition={{ duration: 1 }}
        className="z-50 flex h-auto w-screen flex-col justify-start gap-0 px-sm xl:h-screen xl:px-8"
      >
        <motion.div
          id="description-container"
          transition={{ duration: 1.5, ease: celal2 }}
          className={`flex flex-col items-start justify-center gap-4 py-2 opacity-100 xl:mb-8 xl:py-4
          `}
        >
          <h2
            className={`mt-6 text-base font-light opacity-100 xl:mt-20 xl:text-[20px]
          ${roobert.className}
           `}
          >
            {title}
          </h2>
          <motion.div
            id="description"
            transition={{ duration: 1.5, ease: celal2 }}
            className={`opacity-1 flex flex-col items-start justify-center gap-0  border-b-[1px] border-[rgb(255,255,255,0.2)] pb-[40px] md:border-b-0 md:pb-0  xl:gap-2 xl:opacity-0
            ${hovered ? "xl:opacity-100" : "xl:opacity-0"}
            ${preHovered ? "xl:opacity-100" : "xl:opacity-0"}
            `}
          >
            <p
              className={`
              min-h-44 w-full overflow-hidden text-left text-lg font-light leading-snug xl:text-[32px] xl:leading-normal
            ${tobias.className}`}
            >
              {description}
            </p>
            <button
              className={`
              w-full border-white py-2 text-left text-base underline
              transition-colors duration-500
              ${roobert.className}
              `}
            >
              Explore {title}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
