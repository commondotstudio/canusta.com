import React, { ReactNode } from "react";
import { roobert, tobias } from "@/utils/fonts";
import useStore from "@/utils/geo-3-store";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function Quote(props: InterfaceUnknownObject) {
  const quote = props.quote;
  const author = props.author;

  const { textColor } = useStore();
  const [ref, inView] = useInView();

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div
        id="quoteComponent"
        className={`grid-col grid w-full grid-cols-12 px-sm pb-[30px] pt-[30px] sm:px-md 
      ${textColor === "light" ? "text-white" : "text-dark"}
      `}
      >
        <div
          id="quoteMainText"
          className={`col-span-12 mb-10 text-center text-2xl font-thin sm:col-span-8 sm:col-start-3 sm:text-4xl ${tobias.className}`}
        >
          “{quote}”
        </div>
        <div id="quoteMainText" className={`col-span-12 text-center `}>
          <span
            className={`mr-[15px] inline-block h-[12px] w-[12px] rounded-sm  ${
              textColor === "light" ? "bg-white" : "bg-dark"
            }`}
          ></span>
          {author}
        </div>
      </div>
    </motion.div>
  );
}
