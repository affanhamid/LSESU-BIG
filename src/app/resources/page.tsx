import React from "react";
import { Navbar } from "@/Components";

const Resources = () => {
  return (
    <main>
      <Navbar isBlueBackground={true} />
      <section className="pt-72 bg-white">
        <h1 className="text-3xl text-center pb-20">
          This part of the website is currently under development. In the
          future, it will feature all the free resources of BIG{" "}
        </h1>
      </section>
    </main>
  );
};

export default Resources;
