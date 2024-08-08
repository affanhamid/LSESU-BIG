"use client";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const MenuList = ({
  href,
  name,
  setOpenMenu,
}: {
  href: string;
  name: string;
  setOpenMenu: any;
}) => {
  return (
    <Link href={href} onClick={() => setTimeout(() => setOpenMenu(false), 400)}>
      <li className="py-6 text-xl md:text-3xl text-left w-full pl-8 md:pl-16 hover:bg-white hover:text-background">
        {name}
      </li>
    </Link>
  );
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`fixed left-0 right-0 top-0 bg-background text-fontColor flex flex-col lg:flex-row xl:pl-32 md:pl-10 pl-5 py-8 items-center z-50 transition-all duration-200 ${
        openMenu ? "lg:pr-[26rem]" : "pr-10 lg:pr-20"
      }`}
    >
      <div className="flex-1 w-max z-[60]">
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
        <div
          className={`fixed right-0 top-0 bottom-0 ${
            openMenu ? "left-0 md:left-1/4 lg:left-3/4" : ""
          }`}
        >
          <div className="relative h-full w-full">
            <ul
              className="absolute right-0 top-0 bottom-0 text-white bg-background flex flex-col text-xl overflow-hidden transition-all duration-200 pt-28"
              style={{ width: openMenu ? "100%" : 0 }}
            >
              <MenuList href="/" name="Home" setOpenMenu={setOpenMenu} />
              <MenuList
                href="/about"
                name="About Us"
                setOpenMenu={setOpenMenu}
              />
              <MenuList
                href="/events"
                name="Events"
                setOpenMenu={setOpenMenu}
              />
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

            <div
              className={`absolute text-5xl right-10 md:right-20 cursor-pointer transition-all duration-200 z-50 ${
                openMenu
                  ? "top-12 text-red-700"
                  : "top-[95px] text-white hover:text-white/60"
              }`}
              onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
              {openMenu ? <BiX /> : <BiMenuAltRight />}
            </div>
          </div>
        </div>
        <div className="z-[60]">
          <Socials />
        </div>
        <div className="z-[60] hidden md:block">
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            <button className="px-4 py-2 rounded border border-white/20 bg-background text-md">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
