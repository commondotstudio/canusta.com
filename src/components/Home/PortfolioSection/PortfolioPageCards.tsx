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
          <div className="relative h-full w-full" key={index}>
            <Card card={card} index={index} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
