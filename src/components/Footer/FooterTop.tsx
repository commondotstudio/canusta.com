import React, { useState, useEffect, useRef } from "react";
import { menuItems } from "@/components/SiteHeader/Menu/MenuMain";
import Link from "@/components/Elements/Link";
import { validateEmail } from "@/utils/utils";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useStore from "@/utils/geo-3-store";
import { isEmpty } from "underscore";

export default function FooterTop() {
  const [emailError, setEmailError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const { textColor } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submissionState, setSubmissionState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const onSubmit = (data: any) => {
    const formData = new FormData();

    formData.append("u", "1");
    formData.append("f", "1");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "fcf309cb26b9756f056470fb424bb793");

    formData.append("email", data.email);

    fetch("https://fomcap.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        setSubmissionState({
          isSubmitted: true,
          isError: false,
        });
      })
      .catch((err) => {
        setSubmissionState({
          isSubmitted: false,
          isError: true,
        });
      });
  };

  useEffect(() => {
    if (isFocused) {
      setButtonOpacity(50);
    }
  }, [isFocused]);

  const handleChange = (event: any) => {
    if (validateEmail(event.target.value)) {
      setSubmitDisabled(false);
      setButtonOpacity(100);
    } else {
      setSubmitDisabled(true);
      setButtonOpacity(50);
    }
  };

  // Menu

  const [menu, setmenu_] = useState<MenuItem[]>();


    useEffect(() => {
      if (!localStorage) return;
      const _menu = localStorage.getItem("menu");
      if (!isEmpty(_menu)) {
        setmenu_(JSON.parse(_menu!) as MenuItem[]);
      }
    }, []);

  return (
    <div
      id="top"
      className={`my-md flex flex-col gap-sm gap-y-[30px] tablet:grid tablet:grid-cols-4 tablet:gap-md
      ${textColor === "light" ? "text-white" : null}
      ${textColor === "dark" ? "text-black" : null}
      ${textColor === "color" ? "text-fomPurple" : null}
      `}
    >
      <div id="newsletter" className="relative col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <motion.h3 className={`text-sm font-light transition-all duration-500
            ${textColor === "light" ? "text-white/60" : null}
            ${textColor === "dark" ? "text-black/60" : null}
            ${textColor === "color" ? "text-fomPurple/60" : null}
            `}>
              Subscribe
            </motion.h3>
            <motion.div
              initial={{ opacity: 1 }}
              animate={
                submissionState.isSubmitted ? { opacity: 0 } : { opacity: 1 }
              }
              transition={{ duration: 0.4, delay: 0 }}
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={`h-[40px] w-full flex-grow rounded-none border-b  py-5 text-sm font-light  outline-0 ring-0 transition-all duration-500 focus:outline-none focus:outline-0 focus:ring-0
                ${textColor === "light" ?  "text-white placeholder-white" : null}
                ${textColor === "dark" ? "text-black placeholder-black border-black" : null}
                ${textColor === "color" ? "text-black placeholder-fomPurple border-fomPurple" : null}
                `}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                  onChange: handleChange,
                })}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              <motion.p
                className={`absolute text-sm font-light 
                ${textColor === "light" ? "text-white/80" : null}
                ${textColor === "dark" ? "text-black/80" : null}
                ${textColor === "color" ? "text-fomPurple/80" : null}
                transition-all
                  duration-500 tablet:mt-2 opacity-${errors.email ? "100" : "0"}
                  `}
              >
                Please enter a valid email address.
              </motion.p>

              <motion.button
                disabled={submitDisabled}
                type="submit"
                className={`absolute -translate-x-[80px] cursor-pointer px-10 py-2 transition-all
            duration-500 opacity-${buttonOpacity} hover:-translate-x-[72px]`}
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="white"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </motion.button>
            </motion.div>
          </fieldset>
          {submissionState.isError && (
            <p>Submission failed. Please try again later.</p>
          )}
        </form>
        <motion.p
          initial={{ opacity: 0 }}
          animate={
            submissionState.isSubmitted ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.4, delay: 0.5 }}
          className={`absolute top-1/2 opacity-0 tablet:top-6`}
        >
          Thank you for subscribing.
        </motion.p>
      </div>
      <div id="explore">
        <h3 className={`mb-2 text-sm
            ${textColor === "light" ? "text-white/60" : null}
            ${textColor === "dark" ? "text-black/60" : null}
            ${textColor === "color" ? "text-fomPurple/60" : null}
        `}>Explore</h3>
        <div className="flex flex-col gap-[6px]">
          {menu &&
                menu?.map((item, index) => (
                  <Link
              key={index}
              href={"/" + item.menu_item.post_name}
              className={`text-sm font-light transition-color duration-500
              ${textColor === "light" ? "text-white hover:text-fomPurple" : null}
              ${textColor === "dark" ? "text-black hover:text-fomPurple" : null}
              ${textColor === "color" ? "text-fomPurple hover:text-black" : null}
              `}
            >
              {item.menu_item.post_title}
            </Link>
                ))}
        </div>
      </div>
      <div id="contact">
        <h3 className={`mb-2 text-sm
            ${textColor === "light" ? "text-white/60" : null}
            ${textColor === "dark" ? "text-black/60" : null}
            ${textColor === "color" ? "text-fomPurple/60" : null}
        `}>Contact</h3>
        <p className="text-sm font-light leading-6">
          Force Over Mass
          <br />
          MYO 2nd Floor
          <br />
          123 Victoria Street
          <br />
          London SW1E 6DE
        </p>
      </div>
    </div>
  );
}

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