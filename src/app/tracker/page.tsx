import React from "react";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import trackerImage from "../../../public/trackerImage.jpg";
import Sheet from "./Sheet";

const Tracker = async () => {
  return (
    <main className="">
      <Navbar />
      <header className="relative">
        <Navbar />
        <Image
          src={trackerImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          BIG Tracker
        </h1>
      </header>
      <Sheet />
    </main>
  );
};

export default Tracker;
