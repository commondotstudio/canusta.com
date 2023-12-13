import React from "react";
import useStore from "@/utils/geo-3-store";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Number from "./Number";

export default function StatObject({
  num,
  icon,
  desc,
}: {
  num: any;
  icon: any;
  desc: any;
}) {
  const { textColor } = useStore();
  const [ref, inView] = useInView();
  const n = parseInt(num);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className="flex h-40 w-full flex-col justify-center">
        <h4 className="flex text-[40px] leading-[40px] sm:text-[40px] sm:leading-[40px] md:text-[70px] md:leading-[70px] lg:text-[100px] lg:leading-[100px] ">
          <Number isInView={inView} n={n} />
          <span>{icon}</span>
        </h4>
        <p
          className={`h-20 overflow-hidden text-ellipsis text-sm font-light
          ${textColor === "light" ? "text-white" : "text-dark"}
        `}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
