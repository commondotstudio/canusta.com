import React, { ReactNode } from "react";
import { tobias, roobert } from "@/utils/fonts";
import { motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function GiantText() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0}}
    >
    <div
      id="text2Column"
      className={`h-[240px] w-[100vw] overflow-x-hidden text-[160px] sm:h-[500px] sm:text-[320px]`}
    >
      <motion.div
        ref={ref}
        animate={{
          x: [1760, -1600],
        }}
        transition={{
          duration: 26,
          ease: "linear",
          repeatType: "reverse",
          repeat: Infinity,
        }}
      >
        <div
          id="text2ColumnInner"
          className="ml-[-2700px] mt-[80px] w-[20000px] sm:mt-[180px]"
        >
          <span className={`${tobias.className} font-thin`}>
            Transparency <i>Liquidity</i>
          </span>
          Control
          <span className={`${tobias.className} font-thin`}>
            Transparency <i>Liquidity</i>
          </span>
          Control
          <span className={`${tobias.className} font-thin`}>
            Transparency <i>Liquidity</i>
          </span>
          Control
          <span className={`${tobias.className} font-thin`}>
            Transparency <i>Liquidity</i>
          </span>
          Control
        </div>
      </motion.div>
    </div>
    </motion.div>
  );
}
