import Link from "next/link";
import logos from "@/Database/data/logos.json";
import MembershipBenefits from "../Components/MembershipBenefits";
// import { fetchPastSpeakers } from "../Database/database";
import Speakers from "@/Database/data/speakers.json"
import { fetchSponsors } from "../Database/database";
import SpeakerShowcase from "@/Components/SpeakerShowcase";
import Header from "@/Components/Header";
import "./globals.css";
import MediaLogo from "@/Components/MediaLogo";
import Features from "@/Components/Features";
import Numbers from "@/Components/Numbers";
import Gallery from "@/Components/Gallery";
import { fetchGallery } from "@/Database/database";
import Sponsors from "@/Components/Sponsors";

export default async function Home() {
  // const { showcaseSpeakers } = await fetchPastSpeakers();
  const showcaseSpeakers = Speakers["images"]
  const sponsors = await fetchSponsors();
  const events = await fetchGallery();

  const shuffle = (array: Array<string>) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  return (
    <main>
      <Header />
      <section className="pt-60 md:py-10 lg:py-20 xl:py-32 bg-white">
        <Numbers />
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 mt-32">
          What we do
        </h1>
        <Features />
      </section>
      <SpeakerShowcase showcaseSpeakers={showcaseSpeakers} />
      <Sponsors sponsors={sponsors} />
      <MembershipBenefits />
      <section className="bg-white pt-32 pb-40">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Alumni Destinations
        </h1>
        <div className="">
          <div className="grid mm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center mx-auto w-max gap-4">
            {shuffle(logos["logos"]).map((icon, idx) => (
              <MediaLogo icon={icon} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <Gallery events={events} />
    </main>
  );
}
