import { roobert, tobias } from "@/utils/fonts";
import React, { ReactNode, useState, useEffect } from "react";
import useStore from "@/utils/geo-3-store";
import { stringToHTML } from "@/utils/stringToHTML";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function Text2Column(props: InterfaceUnknownObject) {
  const header1 = props.header_1;
  const header2 = props.header_2;
  const text1 = props.text_1;
  const text2 = props.text_2;

  const textColor = useStore((state) => state.textColor);
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
        id="text2Column"
        className={`mt-[30px] w-[100vw] px-sm pb-[30px] pt-[30px]  sm:px-md
        ${textColor === "dark" ? "text-black" : "text-white"}
      `}
      >
        <div
          id="text2ColumnInner"
          className={`
                grid-col
                grid  w-full gap-x-[60px] sm:grid-cols-[1fr,1fr]
                md:w-full  
            `}
        >
          <div className="mb-4 sm:mb-0">
            <div className={`mb-0 text-2xl sm:mb-[30px]`}>
              <span
                className={`text-[40px] font-thin ${tobias.className}`}
              ></span>
              <strong className="font-medium">{header1}</strong>
            </div>
            <div className={`space-y-5 text-base`}>{stringToHTML(text1)}</div>
          </div>

          <div>
            {header2 && (
              <div className={`mb-[30px] text-2xl`}>
                <strong className="font-medium">{header2}</strong>
              </div>
            )}
            <div className={`space-y-5 text-base`}>{stringToHTML(text2)}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
