import React from "react";
import { roobert, tobias } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InterfaceUnknownObject } from "@/pages/[slug]";
import { stringToHTML } from "@/utils/stringToHTML";
export default function ContactComponent(props: InterfaceUnknownObject) {
  const header1 = props.header_1;
  const text1 = props.text_1;
  const header2 = props.header_2;
  const text2 = props.text_2;
  const header3 = props.header_3;
  const text3 = props.text_3;
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <motion.div className="contact my-36 mb-10 grid grid-cols-1 gap-[60px] px-sm sm:mb-20 sm:grid-cols-4 sm:gap-[60px] sm:px-md">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 40 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-52"
      >
        <h2
          className={`mb-2 text-lg font-thin sm:text-base sm:font-medium ${tobias.className} sm:${roobert.className}`}
        >
          {header1}
        </h2>
        <div className="text-sm font-light leading-5 [&>*>a]:underline [&>*>a]:underline-offset-8 [&>*>a]:hover:text-fomPurple [&>*>a]:transition-colors">
          {stringToHTML(text1)}
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 40 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-52"
      >
        <h2
          className={`mb-2 text-lg font-thin sm:text-base sm:font-medium ${tobias.className} sm:${roobert.className}`}
        >
          {header2}
        </h2>
        <div className="text-sm font-light leading-5 [&>*>a]:underline [&>*>a]:underline-offset-8 [&>*>a]:hover:text-fomPurple [&>*>a]:transition-colors">
          {stringToHTML(text2)}
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 40 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-52"
      >
        <h2
          className={`mb-2 text-lg font-thin sm:text-base sm:font-medium ${tobias.className} sm:${roobert.className}`}
        >
          {header3}
        </h2>
        <div className="text-sm font-light leading-5 [&>*>a]:underline [&>*>a]:underline-offset-8 [&>*>a]:hover:text-fomPurple [&>*>a]:transition-colors">
          {stringToHTML(text3)}
        </div>
      </motion.div>
    </motion.div>
  );
}
