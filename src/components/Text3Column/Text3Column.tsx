import React, { ReactNode, useState, useEffect } from "react";
import useStore from "@/utils/geo-3-store";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function Text3Column(props: InterfaceUnknownObject) {
  const header1 = props.header1;
  const header2 = props.header2;
  const header3 = props.header3;
  const text1 = props.text1 as string;
  const text2 = props.text2 as string;
  const text3 = props.text3 as string;
  const type = props.type;
  const mobileLayout = props.mobileLayout;

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
        id="text3Column"
        className={`w-[100vw] snap-x overflow-x-scroll px-sm pb-[30px] pt-[30px] sm:w-[100vw] sm:overflow-x-hidden sm:px-md
        ${theme === "light" ? "text-black" : "text-white"}
      `}
      >
        <div
          id="text3ColumnInner"
          className={`
                grid-col grid w-[180vw] grid-cols-[1fr,1fr,1fr]
                gap-x-[60px] sm:w-full md:w-full
                ${mobileLayout === "side by side" ? "w-[200vw]" : "w-full"}`}
        >
          {/* 1 - IMAGE */}
          {type === "text and image" ? (
            <div className={`mb-[30px] snap-center text-9xl font-thin`}>
              <img
                src={"/statics/images/text-icon.png"}
                alt="icon"
                className=""
              />
            </div>
          ) : null}

          {/* 2 - IMAGE */}
          {type === "text and image" ? (
            <div className={`mb-[30px]  snap-center text-9xl font-thin`}>
              <img
                src={"/statics/images/text-icon.png"}
                alt="icon"
                className=""
              />
            </div>
          ) : null}

          {/* 3 - IMAGE */}
          {type === "text and image" ? (
            <div className={`mb-[30px]  snap-center text-9xl font-thin`}>
              <img
                src={"/statics/images/text-icon.png"}
                alt="icon"
                className=""
              />
            </div>
          ) : null}

          {/* 1 - NUMBER */}
          {type === "text and number" ? (
            <div
              className={`mb-[20px] snap-center  text-7xl font-thin sm:mb-[30px] sm:text-9xl`}
            >
              1
            </div>
          ) : null}

          {/* 2 - NUMBER */}
          {type === "text and number" ? (
            <div
              className={`mb-[20px] snap-center  text-7xl font-thin sm:mb-[30px] sm:text-9xl`}
            >
              2
            </div>
          ) : null}

          {/* 3 - NUMBER */}
          {type === "text and number" ? (
            <div
              className={`mb-[20px] snap-center  text-7xl font-thin sm:mb-[30px] sm:text-9xl`}
            >
              3
            </div>
          ) : null}

          {/* 1 - HEADER */}
          <div
            className={`mb-[30px] snap-center text-xl font-medium sm:text-2xl`}
          >
            {header1}
          </div>

          {/* 2 - HEADER */}
          <div
            className={`mb-[30px] snap-center text-xl font-medium sm:text-2xl`}
          >
            {header2}
          </div>

          {/* 3 - HEADER */}
          <div
            className={`mb-[30px] snap-center text-xl font-medium sm:text-2xl`}
          >
            {header3}
          </div>

          {/* 1 - TEXT */}
          <div
            className={`w-[65vw] snap-center space-y-3 text-sm font-light sm:space-y-5 sm:text-base md:w-auto`}
            dangerouslySetInnerHTML={{ __html: text1  }}
          />

          {/* 2 - TEXT */}
          <div
            className={`w-[65vw] snap-center space-y-3 text-sm font-light sm:space-y-5 sm:text-base md:w-auto`}
            dangerouslySetInnerHTML={{ __html: text2  }}
          />



          {/* 3 - TEXT */}
          <div
            className={`w-[65vw] snap-center space-y-3 text-sm font-light sm:space-y-5 sm:text-base md:w-auto`}
            dangerouslySetInnerHTML={{ __html: text3  }}
          />
        </div>
      </div>
    </motion.div>
  );
}
