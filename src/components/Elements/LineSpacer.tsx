import React, { useState, useEffect } from "react";
import useAppControllerStore from "@/utils/app-controller-store";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

interface LineSpacerProps {
  theme?: "light" | "dark";
}

export default function LineSpacer({ theme }: LineSpacerProps) {
  const { currentPageTheme } = useAppControllerStore();
  const [lineTheme, setLineTheme] = useState<"light" | "dark">();
    const [ref, inView] = useInView();

  useEffect(() => {
    if (theme) {
      setLineTheme(theme);
    } else {
      setLineTheme(currentPageTheme);
    }
  }, [currentPageTheme]);

  return (
     <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0.6 }}
      className={``}
    >
    <div className="w-screen p-sm sm:p-md">
      <div
        className={`h-2 border-b
      ${
        lineTheme === "light"
          ? "border-[rgba(0,0,0,0.2)]"
          : "border-[rgba(255,255,255,0.25)]"
      }`}
      ></div>
    </div>
    </motion.div>
  );
}
