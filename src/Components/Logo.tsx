import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[200px] mm:w-max">
      <img src="/logo.png" alt="LSE BIG" width={200} height={100} />
    </div>
  );
};

export default Logo;
