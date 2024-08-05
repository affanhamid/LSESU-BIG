import Link from "next/link";
import Sponsor from "../Components/Sponsor";
import Logo from "../Components/Logo";
import Benefit from "../Components/Benefit";
import { fetchPastSpeakers } from "../Database/database";
import { fetchSponsors } from "../Database/database";
import SpeakerShowcase from "@/Components/SpeakerShowcase";
import Header from "@/Components/Header";
import "./globals.css";
import MediaLogo from "@/Components/MediaLogo";
import Features from "@/Components/Features";

export default async function Home() {
  const { showcaseSpeakers } = await fetchPastSpeakers();
  const sponsors = await fetchSponsors();

  return (
    <main>
      <Header />
      <section className="py-32 bg-white">
        <h1 className="text-3xl lg:text-4xl font-bold text-left mb-10 pl-80">
          What we do
        </h1>
        <Features />
      </section>
      <SpeakerShowcase showcaseSpeakers={showcaseSpeakers} />

      <section className="bg-gray-900 py-32 text-white">
        <h1 className="text-3xl lg:text-4xl font-bold text-left mb-10 pl-80">
          Past Sponsors
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
          <Link href="/sponsors">
            <p className="mt-5 underline text-xl text-center lg:text-left">
              See All Sponsors
            </p>
          </Link>
        </div>
      </section>

      <section className="text-white pt-32 pb-32">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Membership Benefits
        </h1>
        <div className="relative w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <Logo />
          </div>
          <Benefit title="Benefit 1" description="Description of Benefit 1" />
          <Benefit title="Benefit 2" description="Description of Benefit 2" />
          <Benefit title="Benefit 3" description="Description of Benefit 3" />
          <Benefit title="Benefit 4" description="Description of Benefit 4" />
        </div>
        <div className="text-center mt-20">
          <p className="text-xl">
            If you want to learn more about membership benefits, get in touch
          </p>
          <button className="mt-4 px-4 py-2 rounded border-2 border-white">
            Get In Touch
          </button>
        </div>
      </section>
      <section className="bg-white pt-32 pb-40">
        <h1 className="text-3xl lg:text-4xl font-bold text-left mb-10 pl-80">
          Press Coverage
        </h1>
        <div className="flex gap-12 justify-center">
          {['A', 'B', 'C', 'D', 'E'].map((icon, idx) => <MediaLogo icon={icon} key={idx} />)}
        </div>
      </section>
    </main>
  );
}
