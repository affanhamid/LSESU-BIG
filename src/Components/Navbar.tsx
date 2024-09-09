"use client";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

type MenuListProps = {
  href: string;
  name: string;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuList = ({ href, name, setOpenMenu }: MenuListProps) => {
  return (
    <Link
      href={href}
      className="px-20 py-7 md:py-10 hover:bg-white hover:text-background font-bold"
      onClick={() => setOpenMenu(false)}
    >
      {name}
    </Link>
  );
};

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <aside>
      <div
        className={`absolute overflow-hidden bg-background top-0 h-screen right-0 transition-all duration-200 py-32 ${
          openMenu ? "w-screen lg:w-[500px]" : "w-0"
        }`}
      >
        <IoClose
          onClick={() => setOpenMenu(false)}
          className="absolute right-20 top-16 text-5xl text-red-700 cursor-pointer"
        />
        <ul className="text-white flex flex-col justify-center text-m duration-200 ">
          <MenuList href="/" name="Home" setOpenMenu={setOpenMenu} />
          <MenuList href="/about" name="About Us" setOpenMenu={setOpenMenu} />
          <MenuList href="/events" name="Events" setOpenMenu={setOpenMenu} />
          <MenuList
            href="/mentorship"
            name="Mentorship"
            setOpenMenu={setOpenMenu}
          />
          <MenuList
            href="/resources"
            name="Resources"
            setOpenMenu={setOpenMenu}
          />
          <MenuList
            href="/tracker"
            name="BIG Tracker"
            setOpenMenu={setOpenMenu}
          />
        </ul>
      </div>
      <IoMenu
        className="md:ml-10 cursor-pointer text-4xl xl:text-5xl"
        onClick={() => setOpenMenu(true)}
      />
    </aside>
  );
};

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerWidth < 700) {
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
      className={`w-full fixed justify-between top-0 text-fontColor bg-${navBackground} flex flex-col md:flex-row py-10 px-20 items-center z-30`}
    >
      <Logo />
      <div className="flex gap-4 items-center text-4xl">
        <Socials />

        <button className="px-3 py-2 text-base hidden md:block">
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            Join Us
          </Link>
        </button>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
