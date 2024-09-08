"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MediaLogo from "./MediaLogo";
import { SponsorInterface } from "@/Types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Sponsors = ({ sponsors }: { sponsors: SponsorInterface[] }) => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h1>Partner Organisations</h1>
      <div className="px-4 md:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {sponsors.map((sponsor: SponsorInterface, idx: number) => (
            <MediaLogo icon={sponsor.imageLink} key={idx} />
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
