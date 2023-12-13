import React, { ReactNode } from "react";
import { roobert, tobias } from "@/utils/fonts";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InterfaceUnknownObject } from "@/pages"

interface Text1ColumnProps {
  font?: "roobert" | "tobias";
  fontSize?: "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl";
  startingColumn?: string;
  endingColumn?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
  textWeight?: "font-light" | "font-normal" | "font-bold";
}

export default function Text1Column(props: InterfaceUnknownObject) {
  const [fontFamily, setFontFamily] = useState(roobert.className);
  const [ref, inView] = useInView();

  const text = props.text
  const font = props.font
  const fontSize = props.fontSize
  const startingColumn = props.startingColumn
  const endingColumn = props.endingColumn
  const textAlign = props.textAlign
  const textWeight = props.textWeight

  useEffect(() => {
    if (!window) return;
    switch (font) {
      case "roobert":
        setFontFamily(roobert.className);
        break;
      case "tobias":
        setFontFamily(tobias.className);
        break;
      default:
        break;
    }
  }, []);

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div
        className={`grid-col grid w-full grid-cols-1 px-sm pb-[30px] pt-[30px] sm:grid-cols-12 sm:px-md`}
      >
        <p
          className={` 
        font-light
        ${fontFamily} ${textWeight}
        ${startingColumn ? "col-start-" + startingColumn : null}
        ${endingColumn ? "col-end-" + endingColumn : null}
        ${textAlign}
        sm:${fontSize}
      `}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
