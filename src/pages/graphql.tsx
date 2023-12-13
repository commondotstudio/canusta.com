import SiteLayout from "@/components/Layout/site-layout";
import useIsLoadingStore from "@/utils/is-loading-store";
import useIsLoading from "@/utils/useIsLoading";
import Head from "next/head";
import { useEffect, useRef } from "react";
import useStore from "@/utils/geo-3-store";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader/PageHeader";
import Footer from "@/components/Footer/Footer";
import { roobert, tobias } from "@/utils/fonts"
import { useInView } from "react-intersection-observer";
;

const geoTheme = "blackPage";

export default function Contact() {

  const { setGeoTheme } = useStore();

  useEffect(() => {
    if (!window) return;
    setGeoTheme(geoTheme);
  }, []);

  
  return (
    <>
      <Head>
        <title>GraphQL | Force Over Mass</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:description" content="" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="pointer-events-auto">

        <PageHeader headerAlign="left">GraphQL</PageHeader>
        <div className="px-md">
        Hello
        </div>
        <Footer />
      </main>
    </>
  );
}

Contact.getLayout = (page: React.ReactNode) => {
  return <SiteLayout>{page}</SiteLayout>;
};
