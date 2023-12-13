import Button from "@/components/Elements/Button";
import { roobert, tobias } from "@/utils/fonts";
import useStore from "@/utils/geo-3-store";
import { headerProcessor } from "@/utils/stringToHTML";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

export interface PageHeaderProps {
  children?: ReactNode;
  caption?: ReactNode;
  innerText?: string;
  hasButton?: boolean;
  buttonType?: string;
  buttonText?: string;
  headerAlign?: string;
  bigText?: string;
}

export default function PageHeader({
  caption,
  headerAlign,
  innerText = "",
  hasButton = false,
  buttonType,
  buttonText,
  bigText = ""
}: PageHeaderProps) {
  const { textColor, setTextColor } = useStore();
  const [theme, setTheme] = useState("");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);


  return (
    <div
      className={`mt-4 flex w-screen flex-col gap-4 px-sm pt-[120px] sm:mt-10 sm:px-md
      ${textColor === "light" ? "text-white" : null}
      ${textColor === "dark" ? "text-black" : null}
      ${textColor === "color" ? "text-fomPurple" : null}
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
      {bigText &&
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
          <div dangerouslySetInnerHTML={{ __html: headerProcessor(bigText) }} />
        </motion.h2>
      }
      <div
        id="headerInner"
        className={`grid grid-cols-1 py-sm indent font-light sm:grid-cols-3 sm:gap-x-[60px] sm:text-base md:w-full
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
          <div className="space-y-10 sm:text-2xl indent-20 [&>*>i]:text-3xl" dangerouslySetInnerHTML={{ __html: innerText  }} />
          <div className={`${hasButton == true ? "block" : "hidden"} my-4`}>
            <Button buttonType={buttonType}>{buttonText}</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
//
