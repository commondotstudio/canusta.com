import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { InterfacePortfolioFeatured } from "./PortfolioFeatured";

export default function PortfolioPageCards({ data }: { data: any }) {
  const ref = useRef(null);

  const [cards, setCards] = useState<InterfacePortfolioFeatured[]>([]);

  useEffect(() => {
    setCards(data as InterfacePortfolioFeatured[]);
  }, [data]);

  return (
    <div className="p-sm sm:p-md">
      <div className="grid grid-cols-1 justify-items-start gap-sm gap-y-sm overflow-hidden sm:grid-cols-2 sm:gap-md sm:gap-y-[92px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
            className="h-full w-full"
          >
            <Card card={card} index={index} key={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
