import Link from "next/link";
import Socials from "./Components/Socials";
import Sponsor from "./Components/Sponsor";
import Speaker from "./Components/Speaker";
export default function Home() {
  const sponsors = [
    {
      name: "Goldman Sachs",
      summary: "A leading global investment bank and financial services company.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1024px-Goldman_Sachs.svg.png"
    },
    {
      name: "Morgan Stanley",
      summary: "A multinational investment bank and financial services company.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg"
    },
    {
      name: "J.P. Morgan",
      summary: "A multinational investment bank and financial services company.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg"
    },
    {
      name: "Citigroup",
      summary: "A multinational investment bank and financial services corporation.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg"
    },
    {
      name: "Bank of America",
      summary: "A multinational banking and financial services corporation.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg"
    },
    {
      name: "UBS",
      summary: "A Swiss multinational investment bank and financial services company.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg"
    }
  ];

  const pastSpeakers = [
    {
      name: "Speaker 1",
      topic: "Topic 1",
      date: "Date 1"
    },
    {
      name: "Speaker 2",
      topic: "Topic 2",
      date: "Date 2"
    },
    {
      name: "Speaker 3",
      topic: "Topic 3",
      date: "Date 3"
    },
    {
      name: "Speaker 4",
      topic: "Topic 4",
      date: "Date 4"
    },
    {
      name: "Speaker 5",
      topic: "Topic 5",
      date: "Date 5"
    },
    {
      name: "Speaker 6",
      topic: "Topic 6",
      date: "Date 6"
    },
    {
      name: "Speaker 7",
      topic: "Topic 7",
      date: "Date 7"
    },
    {
      name: "Speaker 8",
      topic: "Topic 8",
      date: "Date 8"
    },
    {
      name: "Speaker 9",
      topic: "Topic 9",
      date: "Date 9"
    },
    {
      name: "Speaker 10",
      topic: "Topic 10",
      date: "Date 10"
    }
  ];
  return (
    <main className="">
      <header className="p-20 flex pb-40">
        <div className="flex-[0_0_50%]">
          <h1 className="text-5xl font-bold flex flex-col">
            <span className="text-3xl">London School of Economics</span>
            <span className="text-5xl">Business & Investment Group</span>
          </h1>
          <div className="w-3/4">
            <p className="mt-4 text-2xl">Europe's premier finance and business society</p>
            <p>We partner with industry giants to provide career insights and connect talented LSE students with opportunities. Our events, including keynotes and panel discussions, equip members with essential skills for their careers.</p>
            <div className="ml-1">
              <Socials />
            </div>
          </div>
          <Link href="https://www.lsesu.com/communities/societies/group/big/"><button className="mt-4 px-4 py-2 rounded border-2 border-black">Join Us</button></Link>
        </div>
        <div className="flex-[0_0_50%]">
        </div>
      </header>
      <section className="bg-black text-white py-10">
        <h1 className="text-5xl text-bold text-center">Past Speakers</h1>
        <div className="my-20 px-80">
          <div className="flex overflow-x-scroll gap-10">
            {pastSpeakers.map((speaker, idx) => <Speaker name={speaker.name} topic={speaker.topic} date={speaker.date} key={idx} />)}
          </div>
        </div>
      </section>
      <section className="py-10">
        <h1 className="text-5xl text-bold text-center">Top Sponsors</h1>
        <div className="grid grid-cols-3 px-80 py-10">
          {sponsors.map((sponsor, idx) => <Sponsor logo={sponsor.logo} summary={sponsor.summary} />)}
        </div>
      </section>

    </main>
  );
}
