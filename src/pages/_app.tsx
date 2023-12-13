import "@/statics/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Geo from "@/components/Geo/3/Geo";
import { AppLayoutProps } from "next/app";
import { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import AppController from "@/components/AppController/AppController";
import { roobert } from "@/utils/fonts";
import TeamBackground from "@/components/Team/TeamBackground";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppLayoutProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${roobert.className}`}>
        <SiteHeader />
        <div id="geoContainer" className="fixed z-0 top-0 h-full w-full">
          <Geo />
        </div>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </QueryClientProvider>
  );
}
