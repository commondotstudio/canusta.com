import React, { useState } from "react";
import { tobias, roobert } from "@/utils/fonts";
import Modal from "react-modal";
import LineSpacer from "../Elements/LineSpacer";
import { motion, AnimatePresence } from "framer-motion";
import { stringToHTML } from "@/utils/stringToHTML";

interface PersonDetailProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  clickAction: any;
  onRequestClose: any;
  isOpen: boolean;
}

export default function PersonDetail({
  name,
  title,
  bio,
  image,
  clickAction,
  onRequestClose,
  isOpen,
}: PersonDetailProps) {
  Modal.setAppElement("#__next");

  const [isClosing, setIsClosing] = useState(false);
  const handleCloseModal = () => {
    setIsClosing(true);
    // Add a delay before actually closing the modal to allow the exit animation
    setTimeout(() => {
      clickAction(false);
      setIsClosing(false);
    }, 800); // Adjust the delay time to match your exit animation time
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div>
          <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="personDetail fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col overflow-x-hidden overflow-y-scroll bg-[#222222] pt-[0px]"
            >
              <div
                className="closeButton hover:text-white-0 cursor-pointer self-end px-sm pb-[85px] pt-[45px] transition-all duration-300 sm:px-md "
                onClick={() => clickAction(false)}
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6.71338"
                    y="20.8203"
                    width="20"
                    height="1.11111"
                    transform="rotate(-45 6.71338 20.8203)"
                    fill="white"
                  />
                  <rect
                    x="20.8555"
                    y="21.6064"
                    width="20"
                    height="1.11111"
                    transform="rotate(-135 20.8555 21.6064)"
                    fill="white"
                  />
                </svg>
              </div>
              <motion.div className="content flex flex-col px-sm sm:flex-row sm:px-md ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="leftColumn mb-[30px] w-full sm:mb-0 sm:w-[50%]"
                >
                  <div
                    className={`name text-3xl font-thin ${tobias.className} `}
                  >
                    {name}
                  </div>
                  <div className={`title text-2xl`}>{title}</div>
                </motion.div>
                <div className="rightColumn w-full sm:w-[50%]">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    src={image}
                    alt={name}
                    className="h-[auto] w-full"
                  />
                </div>
              </motion.div>
              <LineSpacer theme={"dark"} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="content flex flex-col px-sm sm:flex-row sm:px-md "
              >
                <div className="leftColumn w-[50%]"></div>
                <div className="rightColumn w-full pb-[60px] sm:w-[50%]">
                  {stringToHTML(bio)}
                </div>
              </motion.div>
            </motion.div>
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
