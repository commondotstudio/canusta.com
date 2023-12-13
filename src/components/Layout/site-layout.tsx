import { cn } from "@/utils/cn";
import useIsLoading from "@/utils/useIsLoading";
import axios from "axios";
import { useEffect } from "react";
import { isEmpty } from "underscore";
import { WORDPRESS_REST_v3_URL } from "../../../utils/fe-env";
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, setIsLoading } = useIsLoading();

  useEffect(() => {
    if (!localStorage) return;
    if (!isEmpty(localStorage.getItem("menu"))) return;
    axios.get(WORDPRESS_REST_v3_URL + "/options/options").then((res) => {
      const data = res.data?.acf?.menu_items;
      localStorage.setItem("menu", JSON.stringify(data));
    });
  }, []);

  return (
    <div
      id="contentContainer"
      className={cn(
        "pointer-events-auto relative z-10 flex w-full justify-items-start align-top",
      )}
    >
      {/* <ScrollBar /> */}
      {children}
    </div>
  );
}
