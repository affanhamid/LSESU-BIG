import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-[150px] mm:w-[200px]">
      <Link href={"/"}>
        <Image src={logo} alt="LSE BIG" />
      </Link>
    </div>
  );
};

export default Logo;
