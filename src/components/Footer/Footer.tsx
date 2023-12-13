import { useEffect, useState, useRef } from "react";
import useIsLoadingStore from "@/utils/is-loading-store";
import { useInView, motion } from "framer-motion";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export const footerContent = [
  {
    title: "Force Over Mass Capital LLP ",
    text: "is authorised and regulated by the Financial Conduct Authority (FRN 613706).",
  },
  {
    title: "Risk Warning: ",
    text: "Your capital is at risk. Investing in early stage companies involves risks including loss of capital.",
  },
];

export default function Footer() {
  const loadingStore = useIsLoadingStore();

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      ref={ref}
      className={`tablet:pb-[66px]} mt-[60px] flex w-screen flex-col px-sm pb-[33px] tablet:mt-[100px] tablet:px-md
    `}
    >
      <FooterTop />
      <FooterBottom />
    </motion.footer>
  );
}
