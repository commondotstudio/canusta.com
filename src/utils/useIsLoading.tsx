import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { every, isBoolean } from "underscore";
import useIsLoadingStore from "./is-loading-store";

export default function useIsLoading(status?: boolean) {
  const loadingStore = useIsLoadingStore();
  const [isLoading, setIsLoading] = useState<boolean>(status || true);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && loadingStore.setPageLoading(true);
    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        return loadingStore.setPageLoading(true);
      } else {
        return loadingStore.setPageLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    window.addEventListener("load", () => loadingStore.setPageLoading(false));
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      window.addEventListener("load", () => loadingStore.setPageLoading(true));
    };
  }, [loadingStore]);

  useEffect(() => {
    if (!loadingStore) return;

    const states = Object.values(loadingStore).filter((a) => isBoolean(a));
    setIsLoading(!every(states, (a) => a === false));
  }, [loadingStore]);

  return { isLoading, setIsLoading };
}
