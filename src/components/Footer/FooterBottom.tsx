import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { footerContent } from "./Footer";
import useStore from "@/utils/geo-3-store";

export default function FooterBottom() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { textColor } = useStore();

  return (
    <div
      ref={ref}
      id="footer-content"
      className={`border-t
        ${textColor === "light" ? "text-white/40" : null}
      ${textColor === "dark" ? "text-black/40" : null}
      ${textColor === "color" ? "text-fomPurple/40" : null}
        text-xs font-light sm:text-sm`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="content-top"
        className="my-6 flex flex-col justify-end gap-6 sm:my-8 sm:flex-row sm:gap-0"
      >
        {/* <div
            id="content-top-left"
            className={`flex gap-[22px]  font-medium sm:gap-10
            ${roobert.className}
          `}
          >
            <Link
              href="/privacy"
              className={`border-b transition-all duration-300
              ${
                textColor === "light"
                  ? "border-white/0 text-white hover:border-white/70"
                  : "border-black/0 text-black hover:border-black/70"
              }
              `}
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className={`border-b  transition-all 
              duration-300
              ${
                textColor === "light"
                  ? "border-white/0 text-white hover:border-white/70"
                  : "border-black/0 text-black hover:border-black/70"
              }
              `}
            >
              Terms <span className="font-thin">&</span> Conditions
            </Link>
            <Link
              href="/contact"
              className={`border-b transition-all duration-300
              ${
                textColor === "light"
                  ? "border-white/0 text-white hover:border-white/70"
                  : "border-black/0 text-black hover:border-black/70"
              }
              `}
            >
              Contact
            </Link>
          </div> */}
        <div
          id="content-top-right"
          className={`
          ${textColor === "light" ? "text-white" : null}
          ${textColor === "dark" ? "text-black" : null}
          ${textColor === "color" ? "text-fomPurple" : null}
          `}
        >
          © 2023 Force Over Mass
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        id="content-bottom"
        className="grid-cols-auto grid text-white sm:-mt-10 sm:grid-cols-2 sm:grid-rows-1 sm:text-white"
      >
        <div
          className={`space-y-0 text-xs
            ${textColor === "light" ? "text-white" : null}
            ${textColor === "dark" ? "text-black" : null}
            ${textColor === "color" ? "text-fomPurple" : null}
          `}
        >
          <p className="leading-xs">
            {footerContent[0].title}
            {footerContent[0].text}
          </p>
          <p className="leading-xs">
            {footerContent[1].title}
            {footerContent[1].text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
