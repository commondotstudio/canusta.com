import { roobert } from "@/utils/fonts";
import React from "react";

export const headerProcessor = (children: string) => {
  const className = roobert.className;
  return children.replace(/<strong>(.*?)<\/strong>/g, `<span class="${className} font-medium">$1</span>`);
};

export const stringToHTML = (content: React.ReactNode) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content ? content.toString() : "" }}
    />
  );
};
