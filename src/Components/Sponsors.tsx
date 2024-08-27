"use client";
import React from "react";
import Link from "next/link";
import { SponsorProps } from "@/Types/types";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const Sponsor: React.FC<SponsorProps> = ({ imageLink }) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer w-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] mx-auto"
      variants={itemVariants}
    >
      <img
        src={imageLink}
        alt="Sponsor logo"
        className="object-contain w-full h-auto"
      />
    </motion.div>
  );
};

const Sponsors = ({ sponsors }: { sponsors: any }) => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Partner Organisations
      </h1>
      <div className="px-4 md:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {sponsors["sponsors"].map((sponsor: any, idx: number) => (
            <Sponsor imageLink={sponsor.imageLink} key={idx} />
          ))}
        </div>
        <div className="text-center text-lg mm:text-2xl mt-8">
          <Link href="mailto:lse-big@lse.ac.uk">
            <div className="bg-background text-white px-5 py-2 w-max mx-auto rounded-lg mt-10 text-wrap min-w-screen">
              Partner with us
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
