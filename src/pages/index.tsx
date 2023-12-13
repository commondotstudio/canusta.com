import SiteLayout from "@/components/Layout/site-layout";
import useStore from "@/utils/geo-3-store";
import { Children, useEffect } from "react";

export default function Index() {

  return (
    <>
      Hello!
    </>
  );
}

Index.getLayout = (page: React.ReactNode) => {
  return <SiteLayout>{page}</SiteLayout>;
};
