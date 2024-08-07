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
      className={`overflow-hidden flex-col items-center gap-4 lg:gap-10 my-6 lg:my-10 border-b border-white/50 pb-5 `}
    >
      <img
        src={image}
        alt=""
        className="w-24 lg:w-[175px] object-contain rounded-full"
      />
      <div
        className={`flex flex-col ${
          reverse ? "text-right" : "text-left"
        } gap-2 lg:gap-3`}
      >
        <div className="flex-col">
          <span className="flex items-center">
            <h2 className="text-lg lg:text-2xl font-semibold">{name}</h2>
            <Link href={linkedin}>
              <FaLinkedin className="ml-2 text-lg lg:text-xl" />
            </Link>
          </span>
          <p
            className={`text-sm lg:text-base ${
              reverse ? "text-black" : "text-gray-300"
            }  pt-2`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
