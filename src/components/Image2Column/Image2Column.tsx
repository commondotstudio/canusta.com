import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { InterfaceUnknownObject } from "@/pages/[slug]";

type Image2ColumnProps = {
  visualType?: string;
  video1?: string;
  video2?: string;
  image1?: string;
  image2?: string;
  header1?: string;
  header2?: string;
  text1?: string;
  text2?: string;
};

function parseProps(data: Record<string, any>) {
  const visualType = data?.visualType
  return {
    visualType : data?.visualType || "image",
    image1 : data?.image1,
    image2 : data?.image2,
    video1 : data?.video1[0]?.source_url,
    video2 : data?.video2[0]?.source_url,
    header1 : data?.header1,
    header2 : data?.header2,
    text1 : data?.text1,
    text2 : data?.text2,
  };
}

export default function Image2Column(props: InterfaceUnknownObject) {
  const data = parseProps(props);
  const ref = useRef<HTMLDivElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const isInView = useInView(ref);
  const isMuted = useRef(true);

  useEffect(() => {
    if (isInView && data.visualType === "video" && !videoPlaying) {
      setVideoPlaying(true);
    }
  }, [isInView, data.visualType, videoPlaying]);

  const renderMedia = (source: string, header?: string, text?: string) => {
    if (data.visualType === "video") {
      return (
        <div>
          <video
            width={630}
            height={360}
            autoPlay={true} // Toggled by inView status
            loop={true}
            className="w-full rounded-lg"
            playsInline
            muted
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {header && (
            <div className="mt-3 text-2xl">
              <strong className="font-medium">{header}</strong>
            </div>
          )}
          {text && <div className="mt-3 font-light">{text}</div>}
        </div>
      );
    } else {
      return (
        <div>
          <Image
            src={source}
            alt={header || ""}
            width={630}
            height={360}
            quality={100}
            className="w-full rounded-lg"
          />
          {header && (
            <div className="mt-3 text-2xl">
              <strong className="font-medium">{header}</strong>
            </div>
          )}
          {text && <div className="mt-3 font-normal">{text}</div>}
        </div>
      );
    }
  };

  return (
    <motion.div
      key={1}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div
        ref={ref}
        className="grid-cols pointer-events-auto mb-5 grid w-full grid-cols-1 gap-8 p-4 px-sm sm:grid-cols-2 sm:p-6 sm:px-md"
      >
        {renderMedia(data.video1, data.header1, data.text1)}
        {renderMedia(data.video2, data.header2, data.text2)}
      </div>
    </motion.div>
  );
}
