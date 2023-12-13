import React, { ReactNode, useEffect, useState, useRef } from "react";
import useStore from "@/utils/geo-3-store";
import useIsLoadingStore from "@/utils/is-loading-store";
import { useInView, motion } from "framer-motion";
import { tobias, roobert } from "@/utils/fonts";
import Button from "@/components/Elements/Button";
import { headerProcessor } from "@/utils/stringToHTML";

interface PageHeaderProps {
  children?: ReactNode;
  caption?: ReactNode;
  innerText?: ReactNode;
  hasButton?: boolean;
  buttonType?: string;
  buttonText?: string;
  headerAlign?: string;
}

export default function PageHeader({
  children,
  caption,
  headerAlign,
  innerText,
  hasButton,
  buttonType,
  buttonText,
}: PageHeaderProps) {
  const { textColor, setTextColor } = useStore();

  const [theme, setTheme] = useState("");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className={`mt-4 flex w-screen flex-col gap-4 px-sm pt-[120px] sm:mt-10 sm:px-md
    ${textColor === "light" ? "text-white" : "text-dark"}
    `}
    >
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        id="caption"
        key={1}
        className={`
         text-center
          text-xl
          font-medium
          ${roobert.className}
          ${caption === "" ? "hidden" : "block"}
          `}
      >
        {caption}
      </motion.h1>
      <motion.h2
        ref={ref2}
        key={2}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`-ml-1 mb-3 text-5xl font-thin leading-none sm:mb-10 sm:text-[96px]
        ${headerAlign === "left" ? "text-left" : "text-center"}  
        ${tobias.className}
        `}
      >
        <div>{children}</div>
      </motion.h2>
      <div
        id="headerInner"
        className={`grid grid-cols-1 py-sm text-sm font-light sm:grid-cols-3 sm:gap-x-[60px] sm:text-base md:w-full
        ${innerText === "" ? "hidden" : "grid"}
      `}
      >
        <motion.div
          ref={ref}
          key={3}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="col-start-2 col-end-4 sm:my-8"
        >
          <div className="space-y-5">{innerText}</div>
          <div className={`${hasButton ? "block" : "hidden"} my-4`}>
            <Button buttonType={buttonType}>{buttonText}</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
