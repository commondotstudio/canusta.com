import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useStore from "@/utils/geo-3-store";

const MenuButton = ({ menu, menuActive, theme }) => {
  const { textColor } = useStore();
  const lineVariants = {
    menu: { rotate: 45, y: 6, width: 22 },
    close: { rotate: 0, y: 0, width: 22 },
  };

  const topLineVariants = {
    menu: { rotate: -45, y: -3, width: 22 },
    close: { rotate: 0, y: 0, width: 22 },
  };

  useEffect(() => {
    function handleEscKeyPress(event) {
      if (event.key === "Escape") {
        menuActive();
      }
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [menuActive]);

  const [hovered, setHovered] = useState(false);

  return (
    <button
      id="menu-button"
      onMouseEnter={() => !menu && setHovered(true)} // Apply hover effect if menu is not active
      onMouseLeave={() => setHovered(false)}
      onClick={menuActive}
      className="pointer-events-auto z-40 flex cursor-pointer items-center justify-between p-4 md:pr-sm"
    >
      <div className="flex h-[10px] w-8 flex-col items-center justify-between">
        <motion.div
          variants={lineVariants}
          initial="close"
          animate={menu ? "menu" : "close"}
          style={{
            scaleX: hovered && !menu ? 0.8 : 1, // Apply hover scale effect only when not in menu active state
            // move the line right when menu is active
            x: hovered && !menu ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`h-[1px] w-[34px] transition-all duration-[400ms] ease-in-out 
          ${textColor === "light" ? "bg-white" : null}
          ${textColor === "dark" ? "bg-black" : null}
          ${textColor === "color" ? "bg-fomPurple" : null}
          `}
        ></motion.div>
        <motion.div
          variants={topLineVariants}
          style={{
            scaleX: hovered && !menu ? "1.4" : "1", // Apply hover scale effect only when not in menu active state
          }}
          animate={menu ? "menu" : "close"}
          initial="close"
          transition={{ duration: 0.3 }}
          className={`h-[1px] w-[34px] transition-all duration-[400ms] ease-in-out  
          ${textColor === "light" ? "bg-white" : null}
          ${textColor === "dark" ? "bg-black" : null}
          ${textColor === "color" ? "bg-fomPurple" : null}
          `}
        ></motion.div>
      </div>
    </button>
  );
};

export default MenuButton;
