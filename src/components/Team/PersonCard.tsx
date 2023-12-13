import React from "react";
import { tobias, roobert } from "@/utils/fonts";
import PersonDetail from "./PersonDetail";
import { useState } from "react";
import useAppControllerStore from "@/utils/app-controller-store";
import { motion } from "framer-motion";

interface PersonCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  i: number;
  inView: boolean;
}

export default function PersonCard({
  name,
  title,
  bio,
  image,
  i,
  inView,
}: PersonCardProps) {
  useAppControllerStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="personCard group relative mr-[40px] shrink-0 grow-0 basis-auto snap-center"
      >
        <img
          src={image}
          alt={name}
          className="w-[70vw] transition-all duration-500 group-hover:opacity-75 sm:w-[400px]"
        />
        <div
          className="absolute left-0 top-0 flex h-full w-full cursor-pointer p-[20px] align-bottom transition-opacity duration-[400ms] group-hover:opacity-100 sm:p-[40px] sm:opacity-0 "
          onClick={openModal}
        >
          <div className="inner flex flex-col self-end">
            <div
              className={`text-xl font-thin sm:text-2xl ${tobias.className}`}
            >
              {name}
            </div>
            <div className="text-sm sm:text-base">{title}</div>
          </div>
        </div>
      </motion.div>
      <PersonDetail
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        name={name}
        title={title}
        bio={bio}
        image={image}
        clickAction={closeModal}
      />
    </>
  );
}
