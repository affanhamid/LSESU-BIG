"use client";
import { useState, useRef, useEffect } from "react";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  homeImage,
  aboutUsImage,
  eventsImage,
  mentorshipImage,
} from "../../public";
import Image from "next/image";

type MenuListProps = {
  href: string;
  name: string;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
};

const MenuList = ({
  href,
  name,
  setOpenMenu,
  setScroll,
  idx,
}: MenuListProps) => {
  return (
    <Link
      href={href}
      onClick={() => setTimeout(() => setOpenMenu(false), 400)}
      className="px-20 py-7 md:py-10 hover:bg-white hover:text-background font-bold"
      onMouseEnter={() => setScroll(idx)}
    >
      {name}
    </Link>
  );
};

const Menu = ({
  setScroll,
}: {
  setScroll: React.Dispatch<React.SetStateAction<number>>;
}) => {
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
          {[
            ["/", "Home"],
            ["/about", "About Us"],
            ["/events", "Events"],
            ["/mentorship", "Mentorship"],
            ["/resources", "Resources"],
            ["/tracker", "BIG Tracker"],
          ].map((item, idx) => (
            <MenuList
              href={item[0]}
              name={item[1]}
              setOpenMenu={setOpenMenu}
              setScroll={setScroll}
              idx={idx}
            />
          ))}
        </ul>
      </div>
      <IoMenu
        className="md:ml-10 cursor-pointer text-4xl xl:text-5xl"
        onClick={() => setOpenMenu(true)}
      />
    </aside>
  );
};

const HeaderNavbar = ({
  setScroll,
}: {
  setScroll: React.Dispatch<React.SetStateAction<number>>;
}) => {
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
      className={`w-full z-40 fixed justify-between top-0 text-fontColor bg-${navBackground} flex flex-col md:flex-row py-10 px-20 items-center z-30`}
    >
      <Logo />
      <div className="flex gap-4 items-center text-4xl">
        <Socials />

        <button className="px-3 py-2 text-base hidden md:block">
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            Join Us
          </Link>
        </button>
        <Menu setScroll={setScroll} />
      </div>
    </div>
  );
};

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(window.screen.height);
    if (divRef.current) {
      divRef.current.scrollTop = window.innerHeight * scroll;
    }
  }, [scroll]);

  return (
    <>
      <HeaderNavbar setScroll={setScroll} />
      <div
        className="absolute pt-0 w-screen h-max md:h-screen overflow-y-hidden flex flex-col transition-all duration-200 brightness-[70%]"
        ref={divRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {[homeImage, aboutUsImage, eventsImage, mentorshipImage].map(
          (image, idx) => (
            <Image
              key={idx}
              src={image}
              alt="Image"
              className={`${
                idx !== 0 ? "hidden md:block" : ""
              } w-screen h-52 md:h-screen object-cover flex-shrink-0`}
              width={1280}
              height={720}
            />
          )
        )}
      </div>
      <header className="relative h-max md:h-screen w-full z-30 flex items-center justify-center bg-background/30">
        <div className="hidden md:flex flex-col items-center text-white rounded-t-lg py-7 px-10 ">
          <h1 className="text-center flex flex-col mb-5">
            <span className="text-5xl">London School of Economics</span>
            <span className="text-7xl">Business & Investment Group</span>
          </h1>
          <p className="text-center text-lg mm:text-2xl mm:mt-3">
            Europe's premier finance and business society
          </p>
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            <button className="px-8 py-4 text-xl mt-3">BECOME A MEMBER</button>
          </Link>
        </div>
      </header>
      <div className="mt-52 md:hidden flex flex-col items-center text-background rounded-t-lg py-7 px-10 bg-white">
        <h1 className="text-center flex flex-col mb-5">
          <span className="text-xl mm:text-2xl ml:text-4xl mb-1 ">
            London School of Economics
          </span>
          <span className="text-xl mm:text-3xl ml:text-5xl">
            Business & Investment Group
          </span>
        </h1>
        <p className="text-center text-lg mm:text-2xl mm:mt-3">
          Europe's premier finance and business society
        </p>
        <Link href="https://www.lsesu.com/communities/societies/group/big/">
          <button className="px-3 py-2 text-lg mm:px-5 mm:py-4 mm:text-xl mt-3">
            BECOME A MEMBER
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
