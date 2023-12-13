import { roobert, tobias } from "@/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

interface PortfolioModalProps {
  onRequestClose: any;
  isOpen: boolean;
  name: string;
  image: string;
  cat: string;
  firstInvestment?: string;
  currentStage?: string;
  description?: string;
  website?: string;
  clickAction: any;
}

function PortfolioModal({
  onRequestClose,
  isOpen,
  image,
  name,
  cat,
  firstInvestment,
  currentStage,
  description,
  website,
  clickAction,
}: PortfolioModalProps) {
  Modal.setAppElement("#__next");

  const [isClosing, setIsClosing] = useState(false);
  const handleCloseModal = () => {
    setIsClosing(true);
    // Add a delay before actually closing the modal to allow the exit animation
    setTimeout(() => {
      clickAction(false);
      setIsClosing(false);
    }, 300); // Adjust the delay time to match your exit animation time
  };

  const stringDescription = description
    ? description.replace(/(<([^>]+)>)/gi, "")
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="closeButton fixed right-6 top-6 z-[55] cursor-pointer p-sm tablet:right-12"
            onClick={handleCloseModal}
          >
            <div className="line h-[1px] w-[20px] translate-y-[1px] rotate-45 bg-white"></div>
            <div className="line h-[1px] w-[20px] -rotate-45 bg-white"></div>
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            id="form-wrapper"
            className=" fixed left-0 top-0 z-50 h-[103vh] w-screen overflow-y-scroll bg-[#222222] px-sm sm:px-md"
          >
            <div className="my-[40px] flex flex-col gap-sm border-none border-white/30 py-md tablet:my-[100px] tablet:grid tablet:grid-cols-2 tablet:gap-md tablet:border-t tablet:border-solid">
              <div className="visible tablet:hidden">
                <p
                  className={`mt-4 text-[48px] font-light text-white ${tobias.className}`}
                >
                  {name}
                </p>
                <p className="mt-[30px] text-[26px] font-light text-white">
                  {cat}
                </p>
              </div>
              <Image
                src={image}
                alt={name}
                width={720}
                height={720}
                quality={100}
                className="my-sm hidden rounded-lg object-cover tablet:block"
              />
              <img
                src={image}
                alt={name}
                className="my-sm block max-h-48 w-full rounded-lg object-cover tablet:hidden"
              />
              <div>
                <div className="hidden tablet:block">
                  <p
                    className={`text-[48px] font-light text-white tablet:mt-8 ${tobias.className}`}
                  >
                    {name}
                  </p>
                  <p className="mt-[30px] text-[26px] font-light text-white">
                    {cat}
                  </p>
                </div>
                <div
                  className={`mt-0 text-[18px] tablet:mt-[70px] ${roobert.className} font-light`}
                >
                  <p
                    className={`
                ${firstInvestment ? "block" : "hidden"}

              `}
                  >
                    First Investment: {firstInvestment}
                  </p>
                  <p
                    className={`
                ${currentStage ? "block" : "hidden"}
              `}
                  >
                    Current Stage: {currentStage}
                  </p>
                  <p
                    className={`${
                      description ? "block" : "hidden"
                    } mt-[30px] max-w-[630px] tablet:my-sm`}
                  >
                    {stringDescription}
                  </p>
                  <a
                    href={website}
                    target="_blank"
                    className={`mt-sm text-lightGray
                ${website ? "block" : "hidden"}
                `}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
export default PortfolioModal;
