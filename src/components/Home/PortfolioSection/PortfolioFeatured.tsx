import React from "react";
import { InterfaceUnknownObject } from "@/pages/[slug]";
import PortfolioPageCards from "./PortfolioPageCards";
export default function PortfolioFeatured(props: InterfaceUnknownObject) {
  const pageCardsLength = Object.keys(props).length / 2 - 1;
  const pageCards = Array.from({ length: pageCardsLength }, (_, index) => ({
    post: props[
      `featured_list_${index}_post`
    ] as unknown as InterfacePortfolioFeatured,
  }));

  return (
    <>
      <PortfolioPageCards data={pageCards} />
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
