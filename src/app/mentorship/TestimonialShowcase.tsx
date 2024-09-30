import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TestimonialInterface } from "@/Types";

const Testimony = ({ description }: TestimonialInterface) => {
  return (
    <div className="relative flex flex-col border-2 border-transparent rounded-lg w-full md:w-[300px] lg:w-[350px] xl:w-[400px] aspect-video px-6 py-6 group transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:border-white cursor-pointer">
      {/* Testimonial description */}
      <p className="text-xl md:text-xl flex-1">{description}</p>
      
      {/* Testimonial author */}
      <div className="flex items-center gap-1 mt-4">
        <h2 className="text-lg text-right"></h2>
      </div>
      
      {/* Quote icon */}
      <div className="absolute bottom-10 right-10 text-4xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

const TestimonialShowcase = ({
  testimonials,
}: {
  testimonials: TestimonialInterface[];
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl">
      {testimonials.length > 0 &&
        testimonials.map((testimonial: TestimonialInterface, idx: number) => (
          <Testimony key={idx} description={testimonial.description} />
        ))}
    </div>
  );
};

export default TestimonialShowcase;
