import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InterfaceUnknownObject } from "@/pages/[slug]";

function parseProps(inputObject: Record<string, any>) {
  const sourceUrl = inputObject?.image[0]?.source_url
  const width = inputObject?.image[0]?.media_details.width
  const height = inputObject?.image[0]?.media_details.height
  const hasMaxWidth = inputObject?.hasMaxWidth
  const result = {sourceUrl, width, height, hasMaxWidth}
  return result;
}

export default function Image1Column(props: InterfaceUnknownObject) {
  const data = parseProps(props);

  const [ref, inView] = useInView();

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div className="pointer-events-auto -mb-8 flex h-full w-screen items-center justify-center p-sm sm:mb-5 sm:p-md ">
        {data.sourceUrl && <Image
          src={data.sourceUrl}
          alt="image 1"
          width={data.width || 630}
          height={data.height || 360}
          quality={100}
          className={`
            px-40 sm:p-0
            ${data.hasMaxWidth == "1" ? "max-w-[720px]" : "w-full"}
          `}
        />}
      </div>
    </motion.div>
  );
}


