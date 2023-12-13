import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPageNavigation({selectedItem} : {selectedItem : number}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="grid w-screen grid-cols-1 justify-items-start gap-4 px-sm sm:grid-cols-2 sm:gap-md sm:px-md"
    >
      <div></div>
      <div className="flex w-full justify-between sm:justify-start sm:gap-[120px]">
        <Link
          href="./portfolio"
          className={`
            ${(selectedItem === 1) ? 
              'border-b-[1px] pointer-events-none' :
              'hover:text-fomPurple transition-colors duration-500'
            }`}>Featured
        </Link>
        <Link
          href="./portfolio-az"
          className={`
            ${(selectedItem === 2) ? 
              'border-b-[1px] pointer-events-none' :
              'hover:text-fomPurple transition-colors duration-500'
            }`}>All Companies A-Z
        </Link>
      </div>
    </motion.div>
  );
}
