import React from "react";
import Navbar from "@/Components/Navbar";
import { FaHammer, FaCrown, FaShieldAlt } from "react-icons/fa";
import Sponsor from "@/Components/Sponsor";
import { fetchSponsors } from "@/Database/database";
import Link from "next/link";

const Package = ({ type, icon }: { type: string; icon: React.ReactNode }) => {
  return (
    <div className="w-52 rounded-lg aspect-[7/8] bg-background text-white border border-white/20 flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold">{type}</h2>
    </div>
  );
};

const Activity = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="my-4 text-white rounded-lg bg-background px-10 py-5 w-[30%]">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

const Sponsorship = async () => {
  const sponsors = await fetchSponsors();
  return (
    <main className="bg-white">
      <Navbar />
      <header className="relative pb-5">
        <img
          src="../4.webp"
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Sponsorship
        </h1>
      </header>
      <section className="pb-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Packages
        </h1>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <Package type="Builder" icon={<FaHammer />} />
          <Package type="Leader" icon={<FaCrown />} />
          <Package type="Trustee" icon={<FaShieldAlt />} />
        </div>
        <div className="text-center text-2xl my-10">
          <div>
            Interested in partnering with the largest society at LSE? Contact us
            at{" "}
            <Link href="mailto:lse-big@lse.ac.uk" className="text-blue-700">
              business-investment@lsesu.org
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Sponsored Activities
        </h1>
        <div className="px-4 md:px-10 lg:px-20 flex gap-2 justify-center">
          <Activity
            title="Interactive campus workshops"
            desc="Opportunities to host interactive workshops with LSE members"
          />
          <Activity
            title="Private networking dinners"
            desc="Unique networking and recruitment opportunities in an intimate setting."
          />
          <Activity
            title="Diversity initiatives"
            desc="Dedicated diversity events through our women’s, LGBTQ+ and BAME networks."
          />
        </div>
      </section>
      <section className=" pb-32 bg-white">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Past Sponsors and Partners
        </h1>
        <div className="px-4 md:px-10 lg:px-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sponsors.map((sponsor, idx) => (
              <Sponsor
                logo={sponsor.logo}
                summary={sponsor.summary}
                key={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsorship;
