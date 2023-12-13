import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { tobias, roobert } from "@/utils/fonts";
import gsap from "gsap";
import useAppControllerStore from "@/utils/app-controller-store";

interface Section1Props {
  isSection1Active: boolean;
  openingText: string;
}

export default function Section1({ isSection1Active, openingText }: Section1Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const { windowSize } = useAppControllerStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    updateOpacity();
  }, [windowSize]);

  useEffect(() => {
    if (!ref.current) return;
    updateOpacity();
  }, [isSection1Active]);

  const updateOpacity = () => {
    if (isMobile) {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0,
      });
      return;
    }
    if (isSection1Active) {
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

  // animation - 2
  // split the letters and create animation from left to right
  const letters = "Re-inventured".split("");

  const animatedLetters = letters.map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
    >
      {letter}
    </motion.span>
  ));

  return (
    <div
      ref={container}
      className={`${
        isSection1Active ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <motion.div
        ref={ref}
        id="section-one"
        className={`relative left-0 top-0 flex h-screen w-screen items-center justify-center transition-all duration-[400ms] lg:fixed`}
      >
        <h3
          className={`text-[46px] font-thin italic sm:text-[96px] md:text-[120px] lg:text-[140px] xl:text-[160px]
        ${tobias.className} `}
        >
          {/* first three of animated letters */}
          {animatedLetters.slice(0, 3)}
          <span
            className={`not-italic
        ${roobert.className}`}
          >
            {/* rest of animated letters */}
            {animatedLetters.slice(3)}
          </span>
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute w-full xl:w-[60%] left-0 text-lg font-light bottom-0 p-sm md:p-md sm:text-2xl "
          dangerouslySetInnerHTML={{ __html: openingText }}
        />
      </motion.div>
    </div>
  );
}
