"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import Logo from "./Logo";
import { BiMenuAltRight } from "react-icons/bi";

const MenuList = ({
  href,
  name,
  setOpenMenu,
  setScroll,
  idx,
}: {
  href: string;
  name: string;
  setOpenMenu: any;
  setScroll?: any;
  idx?: number;
}) => {
  return (
    <Link
      href={href}
      onClick={() => setTimeout(() => setOpenMenu(false), 400)}
      onMouseEnter={() => setScroll(idx)}
    >
      <li className="py-6 text-3xl w-full pl-16 hover:bg-white hover:text-background">
        {name}
      </li>
    </Link>
  );
};

const HeaderNavbar = ({
  setScroll,
  openMenu,
  setOpenMenu,
}: {
  setScroll: any;
  openMenu: any;
  setOpenMenu: any;
}) => {
  return (
    <div
      className="fixed left-0 right-0 top-0 text-fontColor flex pl-32 py-5 items-center z-30 transition-all duration-200"
      style={{ paddingRight: openMenu ? 500 : 80 }}
    >
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
        <div className="fixed right-0 top-0 bottom-0 left-1/2">
          <div className="relative h-full w-full z-50">
            <ul
              className="absolute right-0 top-0 bottom-0 text-white bg-background flex flex-col text-xl overflow-hidden transition-all duration-200 pt-28"
              style={{ width: openMenu ? "50%" : 0 }}
            >
              <MenuList
                href="/"
                name="Home"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={0}
              />
              <MenuList
                href="/about"
                name="About Us"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={1}
              />
              <MenuList
                href="/events"
                name="Events"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={2}
              />
              <MenuList
                href="/sponsorship"
                name="Sponsors"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={3}
              />
              <MenuList
                href="/mentorship"
                name="Mentorship"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={4}
              />
              <MenuList
                href="/resources"
                name="Resources"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={5}
              />
              <MenuList
                href="/tracker"
                name="BIG Tracker"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={6}
              />
            </ul>

            <div
              style={{ top: openMenu ? 50 : 90 }}
              className="absolute text-5xl right-20 text-white hover:text-background cursor-pointer transition-all duration-200 z-50"
              onClick={() => setOpenMenu((openMenu: boolean) => !openMenu)}
            >
              <BiMenuAltRight />
            </div>
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

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const lastExecutionRef = useRef(0);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    const now = Date.now();
    if (now - lastExecutionRef.current >= 200) {
      if (divRef.current) {
        divRef.current.scrollTop = window.screen.height * scroll + 50;
      }
      lastExecutionRef.current = now;
    }
  }, [scroll]);
  return (
    <section>
      <HeaderNavbar
        setScroll={setScroll}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <div
        className="absolute w-screen h-screen overflow-y-scroll flex flex-col -z-10 transition-all duration-200 brightness-90"
        ref={divRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <img
          src="/canary_wharf.jpg"
          alt="Image"
          className="w-screen object-cover"
        />
        <img
          src="/canary_wharf_3.jpg"
          alt="Image"
          className="w-screen object-cover"
        />
      </div>
      <header className="relative h-screen w-screen z-20">
        <div
          className="absolute top-1/2 transform -translate-y-1/2 p-3 -translate-x-1/2 flex flex-col text-white transition-all duration-200 backdrop-brightness-75 bg-white rounded-lg bg-opacity-30 backdrop-blur-md"
          style={{ left: openMenu ? "30%" : "50%" }}
        >
          <h1 className="text-5xl font-bold flex flex-col text-nowrap">
            <span
              className={`text-5xl mb-1  transition-transform duration-200 text-center ${
                openMenu ? "-translate-x-[17.7%] " : "translate-x-0"
              }`}
            >
              London School of Economics
            </span>
            <span className="text-7xl p-1 text-background">
              Business & Investment Group
            </span>
          </h1>
          <p
            className={`text-2xl mt-3 transition-transform duration-200 text-center ${
              openMenu ? "-translate-x-[25.5%] " : "translate-x-0"
            }`}
          >
            Europe's premier finance and business society
          </p>
          <Link
            href="https://www.lsesu.com/communities/societies/group/big/"
            className="w-full flex justify-center z=[60]"
          >
            <button
              className={`mt-4 px-4 py-2 rounded border-2 border-white/5 bg-background text-white text-bold text-xl transition-all duration-200 ${
                openMenu ? "-translate-x-[425%] " : "-translate-x-0"
              }`}
            >
              Join Us
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
