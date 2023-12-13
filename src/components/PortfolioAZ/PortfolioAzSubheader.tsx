import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import { tobias, roobert } from "@/utils/fonts";

export default function PortfolioAzSubheader({ letter }: { letter: string }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
      className="w-full"
    >
      <div
        className={`subheader ${tobias.className} item mt-[12px] flex w-full py-[14px] text-3xl`}
      >
        <i>{letter}</i>
      </div>
    </motion.div>
  );
}
