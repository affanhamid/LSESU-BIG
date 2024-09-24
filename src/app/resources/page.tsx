import React from "react";
import { Footer, Navbar } from "@/Components";
import Image from "next/image";
import resourcesImage from "../../../public/resources.jpeg";
import Resource from "./Resource";

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
      <section className="py-16 bg-white flex flex-col items-center justify-center">
        <p className="text-2xl mb-10 px-96 text-center">
          Find our industry-leading resource packs below
        </p>
        <div className="grid grid-cols-3">
          <Resource
            link={
              "https://drive.google.com/file/d/1jRi64iy4rxNJGVBr14gOYgQYJG_Lc3jq/view"
            }
            thumbnail="https://utfs.io/f/2JsPsN0kG4dU9VQdwcA3W7i1mOzhEvuNlAg2w3qUxLCXodBa"
          />
          <Resource
            link={
              "https://lyrical-twig-2ac.notion.site/I-Got-Nine-Spring-Week-Internship-Offers-Here-s-How-You-Can-Too-ab6d515020dc4a14818c6f6cc2e827b8"
            }
            thumbnail="https://utfs.io/f/2JsPsN0kG4dUvh2OR6AwRUnV7IM5Wq9YxNftpyAX36QdlHzL"
          />
          <Resource
            link={
              "https://drive.google.com/file/d/1JW-xAENoNT0THhmuP-SyW4CLAIi--is0/view"
            }
            thumbnail="https://utfs.io/f/2JsPsN0kG4dUE6WK3wR2ENeIDxX4bQRMCta3qGyfKuPJj09g"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
