import React, { ReactNode, useState, useEffect } from "react";
import useStore from "@/utils/geo-3-store";
import { tobias } from "@/utils/fonts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface SectionHeader1Props {
  children: ReactNode;
}

export default function SectionHeader1({ children }: SectionHeader1Props) {
  const { websiteBackgroundState } = useStore();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (websiteBackgroundState === "white") {
      setTheme("light");
    } else if (websiteBackgroundState === "black") {
      setTheme("dark");
    }
  }, [websiteBackgroundState]);

  const [theme, setTheme] = useState("");

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div
        className={`${tobias.className} 
        my-4 w-full px-sm text-left text-4xl font-thin sm:px-md
        ${theme === "light" ? "text-black" : "text-white"}
        `}
      >
        {children}
      </div>
    </motion.div>
  );
}
