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
import { useEffect } from "react";
import MouseController from "./MouseController/MouseController"

export type BlockData =
  | InterfaceText1Column
  | InterfacePageHeader
  | InterfaceUnknownObject
  | InterfaceHome;

export default function DefaultTemplate({
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
        data: BlockData;
      };
    }[];
  };
}) {
  const blocks = page?.block_data;
  const pageTitle = page?.acf?.pageTitle;
  const geoTheme = page?.acf?.geo_theme;
  

  const { setGeoTheme } = useStore();

  useEffect(() => {
    if (!window) return;
    setGeoTheme(geoTheme);
  }, [geoTheme]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
        {blocks?.map((a, idx) => {
          return (
            <DynamicComponent
              key={idx}
              name={a.blockName}
              data={a.attrs.data}
            />
          );
        })}
        <Footer />
      </main>
    </>
  );
}

DefaultTemplate.getLayout = (page: React.ReactNode) => {
  return <SiteLayout>{page}</SiteLayout>;
};
