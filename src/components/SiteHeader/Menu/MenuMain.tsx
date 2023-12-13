import { tobias } from "@/utils/fonts";
import useStore from "@/utils/geo-3-store";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { isEmpty } from "underscore";
import MenuInfo from "./MenuInfo";

export const menuItems = [
  {
    name: "About FOM",
    link: "/about-fom",
  },

  {
    name: `The (Semi) Liquid Fund`,
    link: "/the-semi-liquid-fund",
  },

  {
    name: "Founders",
    link: "/founders",
  },

  {
    name: "Investors",
    link: "/investors",
  },

  {
    name: "Pension Funds",
    link: "/pension-funds",
  },

  {
    name: "Portfolio",
    link: "/portfolio",
  },
];

function MenuMain({
  setMenu,
  menuActive,
  theme,
}: {
  menuActive: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  theme: string;
}) {
  const { textColor } = useStore();
  const [menu, setmenu_] = useState<MenuItem[]>();

  useEffect(() => {
    if (!localStorage) return;
    const _menu = localStorage.getItem("menu");
    if (!isEmpty(_menu)) {
      setmenu_(JSON.parse(_menu!) as MenuItem[]);
    }
  }, []);


  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    bgBlack: {
      backgroundColor: "#000000",
    },
    bgWhite: {
      backgroundColor: "#ffffff",
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={menuActive ? "visible" : "hidden"}
      id="menuMain"
      className={`fixed top-0 z-40 grid h-screen w-screen grid-cols-1 grid-rows-2 gap-md p-sm sm:grid-cols-6 sm:grid-rows-1 sm:p-md
      ${textColor === "light" ? "bg-darkGray" : "bg-white"}
      ${menuActive ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      <div className="col-start- row-span-2 row-start-1 mt-md flex justify-between py-sm sm:col-start-4 sm:col-end-7 sm:row-span-1 sm:mr-10 sm:mt-0 sm:py-0 xl:col-start-5">
        <div
          className={` pointer-events-none flex flex-col items-start justify-between gap-4 font-thin         
          ${menuActive ? "pointer-events-auto" : "pointer-events-none"}
          
          `}
        >
          <div>
            <MenuInfo theme={theme} />
            <div className="">
              {menu &&
                menu?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      menuActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.5 + index / 10 }}
                    className="my-5 sm:my-6"
                  >
                    <Link
                      href={"/" + item.menu_item.post_name}
                      key={index}
                      onClick={() => setMenu(false)}
                    >
                      <span
                        className={`text-2xl leading-none sm:text-3xl tablet:text-3xl
                ${textColor === "light" ? "text-white hover:text-fomPurple" : null}
                ${textColor === "dark" ? "text-black hover:text-fomPurple" : null}
                ${textColor === "color" ? "text-fomPurple hover:text-black" : null}
                ${tobias.className} font-thin
                transition-color duration-500 ease-in-out 
                `}
                      >
                        {item.menu_item.post_title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  menuActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 + menuItems.length / 10 }}
                className={`
                  ${textColor === "light" ? "text-white hover:text-fomPurple" : null}
                ${textColor === "dark" ? "text-black hover:text-fomPurple" : null}
                ${textColor === "color" ? "text-fomPurple hover:text-black" : null}
                `}
              >
                <Link 
                  href={"/contact"}
                  onClick={() => setMenu(false)}
                  className="
                   transition-colors duration-500"
                  >
                  Contact
                </Link>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  menuActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 + menuItems.length / 8 }}
                className={`
                  ${textColor === "light" ? "text-white hover:text-fomPurple" : null}
                ${textColor === "dark" ? "text-black hover:text-fomPurple" : null}
                ${textColor === "color" ? "text-fomPurple hover:text-black" : null}
                `}
              >
                <Link
                  href={"https://portal.floww.io"}
                  onClick={() => setMenu(false)}
                  className="hover:text-fomPurple transition-colors duration-500"
                >
                  Sign In
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MenuMain;

export interface MenuItem {
  menu_item: {
    ID: number;
    post_author: string;
    post_date: Date;
    post_date_gmt: Date;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged: string;
    post_modified: Date;
    post_modified_gmt: Date;
    post_content_filtered: string;
    post_parent: number;
    guid: string;
    menu_order: number;
    post_type: string;
    post_mime_type: string;
    comment_count: string;
    filter: string;
  };
}
