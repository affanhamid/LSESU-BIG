"use client";
import React, { CSSProperties } from "react";
import { motion, Variants } from "framer-motion";
import { NumberInterface } from "../Types";

const cardVariants: Variants = {
  offscreen: {
    y: "var(--y-from)",
    opacity: "var(--opacity-from)",
  },
  onscreen: {
    y: "var(--y-to)",
    opacity: "var(--opacity-to)",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Number = ({ text, icon, description }: NumberInterface) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      className="[--y-from:100px] md:[--y-from:200px] [--y-to:50px] [--opacity-from:0] [--opacity-to:1]"
    >
      <div className="w-40 lg:w-52 xl:w-64 rounded-lg aspect-square md:aspect-[10/11] lg:aspect-[7/8] bg-background text-white flex flex-col items-center justify-center pb-5 lg:pb-10 lg:hover:pb-5 group transition-all duration-200 md:px-3 cursor-pointer select-none">
        <div className="flex-1 flex items-center justify-center text-5xl lg:text-6xl">
          {icon}
        </div>
        <div className="mt-4 text-xl lg:text-2xl text-nowrap">{text}</div>
        <div className="hidden md:block md:h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 md:mt-4 text-center">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default Number;
