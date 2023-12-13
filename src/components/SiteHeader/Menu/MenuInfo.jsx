import React from "react";
import { useEffect, useState } from "react";
import useStore from "@/utils/geo-3-store";
import { motion } from "framer-motion";

function MenuInfo({ theme }) {
  const { textColor } = useStore();
  const [location, setLocation] = useState("London");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [meridiem, setMeridiem] = useState("AM");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const meridiem = hours >= 12 ? "pm" : "am";
      const hour = hours % 12 || 12;
      const minute = minutes < 10 ? `0${minutes}` : minutes;
      setHour(hour);
      setMinute(minute);
      setMeridiem(meridiem);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`mb-10 mt-[-44px] hidden w-full flex-row content-start items-center gap-20 transition-all
      ${textColor === "light" ? "text-white" : null}
                ${textColor === "dark" ? "text-black " : null}
                ${textColor === "color" ? "text-fomPurple" : null}
      duration-500 md:flex md:opacity-100 md:duration-1000`}
    >
      London
      <span>
        {hour}
        <motion.span
          //opacity 0 1 loop 1s infinite
          animate={{ opacity: [0, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          :
        </motion.span>
        {minute}
        {meridiem}
      </span>
    </div>
  );
}

export default MenuInfo;
