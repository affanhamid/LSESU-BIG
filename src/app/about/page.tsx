"use client";
import { Sector } from "@/app/about/Sector";
import { team } from "@/Database";
import { HeadsType, RoleType, ExecutiveMembersType } from "@/Types";
import YearDropdown from "@/Components/YearDropdown";
import Football from "@/Components/Football";
import { useState } from "react";
import Image from "next/image";
import aboutUsImage from "../../../public/about_us.jpg";

const AboutUs = () => {
  const [year, setYear] = useState("2024/25");

  return (
    <main className="bg-white">
      <header className="relative pb-5">
        <Image
          src={aboutUsImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Our Committee
        </h1>
      </header>

      <section className="pt-10">
        <div className="max-w-7xl mx-auto relative flex justify-center items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-center my-10">
            Executive Committee
          </h2>
          <div className="absolute right-0">
            <YearDropdown year={year} setYear={setYear} />
          </div>
        </div>

        <hr className="border-gray-300 my-4" />
        <Football
          members={
            team[year as keyof typeof team][
              "executiveMembers"
            ] as ExecutiveMembersType
          }
          pattern={team[year as keyof typeof team]["pattern"] as number[]}
        />
      </section>
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-10 mb-10">
          Division Heads
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5 pb-20 justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-screen gap-2 px-10 xl:px-20">
            {Object.keys(
              team[year as keyof typeof team]["heads"] as HeadsType
            ).map(
              (role, idx: number) =>
                team[year as keyof typeof team]["heads"][role as RoleType]
                  .length > 0 && (
                  <Sector
                    sectorMembers={
                      team[year as keyof typeof team]["heads"][role as RoleType]
                    }
                    title={role}
                    key={idx}
                  />
                )
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
