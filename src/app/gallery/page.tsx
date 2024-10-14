import React from "react";
import { Gallery } from "@/Components";
import { gallery } from "@/Database";
import { Navbar } from "@/Components";
import Image from "next/image";
import { galleryImage } from "../../../public";

const page = () => {
  return (
    <main className="bg-white">
      <header className="relative pb-5">
        <Navbar />
        <Image
          src={galleryImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Gallery
        </h1>
      </header>
      <section className="bg-white text-black border-b border-white m-0 py-0">
        <Gallery events={gallery.events} scrollToggle={600} />
      </section>
    </main>
  );
};

export default page;
