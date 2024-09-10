"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const Member = ({
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
      className="px-6 my-4 flex flex-col items-center rounded-lg overflow-hidden text-black"
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
    >
      <img
        src={imageLink}
        alt={name}
        className="rounded-full w-48 h-48 md:w-40 md:h-40 xl:w-48 xl:h-48 object-cover shadow-lg"
      />
      <div className="flex flex-col py-4 items-center text-center">
        <p className="text-xl lg:text-2xl flex items-center gap-2 justify-center font-semibold break:text-nowrap">
          {name}
          <Link
            href={linkedin}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black hover:text-gray-700 transition-colors duration-200 hidden break:block" />
          </Link>
        </p>
        <p className="text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
};
