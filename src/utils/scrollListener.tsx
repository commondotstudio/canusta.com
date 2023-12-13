import React, { useEffect } from "react";

interface ScrollListenerProps {
  onScroll: (scrollY: number) => void;
}

export const ScrollListener = ({ onScroll }: ScrollListenerProps) => {
  const handleScroll = () => {
    onScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};
