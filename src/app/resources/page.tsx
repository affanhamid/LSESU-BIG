import React from "react";
import { Navbar } from "@/Components";
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
          Please add some text here to explain what this page is about and what
          these resources are to new users
        </p>
        <div className="grid grid-cols-3">
          <Resource
            link={
              "https://drive.google.com/file/d/1jRi64iy4rxNJGVBr14gOYgQYJG_Lc3jq/view"
            }
            thumbnail="https://utfs.io/f/P5zDMjQIG1bOOR57e0SxHY34lzXkNIJDaoEqw6cpStLMr7VK"
          />
          <Resource
            link={
              "https://drive.google.com/file/d/1JW-xAENoNT0THhmuP-SyW4CLAIi--is0/view"
            }
            thumbnail="https://utfs.io/f/P5zDMjQIG1bONLlzuKReYhZ4MQNs1ILkTjC2mzyi03D87Ovn"
          />
          <Resource link={"#"} />
          <Resource link={"#"} />
          <Resource link={"#"} />
        </div>
      </section>
    </main>
  );
};

export default Resources;
