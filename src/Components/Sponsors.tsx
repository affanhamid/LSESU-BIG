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

const Sponsor: React.FC<SponsorProps> = ({ logo, summary }) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden mx-20 mb-20 hover:scale-110 transition-all cursor-pointer"
      variants={itemVariants}
    >
      <img src={logo} alt="Sponsor logo" />
    </motion.div>
  );
};

const Sponsors = ({ sponsors }: { sponsors: any }) => {
  return (
    <motion.section
      className="py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        Past Sponsors and Partners
      </h1>
      <div className="px-4 md:px-10 lg:px-80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sponsors.map((sponsor: any, idx: number) => (
            <Sponsor logo={sponsor.logo} summary={sponsor.summary} key={idx} />
          ))}
        </div>
        <div className="text-center text-2xl">
          <Link href="mailto:lse-big@lse.ac.uk">
            <div className="bg-background text-white px-5 py-2 w-max mx-auto rounded-lg">
              Interested in partnering with us?
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
