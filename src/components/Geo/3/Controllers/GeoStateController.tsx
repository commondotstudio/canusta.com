import useStore from "@/utils/geo-3-store";
import useAppControllerStore from "@/utils/app-controller-store";
import { useEffect } from "react";

export const GeoStateController = () => {
  const { setWebsiteBackgroundState, websiteBackgroundState } = useStore();
  const { setObjectScrollInteraction, objectScrollInteraction } = useStore();
  const { setObjectMouseInteraction, objectMouseInteraction } = useStore();
  const { setCameraPosition, cameraPosition } = useStore();
  const { setGeoStateUpdateTimestamp, geoStateUpdateTimestamp } = useStore();
  const { setGeoTheme, geoTheme } = useStore();
  const { currentPageTheme, setCurrentPageTheme } = useAppControllerStore();
  const { geoBackground, setGeoBackground } = useStore();
  const { textColor, setTextColor } = useStore();

  useEffect(() => {
    if (!window) return;
    if (geoTheme === "home") {
      setWebsiteBackgroundState("black");
      setObjectScrollInteraction("spin");
      setObjectMouseInteraction("full");
      setCameraPosition("farToClose");
      setCurrentPageTheme("dark");
      setTextColor("light");
    } else if (geoTheme === "blackPage") {
      setWebsiteBackgroundState("black");
      setObjectScrollInteraction("none");
      setObjectMouseInteraction("half");
      setCameraPosition("close");
      setCurrentPageTheme("dark");
      setTextColor("light");
    } else if (geoTheme === "whitePage") {
      setWebsiteBackgroundState("white");
      setObjectScrollInteraction("none");
      setObjectMouseInteraction("half");
      setCameraPosition("close");
      setCurrentPageTheme("light");
      setTextColor("dark");
    } else if (geoTheme === "colorPage") {
      setWebsiteBackgroundState("color");
      setObjectScrollInteraction("none");
      setObjectMouseInteraction("half");
      setCameraPosition("close");
      setCurrentPageTheme("light");
      setTextColor("color");
    } else if (geoTheme === "customPage") {
      setWebsiteBackgroundState("custom");
      setObjectScrollInteraction("none");
      setObjectMouseInteraction("none");
      setCameraPosition("hide");
      setCurrentPageTheme("light");
      setTextColor(textColor);
    }
    setGeoStateUpdateTimestamp(Date.now());
  }, [geoTheme]);
  return <></>;
};
