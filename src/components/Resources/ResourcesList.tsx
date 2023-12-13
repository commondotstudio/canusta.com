import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import ResourcesListItem from "./ResourcesListItem";
import { InterfaceUnknownObject } from "@/pages/[slug]";

export default function ResourcesList(props: InterfaceUnknownObject) {
  const resourcesListLength = Object.keys(props).length / 2 - 1;
  const resourcesList = Array.from(
    { length: resourcesListLength },
    (_, index) => ({
      post: props[
        `resources_list_${index}_post`
      ] as unknown as InterfaceResourcesList,
    }),
  );

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="p-sm tablet:p-md">
      <div className="grid grid-cols-1 justify-items-start gap-sm overflow-hidden sm:gap-md">
        {resourcesList.map((resourcesItem, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
            key={index}
            className="w-full pb-[26px] tablet:border-b tablet:border-resourcesPurple tablet:pb-md"
          >
            <ResourcesListItem
              resourcesItem={resourcesItem}
              index={index}
              key={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export interface InterfaceResourcesList {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: string;
  acf: any[];
}
