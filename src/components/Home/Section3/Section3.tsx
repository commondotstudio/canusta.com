import React from "react";
import { motion } from "framer-motion";
import Text1Column from "@/components/Text1Column/Text1Column";
import Stats from "@/components/Stats/Stats";
import LineSpacer from "@/components/Elements/LineSpacer";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SectionHeader2 from "@/components/SectionHeader/SectionHeader2";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import Quote from "@/components/Text1Column/Quote";
import Footer from "@/components/Footer/Footer";
import useAppControllerStore from "@/utils/app-controller-store";
import { useState } from "react";
import {
  Block,
  InterfacePageHeader,
  InterfaceText1Column,
  InterfaceUnknownObject,
  InterfaceHome,
} from "@/pages/[slug]";
import DynamicComponent from "@/utils/dynamic-components";

export type BlockData =
  | InterfaceText1Column
  | InterfacePageHeader
  | InterfaceUnknownObject
  | InterfaceHome;

interface Section3Props {
  isSection3Active: boolean;
  blocks: {
      blockName: Block["name"];
      attrs: {
        name: Block["name"];
        data: BlockData;
      };
    }[];
}

export default function Section3({ isSection3Active, blocks }: Section3Props) {
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
    if (!container.current) return;
    updateOpacity();
  }, [isSection3Active]);

  const updateOpacity = () => {
    if (isMobile) {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0,
      });
      return;
    }
    if (isSection3Active) {
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
        isSection3Active ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        id="section-three"
        className={`duration-[400ms]} flex w-screen flex-col items-center justify-center pt-[60px] transition-all lg:pt-[100svh]
  `}
      >
       {blocks?.map((a, idx) => {
          return (
            <DynamicComponent
              key={idx}
              name={a.blockName}
              data={a.attrs.data}
            />
          );
        })}
      </div>
    </div>
  );
}
