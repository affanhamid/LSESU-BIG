import Link from "next/link";
import "./globals.css";
import { speakers, sponsors, gallery, logos } from "@/Database";
import {
  FaUsers,
  FaCalendarAlt,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";

import {
  SpeakerShowcase,
  MediaLogo,
  Features,
  Number,
  Gallery,
  Sponsors,
  MembershipBenefits,
} from "@/Components";

export default async function Home() {
  return (
    <main>
      <div className="absolute ml:pt-0 w-screen h-max xl:h-screen overflow-y-hidden flex flex-col transition-all duration-200 brightness-[70%] blur-[0px]">
        <img
          src="https://utfs.io/f/af9f2fdb-cae0-4888-87bf-18ad9a67710b-1d.jpeg"
          alt="Image"
          className="w-screen ml:w-auto ml:h-screen object-cover"
        />
      </div>
      <header className="relative hidden ml:h-screen w-full z-20 ml:flex items-center justify-center bg-background/30">
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-4 flex flex-col items-center text-white transition-all duration-200 rounded-lg py-7 px-10 xl:left-[50%]`}
        >
          <h1 className="text-center flex flex-col">
            <span
              className={`text-2xl md:text-4xl lg:text-5xl mb-1 transition-transform duration-200 md:text-nowrap xl:translate-x-0`}
            >
              London School of Economics
            </span>
            <span className="text-2xl md:text-6xl lg:text-7xl text-nowrap">
              Business & Investment Group
            </span>
          </h1>
          <p
            className={`text-p text-2xl mt-3 transition-transform duration-200 text-center xl:translate-x-0`}
          >
            Europe's premier finance and business society
          </p>
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            <button className="px-5 py-4 text-xl mt-3">BECOME A MEMBER</button>
          </Link>
        </div>
      </header>
      <section className="bg-white">
        <h1>Who we are</h1>
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-1 mm:gap-10 mb-20 w-max  mx-auto">
          <Number
            text="900+ members"
            icon={<FaUsers />}
            description={
              " With the most members in an LSE society, we represent all degree subjects and backgrounds"
            }
          />
          <Number
            text="50+ events"
            icon={<FaCalendarAlt />}
            description={
              "Our countless panel events ensures that there is always something exciting to attend"
            }
          />
          <Number
            text="7,000+ followers"
            icon={<FaUserFriends />}
            description={
              "Our social media presence ensures our members are always up to date with upcoming events"
            }
          />
          <Number
            text="10+ sponsors"
            icon={<FaHandshake />}
            description={
              "Our sponsors bridge the gap between university and industry by providing exclusive networking sessions"
            }
          />
        </div>
        <h1>What we do</h1>
        <Features />
      </section>
      <SpeakerShowcase showcaseSpeakers={speakers.images} />
      <Sponsors sponsors={sponsors.sponsors} />
      <MembershipBenefits />
      <section className="bg-white pt-32 pb-40">
        <h1>Alumni Destinations</h1>
        <div className="">
          <div className="grid mm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center mx-auto w-max gap-4">
            {logos["logos"].map((icon, idx) => (
              <MediaLogo icon={icon} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <Gallery events={gallery.events} />
    </main>
  );
}
