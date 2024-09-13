import React from "react";
import { Navbar } from "@/Components";
import Image from "next/image";
import resourcesImage from "../../../public/resources.jpeg";

const Resources = () => {
  return (
    <main>
      <header className="relative">
        <Navbar />
        <Image
          src={resourcesImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          RESOURCES
        </h1>
      </header>
      <section className="py-32 bg-white">
        <h1 className="text-3xl text-center pb-20">
          This part of the website is currently under development. In the
          future, it will feature all the free resources of BIG{" "}
        </h1>
      </section>
    </main>
  );
};

export default Resources;
