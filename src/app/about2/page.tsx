import Person from "../../Components/Person";
import { fetchMembers } from "../../Database/database";
import Navbar from "@/Components/Navbar";

const Temp = ({
  imageLink,
  name,
  role,
}: {
  imageLink: any;
  name: any;
  role: any;
}) => {
  return (
    <div className="w-40 mx-20 my-1 flex flex-col rounded-lg overflow-hidden text-black">
      <img src={imageLink} alt="" className="rounded-full" />
      <div className="flex flex-col py-2">
        <p className="text-2xl">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

const AboutUs = async () => {
  const { execMembers, heads } = await fetchMembers();
  return (
    <main className="text-center bg-white">
      <Navbar />
      <header className="py-10 px-4 md:px-20 lg:px-32 xl:px-48 pt-40 pb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center my-10">
          Our Committee
        </h1>
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
      {/* <section>
        <div className="relative bg-background text-fontColor flex flex-col lg:flex-row h-auto lg:h-[80vh] py-20 px-5">
          <div className="absolute h-full w-1/2 flex items-center justify-center top-0 left-0">
            <h2 className="text-2xl lg:text-3xl font-bold">
              The Executive Team
            </h2>
          </div>
          <div className="w-full h-full lg:h-auto pl-[50%] overflow-y-auto lg:overflow-y-auto z-30">
            {execMembers &&
              execMembers.map((member, idx) => (
                <Person
                  name={member.name}
                  role={member.role}
                  job={member.job}
                  image={member.imageLink}
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
        <div className="relative flex flex-col lg:flex-row h-auto lg:h-[80vh] py-20 px-5 ">
          <div className="w-full pr-[50%] h-full lg:h-auto overflow-y-auto lg:overflow-y-auto z-30">
            {heads &&
              heads.map((member, idx) => (
                <Person
                  name={member.name}
                  role={member.role}
                  job={member.job}
                  image={member.imageLink}
                  key={idx}
                  email={member.email}
                  linkedin={member.linkedin}
                  reverse={true}
                />
              ))}
          </div>
          <div className="absolute h-full w-1/2 flex items-center justify-center top-0 right-0">
            <h2 className="text-2xl lg:text-3xl font-bold">Division Heads</h2>
          </div>
        </div>
      </section> */}
      <section className="flex justify-center w-full">
        {execMembers && (
          <div>
            <div className="flex justify-center">
              <Temp
                imageLink={execMembers[0].imageLink}
                name={execMembers[0].name}
                role={execMembers[0].role}
              />
              <Temp
                imageLink={execMembers[1].imageLink}
                name={execMembers[1].name}
                role={execMembers[1].role}
              />
            </div>
            <div className="flex justify-center">
              <Temp
                imageLink={execMembers[2].imageLink}
                name={execMembers[2].name}
                role={execMembers[2].role}
              />
            </div>
            <div className="flex justify-center">
              <Temp
                imageLink={execMembers[3].imageLink}
                name={execMembers[3].name}
                role={execMembers[3].role}
              />
              <Temp
                imageLink={execMembers[4].imageLink}
                name={execMembers[4].name}
                role={execMembers[4].role}
              />
            </div>
            <div className="flex justify-center">
              <Temp
                imageLink={execMembers[5].imageLink}
                name={execMembers[5].name}
                role={execMembers[5].role}
              />
              <Temp
                imageLink={execMembers[6].imageLink}
                name={execMembers[6].name}
                role={execMembers[6].role}
              />
              <Temp
                imageLink={execMembers[7].imageLink}
                name={execMembers[7].name}
                role={execMembers[7].role}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AboutUs;
