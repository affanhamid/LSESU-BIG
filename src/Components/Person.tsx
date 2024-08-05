import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { PersonProps } from "@/Types/types";

const Person: React.FC<PersonProps> = ({
  name,
  role,
  job,
  image,
  email,
  linkedin,
  reverse,
}) => {
  return (
    <div
      className={`overflow-hidden rounded-lg flex ${
        reverse ? "flex-row-reverse" : ""
      } items-center gap-4 lg:gap-10 my-6 lg:my-10 border border-gray-500 p-4 lg:p-6`}
    >
      {/* Placeholder for image */}
      <div className="w-24 h-24 lg:w-[350px] lg:h-[250px] bg-gray-500"></div>
      <div className="flex flex-col text-left gap-2 lg:gap-3">
        <div className="flex items-center">
          <h2 className="text-lg lg:text-xl font-semibold">{name}</h2>
          <Link href={linkedin}>
            <FaLinkedin className="ml-2 text-lg lg:text-xl" />
          </Link>
        </div>
        <p className="text-sm lg:text-base">{job}</p>
        <p className="text-sm lg:text-base">{role}</p>
        <p className="underline text-sm lg:text-base">{email}</p>
      </div>
    </div>
  );
};

export default Person;
