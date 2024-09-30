import React from "react";
import { Footer, Navbar } from "@/Components";
import Image from "next/image";
import resourcesImage from "../../../public/resources.jpeg";
import Resource from "./Resource";
import { resources } from "../../Database";
import { ResourceInterface } from "@/Types";

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
          Find our industry-leading resource packs below (More to come soon!)
        </p>
        <div className="w-full px-4 max-w-7xl mx-auto"> {/* max-w-7xl added */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6"> {/* Reduced gap */}
            {(resources as { resources: ResourceInterface[] }).resources.map(
              (resource, index) => {
                return (
                  <Resource
                    key={index}
                    link={resource.link}
                    thumbnail={resource.thumbnail}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
