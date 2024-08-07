import { fetchMembers } from "../../Database/database";
import Navbar from "@/Components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Member = ({
  imageLink,
  name,
  role,
  linkedin,
}: {
  imageLink: string;
  name: string;
  role: string;
  linkedin: string;
}) => {
  return (
    <div className="px-6 my-4 flex flex-col items-center rounded-lg overflow-hidden text-black">
      <img
        src={imageLink}
        alt={name}
        className="rounded-full w-48 h-48 object-cover shadow-lg"
      />
      <div className="flex flex-col py-4 items-center">
        <p className="text-xl lg:text-2xl flex items-center gap-2 justify-center font-semibold">
          {name}
          <Link
            href={linkedin}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black hover:text-gray-700 transition-colors duration-200" />
          </Link>
        </p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const AboutUs = async () => {
  const { execMembers, heads } = await fetchMembers();
  return (
    <main className="bg-white">
      <Navbar />
      <header className="relative pb-5">
        <img
          src="../2.jpg"
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Our Committee
        </h1>
      </header>
      <section className="pt-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center my-10">
          Executive Members
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="flex-col justify-center flex-wrap gap-10">
          {execMembers && execMembers.length > 0 && (
            <>
              <div className="flex gap-32 justify-center">
                <Member
                  imageLink={execMembers[0].imageLink}
                  name={execMembers[0].name}
                  role={execMembers[0].role}
                  linkedin={execMembers[0].linkedin}
                />
                <Member
                  imageLink={execMembers[1].imageLink}
                  name={execMembers[1].name}
                  role={execMembers[1].role}
                  linkedin={execMembers[1].linkedin}
                />
              </div>
              <div className="flex gap-32 justify-center">
                <Member
                  imageLink={execMembers[2].imageLink}
                  name={execMembers[2].name}
                  role={execMembers[2].role}
                  linkedin={execMembers[2].linkedin}
                />
              </div>
              <div className="flex gap-32 justify-center">
                <Member
                  imageLink={execMembers[3].imageLink}
                  name={execMembers[3].name}
                  role={execMembers[3].role}
                  linkedin={execMembers[3].linkedin}
                />
                <Member
                  imageLink={execMembers[4].imageLink}
                  name={execMembers[4].name}
                  role={execMembers[4].role}
                  linkedin={execMembers[4].linkedin}
                />
              </div>
              <div className="flex gap-32 justify-center">
                <Member
                  imageLink={execMembers[5].imageLink}
                  name={execMembers[5].name}
                  role={execMembers[5].role}
                  linkedin={execMembers[5].linkedin}
                />
                <Member
                  imageLink={execMembers[6].imageLink}
                  name={execMembers[6].name}
                  role={execMembers[6].role}
                  linkedin={execMembers[6].linkedin}
                />
                <Member
                  imageLink={execMembers[7].imageLink}
                  name={execMembers[7].name}
                  role={execMembers[7].role}
                  linkedin={execMembers[7].linkedin}
                />
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-20">
          Division Heads
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5 pb-20 justify-center">
          {heads &&
            heads.map((member, idx) => (
              <Member
                key={idx}
                name={member.name}
                role={member.role}
                imageLink={member.imageLink}
                linkedin={member.linkedin}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
