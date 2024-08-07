import { fetchTestimonials } from "../../Database/database";
import TestimonialShowcase from "@/Components/TestimonialShowcase";
import MentorShowcase from "@/Components/MentorShowcase";
import Navbar from "@/Components/Navbar";
import { FaChartLine, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Number = ({
  text,
  icon,
  description,
}: {
  text: any;
  icon: any;
  description: any;
}) => {
  return (
    <div className="rounded-lg bg-background text-white flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 group cursor-pointer select-none">
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-2xl">{text}</div>
      <div className="h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 mt-2 text-center">
        {description}
      </div>
    </div>
  );
};

const Mentorship = async () => {
  const testimonials = await fetchTestimonials();
  const mentors = [{}, {}, {}];
  return (
    <main>
      <Navbar />
      <header className="px-4 md:px-10 lg:px-20 xl:px-40 pt-20 lg:pt-40 flex flex-col items-center pb-10 lg:pb-20 bg-white">
        <h1 className="text-3xl lg:text-6xl font-bold mb-5 lg:mb-10 text-center">
          MENTORSHIP
        </h1>
        <h2 className="text-center mb-5">
          Something about BIG's mentorship scheme being really good
        </h2>
        <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
          Apply Now
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <Number
            text="70+ Spring Week Offers"
            icon={<FaChartLine />}
            description="This is a sample description of many words to explain the metric in more detail for potential users so that they understand better."
          />
          <Number
            text="35 members"
            icon={<FaUsers />}
            description="This is a sample description of many words to explain the metric in more detail for potential users so that they understand better."
          />
          <Number
            text="15 Annual Events"
            icon={<FaCalendarAlt />}
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
        </p>
        <MentorShowcase mentors={mentors} />
      </section>
    </main>
  );
};

export default Mentorship;
