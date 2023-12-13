import React from "react";
import Image from "next/image";
import Link from "@/components/Elements/Link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { dateCleaner, readintTimeCalculator } from "@/utils/utils-tsx";
export default function ResourcesListItem({
  resourcesItem,
  index,
}: {
  resourcesItem: any;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease",
      }}
      className="flex flex-col sm:flex-row"
    >
      <Link
        href={`/resources/${resourcesItem.post[0].slug}`}
        key={index}
        className="pointer-events-auto flex w-full cursor-pointer flex-col gap-sm tablet:flex-row tablet:gap-md"
      >
        <Image
          src={resourcesItem.post[0].acf.hero_image.url}
          alt={resourcesItem.post[0].slug}
          width={400}
          height={180}
          quality={100}
          className="w-full rounded-lg tablet:max-w-[400px]"
        />
        <div className="flex flex-col gap-2 text-resourcesPurple tablet:gap-5">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-light sm:text-[26px]">
              {resourcesItem.post[0].title.rendered}
            </h2>
            <p className="text-sm font-light">
              {readintTimeCalculator(resourcesItem.post[0].acf.content)} mins
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <p className="font-bold">{resourcesItem.post[0].acf.category}</p>
            <p>{dateCleaner(resourcesItem.post[0].date)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
