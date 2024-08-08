"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import Logo from "./Logo";
import { BiMenuAltRight, BiX } from "react-icons/bi";

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
      <li className="py-6 text-xl md:text-3xl w-full pl-8 md:pl-16 hover:bg-white hover:text-background">
        {name}
      </li>
    </Link>
  );
};

const HeaderNavbar = ({
  setScroll,
  openMenu,
  setOpenMenu,
  navBackground,
}: {
  setScroll: any;
  openMenu: any;
  setOpenMenu: any;
  navBackground: any;
}) => {
  return (
    <div
      className={`fixed top-0 w-full text-fontColor bg-${navBackground} flex gap-4 flex-col lg:flex-row xl:pl-32 md:pl-10 pl-5 py-8 items-center z-30 transition-all duration-200 ${
        openMenu ? "lg:pr-[32rem]" : "pr-10 lg:pr-20"
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
                href="/mentorship"
                name="Mentorship"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={3}
              />
              <MenuList
                href="/resources"
                name="Resources"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={4}
              />
              <MenuList
                href="/tracker"
                name="BIG Tracker"
                setOpenMenu={setOpenMenu}
                setScroll={setScroll}
                idx={5}
              />
            </ul>

            <div
              className={`absolute text-5xl right-10 md:right-20 cursor-pointer transition-all duration-200 z-50 ${
                openMenu
                  ? "top-12 text-red-700"
                  : "top-[95px] text-white hover:text-white/60"
              }`}
              onClick={() => setOpenMenu((openMenu: boolean) => !openMenu)}
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

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const lastExecutionRef = useRef(0);
  const [isClient, setIsClient] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop =
        window.screen.height * (scroll * 0.856) + 0.2 * scroll;
    }
  }, [scroll]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= 750) {
        setNavBackground("background");
      } else {
        setNavBackground("transparent");
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section className="">
      <HeaderNavbar
        setScroll={setScroll}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        navBackground={navBackground}
      />
      <div
        className="relative lg:absolute w-full h-[30vh] lg:h-screen overflow-y-hidden flex flex-col transition-all duration-200 brightness-[70%] blur-[0px]"
        ref={divRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <img
          src="/1.jpeg"
          alt="Image"
          className="h-full lg:h-screen object-cover"
        />
        <img
          src="/2.jpg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
        <img
          src="/3.jpg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
        <img
          src="/4.jpeg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
        <img
          src="/5.jpg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
        <img
          src="/6.jpeg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
        <img
          src="/7.jpg"
          alt="Image"
          className="hidden lg:block lg:h-screen h-full object-cover"
        />
      </div>
      <header className="relative h-[50vh] lg:h-screen w-full z-20 flex items-center justify-center bg-background/30">
        <div
          className="absolute top-1/2 transform -translate-y-1/2 p-4 flex flex-col items-center text-white transition-all duration-200 rounded-lg py-7 px-10"
          style={{
            left: openMenu ? "30%" : "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-center flex flex-col">
            <span
              className={`text-lg md:text-5xl mb-1 transition-transform duration-200 ${
                openMenu ? "-translate-x-[157px]" : "translate-x-0"
              }`}
            >
              London School of Economics
            </span>
            <span className="text-lg md:text-7xl text-nowrap">
              Business & Investment Group
            </span>
          </h1>
          <p
            className={`text-base md:text-2xl mt-3 transition-transform duration-200 ${
              openMenu ? "-translate-x-[225px]" : "translate-x-0"
            }`}
          >
            Europe's premier finance and business society
          </p>
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            <button
              className={`mt-4 px-8 py-4 text-3xl rounded border-2 border-white/5 bg-background text-white font-bold md:text-xl transition-all duration-200 ${
                openMenu ? "-translate-x-[310px]" : "translate-x-0"
              }`}
            >
              BECOME A MEMBER
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
