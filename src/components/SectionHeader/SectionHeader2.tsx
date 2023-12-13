import React, { ReactNode, useState, useEffect } from "react";
import useStore from "@/utils/geo-3-store";
import { roobert, tobias } from "@/utils/fonts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function SectionHeader2(props: InterfaceUnknownObject) {
  const line1 = props.line_1;
  const line2 = props.line_2;
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
        className={`my-4 w-screen px-sm text-left sm:px-md
      ${theme === "light" ? "text-black" : "text-white"}
      `}
      >
        <div className="mb-[30px] text-sm">{line1}</div>
        <div className={`${tobias.className} text-3xl font-thin`}>{line2}</div>
      </div>
    </motion.div>
  );
}
