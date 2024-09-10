import TestimonialShowcase from "@/app/mentorship/TestimonialShowcase";
import { FaChartLine, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { TestimonialInterface } from "@/Types";
import { NumberInterface } from "@/Types";
import mentorShipImage from "/public/mentorship.jpg";
import Image from "next/image";

const Number = ({ text, icon, description }: NumberInterface) => {
  return (
    <div className="rounded-lg bg-background text-white flex flex-col items-center justify-center p-6 group cursor-pointer select-none h-max">
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-2xl">{text}</div>
      <div className="h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 mt-2 text-center">
        {description}
      </div>
    </div>
  );
};

const Mentorship = async () => {
  const testimonials: TestimonialInterface[] = [
    { description: "This is a test description" },
  ];
  const mentors = [{}, {}, {}];
  return (
    <main className="">
      <header className="relative">
        <Image
          src={mentorShipImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          MENTORSHIP
        </h1>
      </header>
      <header className="px-4 md:px-10 lg:px-20 xl:px-40 lg:pt-10 flex flex-col items-center pb-10 lg:pb-20 bg-white">
        <h2 className="text-center text-xl my-5"></h2>
        <div className="flex gap-5">
          <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
            Apply to be a mentee
          </button>
          <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
            Apply to be a mentor
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-h-52 h-52 mb-96 md:mb-20 text-center">
          <Number
            text="80+ Spring Week Offers"
            icon={<FaChartLine />}
            description="This is a sample description of many words to explain the metric in more detail for potential users so that they understand better."
          />
          <Number
            text="Revamped to mentorship families"
            icon={<FaCalendarAlt />}
            description="This is a sample description of many words to explain the metric in more detail for potential users so that they understand better."
          />
          <Number
            text="35 mentors"
            icon={<FaUsers />}
            description="This is a sample description of many words to explain the metric in more detail for potential users so that they understand better."
          />
        </div>
      </header>
      <section className="bg-background text-white pt-20 pb-10">
        <h1 className="text-3xl lg:text-6xl font-bold text-center">
          Testimonials
        </h1>
        <TestimonialShowcase testimonials={testimonials} />
      </section>
      <section className="bg-white pt-20 pb-10">
        <h1 className="text-3xl lg:text-6xl font-bold text-center mb-4">
          Mentors
        </h1>
        <p className="text-center px-4 lg:px-96 mb-10">
          Our 40+ mentors/buddies are from diverse backgrounds and
          nationalities. They managed to break into the competitive field both
          from economics/ finance degrees and non-finance degrees - with
          experience and offers from 50+ distinguished firms.
        </p>{" "}
        <div className="flex gap-5">
          <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
            Apply to be a mentee
          </button>
          <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
            Apply to be a mentor
          </button>
        </div>
        {/* <MentorShowcase mentors={mentors} /> */}
      </section>
    </main>
  );
};

export default Mentorship;
