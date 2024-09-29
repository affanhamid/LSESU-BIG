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
          alt="Resources Background"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          RESOURCES
        </h1>
      </header>
      <section className="py-16 bg-white flex flex-col items-center justify-center">
        <p className="text-2xl mb-10 px-4 sm:px-96 text-center">
          Find our industry-leading resource packs below ( More to come soon! )
        </p>
        <div className="w-full overflow-x-scroll sm:overflow-auto">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-0 whitespace-nowrap sm:whitespace-normal">
            <Resource
              link={
                "https://utfs.io/f/2JsPsN0kG4dUOi59vnh5ZHjPUWw0N97KzyleQfmGRcCFEvXr"
              }
              thumbnail="https://utfs.io/f/2JsPsN0kG4dUNk99Rjoy9s7WdzcfkhqYZ6iSbgAPtL1FlMUa"
            />
            <Resource
              link={
                "https://drive.google.com/file/d/1JW-xAENoNT0THhmuP-SyW4CLAIi--is0/view"
              }
              thumbnail="https://utfs.io/f/2JsPsN0kG4dUE6WK3wR2ENeIDxX4bQRMCta3qGyfKuPJj09g"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
