"use client";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";

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
      <li className="py-6 text-3xl text-left w-full pl-16 hover:bg-white hover:text-background">
        {name}
      </li>
    </Link>
  );
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className="fixed left-0 right-0 top-0 bg-background text-fontColor flex pl-32 py-5 items-center z-30 transition-all duration-200"
      style={{ paddingRight: openMenu ? 500 : 80 }}
    >
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
        <div className="fixed right-0 top-0 bottom-0 z-50">
          <ul
            className="absolute right-0 top-0 bottom-0 text-white bg-background flex flex-col text-xl overflow-hidden transition-all duration-200 pt-28"
            style={{ width: openMenu ? "25vw" : 0 }}
          >
            <MenuList href="/" name="Home" setOpenMenu={setOpenMenu} />
            <MenuList href="/about" name="About Us" setOpenMenu={setOpenMenu} />
            <MenuList href="/events" name="Events" setOpenMenu={setOpenMenu} />
            <MenuList
              href="/sponsorship"
              name="Sponsors"
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
            style={{ top: openMenu ? 50 : 120 }}
            className={`absolute text-5xl right-20 hover:text-background cursor-pointer transition-all duration-200 z-50 ${
              openMenu ? "text-white" : "text-background"
            }`}
            onClick={() => setOpenMenu((openMenu) => !openMenu)}
          >
            <BiMenuAltRight />
          </div>
        </div>
        <div className="z-[60]">
          <Socials />
        </div>
        <div className="z-[60]">
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
