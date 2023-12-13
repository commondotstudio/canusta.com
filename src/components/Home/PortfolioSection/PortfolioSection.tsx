import Card from "@/components/Portfolio/Card";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useStore from "@/utils/geo-3-store";
import Link from "@/components/Elements/Link";
import PortfolioPageCards from "./PortfolioPageCards";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function PortfolioSection(props: InterfaceUnknownObject) {
  const pageCardsLength = Object.keys(props).length / 2 - 1;
  const pageCards = Array.from({ length: pageCardsLength }, (_, index) => ({
    portfolio: props[
      `portfolio_section_${index}_portfolio`
    ] as unknown as InterfacePortfolioFeatured,
  }));

  const { websiteBackgroundState } = useStore();
  useEffect(() => {
    if (websiteBackgroundState === "white") {
      setTheme("light");
    } else if (websiteBackgroundState === "black") {
      setTheme("dark");
    }
  }, [websiteBackgroundState]);
  const [theme, setTheme] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <PortfolioPageCards data={pageCards} />

      <div
        id="section-bottom"
        className="my-16 grid grid-cols-2 justify-items-start gap-sm sm:gap-md "
      >
        <div></div>
        <Link
          href="/portfolio"
          className={`
          border-b px-1
       font-light ${
         theme === "light"
           ? "border-black text-black"
           : "border-white text-white"
       }
     `}
        >
          All Case Studies
        </Link>
      </div>
    </>
  );
}
export interface InterfacePortfolioFeatured {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: string;
  acf: any[];
}
