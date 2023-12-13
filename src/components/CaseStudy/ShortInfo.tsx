import { motion } from "framer-motion";
import React from "react";

export default function ShortInfo({
  pageData,
  refDetails,
}: {
  pageData: any;
  refDetails: any;
}) {
  return (
    <motion.div
      ref={refDetails}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="caption"
      key={1}
    >
      <div
        className={`details mb-[60px] flex w-full flex-col justify-center text-center 
      ${pageData.textColor === "dark" ? "text-dark" : "text-white"}
    sm:flex-row
    `}
      >
        <div className="mr-[60px]">
          <strong>Sector:</strong> {pageData.sector}
        </div>
        <div className="mr-[60px]">
          <strong>First Investment:</strong> {pageData.firstInvestment}
        </div>
        <div className="=">
          <strong>Current Stage:</strong> {pageData.currentStage}
        </div>
      </div>
    </motion.div>
  );
}
