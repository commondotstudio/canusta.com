import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useStore from "@/utils/geo-3-store";
import useIsLoadingStore from "@/utils/is-loading-store";

export default function ScrollBar() {
  //Theme
  const loadingStore = useIsLoadingStore();
  const { websiteBackgroundState } = useStore();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (websiteBackgroundState === "white") {
      setTheme("light");
    } else if (websiteBackgroundState === "black") {
      setTheme("dark");
    }
  }, [websiteBackgroundState]);

  //Scrollbar
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      if (!window) return;
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        scaleY: scale,
        transformOrigin: "top",
      }}
      className={` fixed right-0 top-0 z-[9999] h-screen w-1 
        ${theme === "light" ? "bg-[rgba(0,0,0,0.4)]" : "bg-white"}
      `}
    ></motion.div>
  );
}
