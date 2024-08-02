import Link from "next/link";
import Sponsor from "../Components/Sponsor";
import Logo from "../Components/Logo";
import Benefit from "../Components/Benefit";
import { fetchPastSpeakers } from "../Database/database";
import { fetchSponsors } from "../Database/database";
import SpeakerShowcase from "@/Components/SpeakerShowcase";
import Header from "@/Components/Header";
import "./globals.css";

export default async function Home() {
  const { showcaseSpeakers } = await fetchPastSpeakers();
  const sponsors = await fetchSponsors();

  return (
    <main>
      <Header />
      <SpeakerShowcase showcaseSpeakers={showcaseSpeakers} />
      <section className="bg-gray-900 pt-20 pb-10 text-white">
        <h1 className="text-7xl text-bold text-center">Past Sponsors</h1>
        <div className="px-80 py-10">
          <div className="grid grid-cols-3">
            {sponsors.map((sponsor, idx) => (
              <Sponsor
                logo={sponsor.logo}
                summary={sponsor.summary}
                key={idx}
              />
            ))}
          </div>
          <Link href="/sponsors">
            <p className="mt-5 underline text-xl">See All Sponsors</p>
          </Link>
        </div>
      </section>

      <section className="text-white pt-20 pb-10">
        <h1 className="text-7xl text-bold text-center">Membership Benefits</h1>
        <div className="relative w-[50%] mx-auto grid grid-cols-2 place-items-center mt-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <Logo />
          </div>
          <Benefit title="Benefit 1" description="Description of Benefit 1" />
          <Benefit title="Benefit 2" description="Description of Benefit 2" />
          <Benefit title="Benefit 3" description="Description of Benefit 3" />
          <Benefit title="Benefit 4" description="Description of Benefit 4" />
        </div>
        <div>
          <div className="text-center mt-5">
            <p className="text-xl">
              If you want to learn more about membership benefits, get in touch
            </p>
            <button className="mt-4 px-4 py-2 rounded border-2 border-white">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
