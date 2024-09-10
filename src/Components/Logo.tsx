import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Logo = () => {
  return (
    <div className="w-[150px] mm:w-[200px]">
      <Image src={logo} alt="LSE BIG" />
    </div>
  );
};

export default Logo;
