import React from "react";
import { motion } from "framer-motion";
import { celal1 } from "@/utils/transitions";
import useStore from "@/utils/geo-3-store";
import { useState, useEffect } from "react";

function Logo({ menuActive, colWidth }) {
  const { textColor } = useStore();
  const [logoColor, setLogoColor] = useState("light");
  const [logoBorderColor, setLogoBorderColor] = useState("border-light");
  useEffect(() => {
    switch (textColor) {
      case "light":
        setLogoColor("#fff");
        setLogoBorderColor("border-light");
        break;
      case "dark":
        setLogoColor("#000");
        setLogoBorderColor("border-dark");
        break;
      case "color":
        setLogoColor("#612FCB");
        setLogoBorderColor("border-fomPurple");
        break;
      default:
        break;
    }
  }, [textColor]);

  const variants = {
    menuActive: {
      width: colWidth - 90,
      transition: {
        duration: 1,
        ease: celal1,
      },
    },
    menuInactive: {
      width: 54,
      transition: {
        duration: 1,
        ease: celal1,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="pointer-events-auto flex cursor-pointer items-center justify-center">
      <svg
        width="30"
        height="18"
        viewBox="0 0 30 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-ml-2"
      >
        <path
          d="M0.425781 48.5H7.09082V27.2061H27.9404V21.2588H7.09082V6.83496H29.6152V0.887695H0.425781V48.5Z"
          fill={logoColor}
          className="transition-all duration-500"
        />
      </svg>
      <motion.div
        variants={variants}
        animate={menuActive ? "menuActive" : "menuInactive"}
        initial="menuInactive"
        className={`relative mx-[-7px] h-[17.4px] rounded-[3.8px] border-[2px] transition-colors duration-500 md:border-[2.4px] xl:border-[2.5px] xxl:border-[2.6px] bs:border-[2.7px] tv:h-[18px] tv:border-[3px]
        ${logoBorderColor}
        `}
      ></motion.div>
      <svg
        width="30"
        height="18"
        viewBox="0 0 30 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.677734 48.5H6.93262V7.96289H7.20605L20.7754 48.5H26.1074L39.6084 7.96289H39.8818V48.5H46.1367V0.887695H35.7461L23.6465 37.665H23.373L11.2051 0.887695H0.677734V48.5Z"
          fill={logoColor}
          className="transition-all duration-500"
        />
      </svg>
    </div>
  );
}

export default Logo;
