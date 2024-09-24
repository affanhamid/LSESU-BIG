import React from "react";
import Navbar from "@/Components/Navbar";
import Sheet from "./Sheet";
import { Footer } from "@/Components";

const Tracker = async () => {
  return (
    <main className="">
      <header className="pt-5 fixed top-0 bg-background w-full">
        <Navbar />
        <h1 className="text-4xl lg:text-5xl h-[7rem] md:h-max font-bold text-center my-10 z-60 text-white">
          <span className="hidden md:inline">BIG Tracker</span>
        </h1>
      </header>
      <div className="mt-56 md:mt-40">
        <h1 className="text-background text-lg mb-0 bg-white ml:hidden">
          For the best viewing experience for the tracker, please use a desktop
          browser.
        </h1>
        <Sheet />
      </div>
      <Footer />
    </main>
  );
};

export default Tracker;
