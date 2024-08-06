import Link from "next/link";
import Sponsor from "../Components/Sponsor";
import Logo from "../Components/Logo";
import MembershipBenefits from "../Components/MembershipBenefits";
import { fetchPastSpeakers } from "../Database/database";
import { fetchSponsors } from "../Database/database";
import SpeakerShowcase from "@/Components/SpeakerShowcase";
import Header from "@/Components/Header";
import "./globals.css";
import MediaLogo from "@/Components/MediaLogo";
import Features from "@/Components/Features";
import Numbers from "@/Components/Numbers";

export default async function Home() {
  const { showcaseSpeakers } = await fetchPastSpeakers();
  const sponsors = await fetchSponsors();

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
      <section className="pb-32 pt-20 bg-white">
        <Numbers />
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          What we do
        </h1>
        <Features />
      </section>
      <SpeakerShowcase showcaseSpeakers={showcaseSpeakers} />

      <section className="py-32 bg-white">
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
          <div className="text-center text-2xl">
            <div>
              Interested in partnering with us? Contact us at{" "}
              <Link href="mailto:lse-big@lse.ac.uk" className="text-blue-700 ">
                business-investment@lsesu.org
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MembershipBenefits />
      <section className="bg-white pt-32 pb-40">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Alumni Destinations
        </h1>
        <div className="w-full">
          <div className="grid grid-cols-4 justify-center mx-auto w-max">
            {shuffle([
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png",
              "https://www.mckinsey.com/~/media/Images/Global/SEOImagePlaceholder.ashx",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Optiver_Logo.svg/1280px-Optiver_Logo.svg.png",
              "https://media.licdn.com/dms/image/D4E0BAQG1ssN1ZeOs3A/company-logo_200_200/0/1688681748905/the_carlyle_group_logo?e=2147483647&v=beta&t=JOcMHA6-L9ZDYulH94gy128AOdeHghYCE0a698YqC-k",
              "https://upload.wikimedia.org/wikipedia/commons/f/f9/Point72logo.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BCG_Corporate_Logo.svg/440px-BCG_Corporate_Logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Citi_logo_March_2023.svg/300px-Citi_logo_March_2023.svg.png",
              "https://media.licdn.com/dms/image/C4E0BAQHM1mo8m_ecGw/company-logo_200_200/0/1678125020983/blackstonegroup_logo?e=2147483647&v=beta&t=yFgyhUGXP-EopN16ZRohR0Nn9yM3uFoTjxeUVU-6V1I",
            ]).map((icon, idx) => (
              <MediaLogo icon={icon} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
