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
        <h1 className="text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          BIG Tracker
        </h1>
      </header>
      <Sheet />
    </main>
  );
};

export default Tracker;
