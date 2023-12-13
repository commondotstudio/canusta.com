import React, { useState, useEffect, useRef } from "react";
import CoverColumn from "@/components/Home/Section2/CoverColumn";
import { motion } from "framer-motion";
import gsap from "gsap";
import useAppControllerStore from "@/utils/app-controller-store";
import { update } from "react-spring";

interface Section2Props {
  isSection2Active: boolean;
  column1Text: string;
  column2Text: string;
  column3Text: string;
}

export default function Section2({ isSection2Active = false, column1Text, column2Text, column3Text }: Section2Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const { windowSize } = useAppControllerStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowSize.width === 0) return; // means has not been set yet
    if (windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    updateOpacity();
  }, [windowSize]);

  useEffect(() => {
    if (!container.current) return;
    updateOpacity();
  }, [isSection2Active]);

  const updateOpacity = () => {
    if (isMobile) {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0,
      });
      return;
    }
    if (isSection2Active) {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0,
      });
    } else {
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
      });
    }
  };

  return (
    <div
      ref={container}
      className={`${
        isSection2Active ? "pointer-events-auto" : "pointer-events-none"
      } opacity-0`}
    >
      <motion.div
        id="section-two"
        className={`lg:h-[calc(100vh - 60px)] } relative z-50 flex w-screen flex-col pt-[50px] transition-all duration-[400ms] lg:fixed lg:left-0 lg:top-0 lg:h-screen xl:flex-row
      xl:pt-0`}
      >
        <CoverColumn
          title="Founders"
          description={column1Text}
          href="/founders"
          border={true}
          isSection2Active={isSection2Active}
        />
        <CoverColumn
          title="Investors"
          description={column2Text}
          href="/investors"
          preSetHovered={true}
          border={true}
          isSection2Active={isSection2Active}
        />
        <CoverColumn
          title="Pension Funds"
          description={column3Text}
          href="/pension-funds"
          isSection2Active={isSection2Active}
        />
      </motion.div>
    </div>
  );
}
