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

const Header = () => {
  return (
    <>
      <header className="ms:h-52 mm:h-64 md:h-screen w-full z-20 flex items-center justify-center bg-hero bg-cover bg-center bg-blend-darken bg-black bg-opacity-30">
        <div className="hidden md:flex flex-col items-center text-white rounded-lg py-7 px-10">
          <h1 className="text-center flex flex-col">
            <span className="text-4xl lg:text-5xl mb-1 transition-transform duration-200 md:text-nowrap">
              London School of Economics
            </span>
            <span className="md:text-6xl lg:text-7xl text-nowrap">
              Business & Investment Group
            </span>
          </h1>
          <p className="text-2xl mt-3">
            Europe's premier finance and business society
          </p>
          <Link href="https://www.lsesu.com/communities/societies/group/big/">
            <button className="px-5 py-4 text-xl mt-3">BECOME A MEMBER</button>
          </Link>
        </div>
      </header>
      <div className="md:hidden flex flex-col items-center text-background rounded-t-lg py-7 px-10 bg-white">
        <h1 className="text-center flex flex-col mb-5">
          <span className="text-xl mm:text-2xl ml:text-4xl lg:text-5xl mb-1 ">
            London School of Economics
          </span>
          <span className="text-xl mm:text-3xl ml:text-5xl">
            Business & Investment Group
          </span>
        </h1>
        <p className="text-center text-lg mm:text-2xl mm:mt-3">
          Europe's premier finance and business society
        </p>
        <Link href="https://www.lsesu.com/communities/societies/group/big/">
          <button className="px-3 py-2 text-lg mm:px-5 mm:py-4 mm:text-xl mt-3">
            BECOME A MEMBER
          </button>
        </Link>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-white">
        <h1>Who we are</h1>
        <p className="ml:text-lg md:text-xl px-10 md:px-32 lg:px-80">
          LSESU BIG is a student-run society that aims to bring together
          students from all backgrounds and disciplines to provide guidance into
          the latest career opportunities in finance and business. Our mission
          is to provide a platform for students to learn, grow, and network with
          like-minded individuals.
        </p>
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-1 mm:gap-10 mb-32 w-max mx-auto">
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
      <section className="bg-white">
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
