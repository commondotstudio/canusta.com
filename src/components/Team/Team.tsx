import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PersonCard from "./PersonCard";
import SectionHeader1 from "../SectionHeader/SectionHeader1";
import { useTeamInViewStore } from "@/utils/teamInView";
import { InterfaceUnknownObject } from "@/pages/[slug]";

function parseProps(data: Record<string, any>) {
  const result: { [index: number]: { [propertyName: string]: any } } = {};

  // Group values by numbers
  for (const key in data) {
    const match = key.match(/^person_(\d+)_(.*)$/);
    if (match) {
      const index = parseInt(match[1]);
      const attribute = match[2];

      if (!result[index]) {
        result[index] = {};
      }

      result[index][attribute] = data[key];
    }
  }

  return result;
}

const teamData = [
  {
    name: "Martijn de Wever",
    title: "Founder & CEO",
    bio: '<p>Martijn de Wever is a technologist, investor, and serial entrepreneur with track record for growing and leading companies. Since 2013, he founded Force Over Mass Capital and Fintech company Floww simultaneously, now backed by London Stock Exchange Group. Prior to this he spent 20 years trading various asset classes at global banks. His consistent data and process driven investment approach combined with extensive technology knowledge has delivered outstanding returns for decades.</p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>',
    image: "/statics/images/team/martijn-de-wever.webp",
  },
  {
    name: "Leonie van Hofwegen",
    title: "Partner",
    bio: '<p>Leonie is an ex-investment banker, with almost 15 years specializing in advising, structuring and dealing derivative solutions (Barclays, Natwest Markets). Leonie’s experience involved delivering large-cap corporates with risk management services across financial, credit, market, and counterparty risk. Leonie holds two Master’s degrees, one in Financial Risk Management (NYU Stern) and one in Finance & Investments (RSM). Prior to moving into VC, Leonie used data analytics to launch a successful US-based trademarked consumer brand. The company manufactured and sold FDA approved appliances exclusively .online.</p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>',
    image: "/statics/images/team/leonie-van-hofwegen.webp",
  },
  {
    name: "Nick Tyler",
    title: "Partner",
    bio: '<p>With 13 years of experience in the private markets across investment banking and venture capital in South Africa, Hong Kong, and London, Nick recently set up the London office for an Asia-based merchant banking platform, TTB Partners, with investments in Fintech, Real Estate, and Sport. Nick has a BCom from Stellenbosch University and an MBA from Trinity College.</p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>',
    image: "/statics/images/team/nick-tyler.webp",
  },
  {
    name: "Connor Simpson-Craib",
    title: "Principal",
    bio: `<p>Connor brings a unique blend of operational, investment, and technical knowledge to the investment team, working as both investor and operator over the past 4 years. Most recently, Connor was one of the first hires at Fintech scale-up, Floww, helping them scale from Seed to Series C and forming a crucial part of the core Strategy team. Connor holds a specialized Master's Degree (MSc) in Fintech and Digital Finance from UCL (First Graduation Class) and a BSc in Economics from the University of St Andrews.
    </p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>`,
    image: "/statics/images/team/connor-simpson-craib.webp",
  },
  {
    name: "Benjamin Tan",
    title: "Principal",
    bio: `<p>Benjamin started out his career at BNY Mellon and has experience working across both public and private assets. Prior to joining Force Over Mass, Benjamin was the first hire on the strategy team into the London-based fintech Scale-Up, Floww. Benjamin holds a bachelor's degree from the University of San Francisco and a Master's degree from the University of Cambridge.</p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>`,
    image: "/statics/images/team/benjamin-tan.webp",
  },
  {
    name: "Kimberley Day",
    title: "EA",
    bio: `<p>With over 10 years’ administrative experience supporting c-suite executives and global heads, Kimberley has worked at Fintech’s and disruptive, fast-growing startups such as World First, Juul, and BlockFi. Prior to her career as an EA, she studied nursing at King’s College London.</p><br/><a href="http://google.com">LinkedIn</a><br/><a href="mailto:mail@gmail.com">Email</a>`,
    image: "/statics/images/team/kimberlay-day.webp",
  },
];

export default function Team(props: InterfaceUnknownObject) {
  const data = parseProps(props);
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  const people: JSX.Element[] = Object.keys(data).map((key) => (
    <PersonCard
      key={key}
      name={data[parseInt(key)].name}
      title={data[parseInt(key)].title}
      bio={data[parseInt(key)].bio}
      image={data[parseInt(key)].image[0].source_url}
      i={parseInt(key)}
      inView={inView}
    />
  ));

  const setTeamInView = useTeamInViewStore((state) => state.setTeamInView);

  useEffect(() => {
    if (inView2) {
      setTeamInView(true);
    } else {
      setTeamInView(false);
    }
  }, [inView2]);

  return (
    <>
      <motion.div
        key={1}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, delay: 1 }}
        id="teamInner"
        className="relative flex h-screen w-screen  items-center py-sm transition-all duration-500 ease-linear sm:h-screen sm:py-md"
      >
        <div
          id="team"
          className="z-20 mb-sm flex w-full flex-col gap-16 sm:mb-md sm:gap-0"
        >
          <SectionHeader1>Our Team</SectionHeader1>
          <div className="people mx-sm mt-sm flex snap-x flex-row items-center overflow-x-auto overflow-y-hidden whitespace-nowrap pb-10 sm:mx-md sm:mt-[40px]">
            {people}
          </div>
          <div className="absolute bottom-1/2" ref={ref2}></div>
        </div>
      </motion.div>
    </>
  );
}
