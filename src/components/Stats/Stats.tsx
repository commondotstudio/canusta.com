import { roobert } from "@/utils/fonts";
import React from "react";
import useStore from "@/utils/geo-3-store";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { tobias } from "@/utils/fonts";
import StatObject from "./StatObject";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function Stats(props: InterfaceUnknownObject) {
  const gridHeader = props.header;
  const colOneNum = props.stat_1;
  const colOneNumIcon = props.stat_1_icon;
  const colOneDesc = props.stat_1_description;
  const colTwoNum = props.stat_2;
  const colTwoNumIcon = props.stat_2_icon;
  const colTwoDesc = props.stat_2_description;
  const colThreeNum = props.stat_3;
  const colThreeNumIcon = props.stat_3_icon;
  const colThreeDesc = props.stat_3_description;
  const colFourNum = props.stat_4;
  const colFourNumIcon = props.stat_4_icon;
  const colFourDesc = props.stat_4_description;

  const { textColor } = useStore();
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0.6 }}
      id="stats"
      className={`
      w-full px-[30px]
      font-normal sm:px-[60px]
      ${roobert.className}     
      ${textColor === "light" ? "text-white" : "text-dark"}
      `}
    >
      <div
        id="stats-grid"
        className={`my-10 grid w-full grid-cols-2 items-center gap-2 font-thin sm:grid-cols-4  sm:gap-[60px]
      `}
      >
        {gridHeader && (
          <div
            className={`flex h-20 w-full flex-col justify-center gap-[30px] text-2xl font-thin sm:gap-[60px] md:text-4xl ${tobias.className} `}
          >
            Our track record
          </div>
        )}
        {colOneNum && (
          <StatObject num={colOneNum} icon={colOneNumIcon} desc={colOneDesc} />
        )}
        {colTwoNum && (
          <StatObject num={colTwoNum} icon={colTwoNumIcon} desc={colTwoDesc} />
        )}
        {colThreeNum && (
          <StatObject
            num={colThreeNum}
            icon={colThreeNumIcon}
            desc={colThreeDesc}
          />
        )}
        {colFourNum && (
          <StatObject
            num={colFourNum}
            icon={colFourNumIcon}
            desc={colFourDesc}
          />
        )}
      </div>
    </motion.div>
  );
}
