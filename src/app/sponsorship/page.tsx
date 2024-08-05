import React from "react";
import SponsorshipTable from "../../Components/SponsorshipTable";
import packages from "./packages.json";
import { fetchPackages } from "../../Database/database";
import { PackagesInterface } from "@/Types/types";
import Navbar from "@/Components/Navbar";

const Sponsorship = async () => {
  // const packages = await fetchPackages() || { prices: {}, items: [] } as PackagesInterface;
  return (
    <main className="bg-white">
      <Navbar />
      <header className="px-4 md:px-10 lg:px-20 xl:px-32 pt-40 pb-10">
        <h1 className="text-3xl lg:text-6xl font-bold mb-8 text-center">
          Sponsorship
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-left">
          Sponsorship Activities
        </h2>
        <div className="flex flex-col lg:flex-row mx-auto items-center gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  Speaking Events
                </h2>
                <p>Host speaker events with company members for LSE students</p>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  Networking Events
                </h2>
                <p>Events for sponsors to meet students at UCL</p>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">CV Pool</h2>
                <p>
                  Your recruitment team receives CV's for each sponsored event
                </p>
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  Diversity Initiatives
                </h2>
                <p>Utilise our diversity initiatives in your SEO recruitment</p>
              </div>
            </div>
            <button className="bg-black text-fontColor px-4 py-2 rounded-md mt-5">
              Contact Our Team
            </button>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <div className="w-full lg:w-[600px] aspect-video bg-black"></div>
          </div>
        </div>
      </header>
      <section className="bg-background text-white pt-20 pb-10">
        <h2 className="text-3xl lg:text-6xl font-bold text-center mb-2">
          Sponsorship Packages
        </h2>
        <p className="text-center text-lg">
          Please contact us for more information
        </p>
        <SponsorshipTable packages={packages} />
      </section>
    </main>
  );
};

export default Sponsorship;
