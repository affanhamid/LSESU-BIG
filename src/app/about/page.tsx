import { fetchMembers } from "../../Database/database";
import Navbar from "@/Components/Navbar";
import { Member } from "@/Components/Member";
import { Sector } from "@/Components/Sector";

const AboutUs = async () => {
  const { execMembers, heads } = await fetchMembers();
  const roles = [
    "Banking",
    "Alternatives",
    "Markets",
    "Mentorship",
    "Technology",
    "Entrepreneurship",
    "Socials",
    "Marketing",
    "Consulting",
    "Law"
  ];
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
          Executive Comittee
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="flex-col justify-center flex-wrap gap-10">
          {execMembers && execMembers.length > 0 && (
            <>
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                <Member
                  imageLink={execMembers[0].imageLink}
                  name={execMembers[0].name}
                  role={execMembers[0].role}
                  linkedin={execMembers[0].linkedin}
                />
                <Member
                  imageLink={execMembers[2].imageLink}
                  name={execMembers[2].name}
                  role={execMembers[2].role}
                  linkedin={execMembers[2].linkedin}
                />
                <Member
                  imageLink={execMembers[1].imageLink}
                  name={execMembers[1].name}
                  role={execMembers[1].role}
                  linkedin={execMembers[1].linkedin}
                />
              </div>
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
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
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
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
              </div>
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                <Member
                  imageLink={execMembers[7].imageLink}
                  name={execMembers[7].name}
                  role={execMembers[7].role}
                  linkedin={execMembers[7].linkedin}
                />
                <Member
                  imageLink={execMembers[8].imageLink}
                  name={execMembers[8].name}
                  role={execMembers[8].role}
                  linkedin={execMembers[8].linkedin}
                />
                <Member
                  imageLink={execMembers[9].imageLink}
                  name={execMembers[9].name}
                  role={execMembers[9].role}
                  linkedin={execMembers[9].linkedin}
                />
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-20 mb-10">
          Division Heads
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5 pb-20 justify-center">
          {heads && (
            <div className="grid grid-cols-1 lg:grid-cols-2 w-screen gap-2 px-10 xl:px-20">
              {roles &&
                roles.map((role, idx) => (
                  <Sector
                    sectorMembers={heads.filter((head) => head.role === role)}
                    title={role}
                    key={idx}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
