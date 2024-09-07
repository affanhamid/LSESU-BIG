"use client";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";

type MenuListProps = {
  href: string;
  name: string;
};
const MenuList = ({ href, name }: MenuListProps) => {
  return (
    <Link href={href} className="py-6 text-2xl">
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerWidth < 650) {
        if (window.scrollY >= 200) {
          setNavBackground("background");
        } else {
          setNavBackground("transparent");
        }
      } else {
        if (window.scrollY >= 750) {
          setNavBackground("background");
        } else {
          setNavBackground("transparent");
        }
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 text-fontColor bg-${navBackground} flex md:flex-row py-12 px-20 items-center z-30`}
    >
      <Logo />
      <ul className="text-white flex justify-center gap-10 text-m duration-200 flex-1">
        <MenuList href="/" name="Home" />
        <MenuList href="/about" name="About Us" />
        <MenuList href="/events" name="Events" />
        <MenuList href="/mentorship" name="Mentorship" />
        <MenuList href="/resources" name="Resources" />
        <MenuList href="/tracker" name="BIG Tracker" />
      </ul>
      <div className="flex gap-4 items-center">
        <Socials />
        <Link href="https://www.lsesu.com/communities/societies/group/big/">
          <button className="px-3 py-2 text-base">JOIN US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
