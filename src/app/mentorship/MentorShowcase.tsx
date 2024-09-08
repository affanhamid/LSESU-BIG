"use client";
import Carousel from "../../Components/Carousel";
import { MentorInterface } from "@/Types";

const Mentor = () => {
  return <div className="w-[600px] aspect-[4/3] bg-black"></div>;
};

const MentorShowcase = ({ mentors }: { mentors: MentorInterface[] }) => {
  return (
    <div className="px-4 md:px-10 lg:px-[550px]">
      <Carousel
        gap="gap-4 md:gap-10 lg:gap-20"
        offset="pl-4 md:pl-8 lg:pl-0"
        paddingY="pt-10 pb-10"
        items={mentors}
        Component={Mentor}
      />
    </div>
  );
};

export default MentorShowcase;
