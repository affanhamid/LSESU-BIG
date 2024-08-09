"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SectorMember = ({
  imageLink,
  name,
  role,
  linkedin,
}: {
  imageLink: string;
  name: string;
  role: string;
  linkedin: string;
}) => {
  return (
    <motion.div
      className="my-4 flex flex-col items-center rounded-lg overflow-hidden text-white text-center w-48"
      variants={itemVariants}
    >
      <img
        src={imageLink}
        alt={name}
        className="rounded-full w-48 h-48 object-cover shadow-lg"
      />
      <div className="flex flex-col py-4 items-center">
        <p className="text-xl lg:text-2xl flex items-center gap-2 justify-center font-semibold">
          {name}
          <Link
            href={linkedin || ""}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-gray-700 transition-colors duration-200" />
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export const Sector = ({
  sectorMembers,
  title,
}: {
  sectorMembers: any;
  title: string;
}) => {
  return (
    <motion.div
      className="bg-background text-white px-5 rounded-lg"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl lg:text-3xl font-bold text-left my-10 pl-5">
        {title}
      </h2>
      <div className="flex w-full justify-evenly">
        {sectorMembers.map((member: any, idx: number) => (
          <SectorMember
            key={idx}
            name={member.name}
            role={member.role}
            imageLink={member.imageLink}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </motion.div>
  );
};
