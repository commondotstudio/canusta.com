import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioItemContent({
  name,
  cat,
  image,
  hasCaseStudy,
  firstInvestment,
  currentStage,
  description,
  website,
}: {
  name: string;
  cat: string;
  image: string;
  hasCaseStudy?: string;
  firstInvestment?: string;
  currentStage?: string;
  description?: string;
  website?: string;
}) {
  const [ref, inView] = useInView();
  const [isHovered, setIsHovered] = useState(false);
  const [lineHovered, setLineHovered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (hasCaseStudy === "0" && description) {
      openModal();
    } else {
      return;
    }
  };

  const handleMouseEnter = () => {
    if (hasCaseStudy === "1" || description) {
      setLineHovered(true);
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay: 0 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setLineHovered(false)}
        className={`item pointer-events-auto relative flex w-full border-b border-[rgba(255,255,255,0.3)] py-[14px] transition-all
      duration-500
      ${
        lineHovered
          ? "cursor-pointer border-b-[1px] border-fomPurple"
          : "border-b-[1px]"
      }
      `}
      >
        <div
          className={`name relative z-20 mr-[40px] ${
            !description && hasCaseStudy === "0" ? "opacity-50" : "opacity-100"
          } `}
        >
          {name}
        </div>
        <div className="cat relative z-20 mr-[40px] opacity-50">{cat}</div>
        <div
          className={`flex items-center justify-center transition-all duration-300
        ${isHovered ? "translate-x-1 opacity-100" : "opacity-50"}
        ${hasCaseStudy === "0" ? "hidden" : "block"}
      
      `}
        >
          <svg
            width="22"
            height="15"
            viewBox="0 0 31 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="11.0332"
              x2="28.3696"
              y2="11.0332"
              stroke="rgba(255,255,255,1)"
              strokeWidth="2"
            />
            <path
              d="M19.228 1L28.9998 10.7717L19.228 20.5435"
              stroke="rgba(255,255,255,1)"
              strokeWidth="2"
            />
          </svg>
        </div>
        <PortfolioModal
          name={name}
          cat={cat}
          firstInvestment={firstInvestment}
          currentStage={currentStage}
          description={description}
          website={website}
          image={image}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          clickAction={closeModal}
        />
      </div>
    </motion.div>
  );
}
