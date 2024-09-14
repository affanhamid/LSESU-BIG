import React from "react";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import trackerImage from "../../../public/trackerImage.jpg";
import Sheet from "./Sheet";

const Tracker = async () => {
  return (
    <main className="">
      <header className="pt-5 fixed top-0 bg-background w-full">
        <Navbar />
        <h1 className="text-4xl lg:text-5xl h-[7rem] md:h-max font-bold text-center my-10 z-60 text-white">
          <span className="hidden md:inline">BIG Tracker</span>
        </h1>
      </header>
      <div>
        <h1 className="text-background text-lg mt-56 mb-0 bg-white ml:hidden">
          For the best veiwing experience for the tracker, please use a desktop
          browser.
        </h1>
        <Sheet />
      </div>
    </main>
  );
};

export default Tracker;
