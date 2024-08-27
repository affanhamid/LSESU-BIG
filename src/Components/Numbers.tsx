"use client";
import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Number = ({
  text,
  icon,
  description,
}: {
  text: string;
  icon: any;
  description: string;
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
    >
      <div className="w-40 lg:w-52 xl:w-64 rounded-lg aspect-square md:aspect-[10/11] lg:aspect-[7/8] bg-background text-white flex flex-col items-center justify-center pb-5 lg:pb-10 group transition-all duration-200 md:px-3 cursor-pointer select-none">
        <div className="flex-1 flex items-center justify-center text-5xl lg:text-6xl">
          {icon}
        </div>
        <div className="mt-4 text-xl lg:text-2xl text-nowrap">{text}</div>
        <div className="hidden md:block md:h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 md:mt-2">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const Numbers = () => {
  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-1 mm:gap-10 mb-20 w-max  mx-auto">
      <Number
        text="900+ members"
        icon={<FaUsers />}
        description={
          " With the most members in an LSE society, we represent all degree subjects and backgrounds"
        }
      />
      <Number
        text="50+ events"
        icon={<FaCalendarAlt />}
        description={
          "Our countless panel events, covering a wide range of industries, ensures that there is always something exciting to attend"
        }
      />
      <Number
        text="7,000+ followers"
        icon={<FaUserFriends />}
        description={
          "Our social media presence ensures our members are always up to date with upcoming events"
        }
      />
      <Number
        text="10+ sponsors"
        icon={<FaHandshake />}
        description={
          "Our sponsors bridge the gap between university and industry by providing exclusive networking sessions and more"
        }
      />
    </div>
  );
};

export default Numbers;
