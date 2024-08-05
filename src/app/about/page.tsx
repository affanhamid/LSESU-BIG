import Person from "../../Components/Person";
import { fetchMembers } from "../../Database/database";
import Navbar from "@/Components/Navbar";

const AboutUs = async () => {
  const { execMembers, heads } = await fetchMembers();
  return (
    <main className="text-center bg-white">
      <Navbar />
      <header className="py-10 px-4 md:px-20 lg:px-32 xl:px-48 pt-40 pb-10">
        <h2 className="text-3xl lg:text-6xl font-bold mb-4">Our Committee</h2>
        <div className="mt-10">
          <div className="text-left flex flex-col leading-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              President's Message
            </h2>
            <p className="mb-4 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              aut veritatis quo ipsam asperiores id velit, optio vitae est fuga
              amet molestiae quas repudiandae ea perferendis minima aspernatur?
              Voluptate illum corporis numquam repellat facere, rem illo. Nobis
              laudantium, ipsam dolores fugiat beatae error reiciendis
              recusandae in corrupti eius ullam fuga repellat molestias rem,
              delectus excepturi cupiditate doloribus autem ex numquam. Omnis
              reiciendis fugit deserunt earum. Alias consequatur voluptates
              nulla totam minus quam vitae error placeat, eius necessitatibus
              animi natus vero impedit modi, fugiat, aliquam sunt fuga sit id
              dolore. Porro sequi unde quam ipsa minus veritatis quis ipsam
              neque ad?
            </p>
            <p className="text-right">
              {execMembers != undefined
                ? execMembers.find((member) => member.role === "President")
                    ?.name
                : ""}
            </p>
            <p className="text-right">
              {new Date().getFullYear()}/
              {(new Date().getFullYear() + 1).toString().slice(2, 4)} President
            </p>
          </div>
        </div>
      </header>
      <section>
        <div className="bg-background text-fontColor flex flex-col lg:flex-row h-auto lg:h-[80vh] py-20 px-5">
          <div className="flex-[0_0_100%] lg:flex-[0_0_45%] flex items-center pl-4 lg:pl-40 mb-10 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold">
              The Executive Team
            </h2>
          </div>
          <div className="flex-[0_0_100%] lg:flex-[0_0_55%] h-full lg:h-auto overflow-y-scroll lg:overflow-y-auto">
            {execMembers &&
              execMembers.map((member, idx) => (
                <Person
                  name={member.name}
                  role={member.role}
                  job={member.job}
                  image=""
                  key={idx}
                  email={member.email}
                  linkedin={member.linkedin}
                  reverse={false}
                />
              ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row h-auto lg:h-[80vh] py-20 px-5">
          <div className="flex-[0_0_100%] lg:flex-[0_0_55%] h-full lg:h-auto overflow-y-scroll lg:overflow-y-auto">
            {heads &&
              heads.map((member, idx) => (
                <Person
                  name={member.name}
                  role={member.role}
                  job={member.job}
                  image=""
                  key={idx}
                  email={member.email}
                  linkedin={member.linkedin}
                  reverse={true}
                />
              ))}
          </div>
          <div className="flex-[0_0_100%] lg:flex-[0_0_45%] flex items-center pl-4 lg:pl-40 mt-10 lg:mt-0">
            <h2 className="text-2xl lg:text-3xl font-bold">
              The Heads of Divisions
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
