import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TestimonyProps } from "@/Types/types";

const Testimony: React.FC<TestimonyProps> = ({ name, description }) => {
  return (
    <div className="relative flex flex-col border-2 border-white rounded-lg w-[500px] aspect-video px-14 py-14">
      <p className="text-3xl flex-1">{description}</p>
      <div className="flex items-center gap-1">
        <h2 className="text-lg text-right">Anonymous</h2>
      </div>
      <div className="absolute bottom-10 right-10 text-4xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Testimony;
