import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function CaseHero({
  source,
  refDetails,
}: {
  source: string;
  refDetails: any;
}) {
  return (
    <motion.div
      ref={refDetails}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="caption"
      key={2}
    >
      <div className="details flex w-full flex-col justify-center px-sm text-center sm:flex-row sm:px-md">
        <Image
          src={source}
          alt="Case Study Image"
          width={1920}
          height={1080}
          quality={100}
          className="w-full rounded-3xl"
        />
      </div>
    </motion.div>
  );
}
