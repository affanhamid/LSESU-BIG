import React from "react";
import { SponsorProps } from "@/Types/types";

const Sponsor: React.FC<SponsorProps> = ({ logo, summary }) => {
  return (
    <div className="rounded-lg overflow-hidden mx-20 mb-20 hover:scale-110 transition-all cursor-pointer">
      <img src={logo} alt="Sponsor logo" />
    </div>
  );
};

export default Sponsor;
