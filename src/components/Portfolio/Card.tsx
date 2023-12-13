import Link from "@/components/Elements/Link";
import useStore from "@/utils/geo-3-store";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Card({ card, index }: { card: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { websiteBackgroundState } = useStore();

  useEffect(() => {
    if (websiteBackgroundState === "white") {
      setTheme("light");
    } else if (websiteBackgroundState === "black") {
      setTheme("dark");
    }
  }, [websiteBackgroundState]);

  const [theme, setTheme] = useState("");

  return (
    card && (
      <div
        ref={ref}
        style={{
          transform: isInView ? "translateY(0)" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease",
        }}
        className={`
      ${theme === "light" ? "text-black" : "text-white"}`}
      >
        <Link
          href={`/portfolio/${card.post[0].slug}`}
          key={index}
          className="pointer-events-auto mb-5  w-full cursor-pointer"
        >
          {card.post[0].acf.hero_image.url && (
            <Image
              src={card.post[0].acf.hero_image.url}
              alt="Case Study Image"
              width={630}
              height={360}
              quality={100}
              className="w-full rounded-lg"
            />
          )}

          <div className="mt-2 flex items-center gap-2 sm:mt-sm sm:gap-4">
            {card.post[0].acf.avatar.url && (
              <Image
                src={card.post[0].acf.avatar.url}
                alt="Company Logo"
                width={60}
                height={60}
                quality={100}
                className="w-10 rounded-xl sm:w-auto"
              />
            )}

            <div>
              <h2 className="mb-[3px] text-lg font-light sm:text-[26px]">
                {card.post[0].title.rendered}
              </h2>
              <p className="text-xs font-light opacity-80 sm:text-sm">
                {card.post[0].acf.sector}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}
