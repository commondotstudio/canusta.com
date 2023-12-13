import SiteLayout from "@/components/Layout/site-layout";
import useIsLoadingStore from "@/utils/is-loading-store";
import useIsLoading from "@/utils/useIsLoading";
import Head from "next/head";
import { useEffect } from "react";
import useStore from "@/utils/geo-3-store";

const geoTheme = "whitePage";

export default function Custom404() {
  const { setGeoTheme } = useStore();

  useEffect(() => {
    if (!window) return;
    setGeoTheme(geoTheme);

  }, []);

  return (
    <>
      <Head>
        <title>404 | Force Over Mass</title>
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
      <main className="w-full">
        <div className="flex h-screen items-center justify-center w-full ">
          <p className="text-3xl text-[#4D11D5]">404</p>
        </div>
      </main>
    </>
  );
}

Custom404.getLayout = (page: React.ReactNode) => {
  return <SiteLayout>{page}</SiteLayout>;
};
