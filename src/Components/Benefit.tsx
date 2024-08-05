import React from "react";
import { BenefitProps } from "@/Types/types";

const Benefit: React.FC<BenefitProps> = ({ title, description }) => {
  return (
    <div className="h-[80%] z-0 p-4 md:pl-10 flex flex-col justify-center rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default Benefit;
