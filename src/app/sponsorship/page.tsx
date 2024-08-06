import React from "react";
import Navbar from "@/Components/Navbar";

const Package = ({ type }: { type: any }) => {
  return (
    <div className="aspect-[2/3] h-1/2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {type}
    </div>
  );
};

const Sponsorship = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <header className="px-4 md:px-10 lg:px-20 xl:px-32 pt-40 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Sponsorship
        </h1>
      </header>
      <section>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Packages
        </h1>
        <div className="relative w-full h-screen">
          <Package type={"Bronze"} />
          <Package type={"Silver"} />
          <Package type={"Gold"} />
          <Package type={"Platinum"} />
        </div>
      </section>
    </main>
  );
};

export default Sponsorship;
