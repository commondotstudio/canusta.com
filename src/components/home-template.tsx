import {
  Block,
  InterfacePageHeader,
  InterfaceText1Column,
  InterfaceUnknownObject,
  InterfaceHome,
} from "@/pages/[slug]";
import DynamicComponent from "@/utils/dynamic-components";
import ScrollController from "@/components/MouseController/ScrollController";
import Footer from "@/components/Footer/Footer";
import useStore from "@/utils/geo-3-store";

import SiteLayout from "@/components/Layout/site-layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import Section1 from "./Home/Section1/Section1"
import Section2 from "./Home/Section2/Section2"
import Section3 from "./Home/Section3/Section3"
import useAppControllerStore from "@/utils/app-controller-store"
import MouseController from "./MouseController/MouseController"

export type BlockData =
  | InterfaceText1Column
  | InterfacePageHeader
  | InterfaceUnknownObject
  | InterfaceHome;

export default function HomeTemplate({
  page,
}: {
  page: {
    acf: {
      geo_theme: "home" | "blackPage" | "whitePage" | "colorPage" | "customPage";
      pageTitle: string;
    };
    block_data: {
      blockName: Block["name"];
      attrs: {
        name: Block["name"];
        data: {
          section_1_opening_text: string;
          section_2_column_1_text: string;
          section_2_column_2_text: string;
          section_2_column_3_text: string;
        };
      };
    }[];
  };
}) {
  const blocks = page?.block_data;
  const pageTitle = page?.acf?.pageTitle;
  const geoTheme = page?.acf?.geo_theme;

  const { setGeoTheme } = useStore();

  const [isSection1Active, setIsSection1Active] = useState<boolean>(true);
  const [isSection2Active, setIsSection2Active] = useState<boolean>(false);
  const [isSection3Active, setIsSection3Active] = useState<boolean>(false);
  const { scrollY, windowSize } = useAppControllerStore();
  const [currentSection, setCurrentSection] = useState<number>(1);

  useEffect(() => {
    if (!window) return;
    setGeoTheme(geoTheme);
  }, [geoTheme]);

  useEffect(() => {
        if (scrollY < 10) {
        if (currentSection === 1) return;
        setCurrentSection(1);
        setIsSection1Active(true);
        setIsSection2Active(false);
        setIsSection3Active(false);
        } else if (scrollY < windowSize.height) {
        if (currentSection === 2) return;
        setCurrentSection(2);
        setIsSection1Active(false);
        setIsSection2Active(true);
        setIsSection3Active(false);
        } else {
        if (currentSection === 3) return;
        setCurrentSection(3);
        setIsSection1Active(false);
        setIsSection2Active(false);
        setIsSection3Active(true);
        }
    }, [scrollY]);

  return (
    <>
      <Head>
        <title>Force Over Mass | Re-Inventing Venture Capital</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta property="og:title" content="Re-Inventing Venture Capital" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fomcap.com/" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:description" content="" />
        <meta charSet="UTF-8" />
      </Head>

      <main className="relative z-20">
        <MouseController />
        <ScrollController />
        <Section1 isSection1Active={isSection1Active} openingText={blocks[0]?.attrs?.data.section_1_opening_text} />
        <Section2 isSection2Active={isSection2Active} 
        column1Text={blocks[0]?.attrs?.data.section_2_column_1_text}
        column2Text={blocks[0]?.attrs?.data.section_2_column_2_text}
        column3Text={blocks[0]?.attrs?.data.section_2_column_3_text}
         />
        <Section3 isSection3Active={isSection3Active} blocks={blocks} />
        <Footer />
      </main>
    </>
  );
}

HomeTemplate.getLayout = (page: React.ReactNode) => {
  return <SiteLayout>{page}</SiteLayout>;
};
