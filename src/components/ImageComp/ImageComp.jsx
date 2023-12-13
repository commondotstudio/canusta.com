import React from "react";
import Image from "next/image";
export default function ImageComp({ src, alt, width, height }) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
