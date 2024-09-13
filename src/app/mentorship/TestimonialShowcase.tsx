"use client";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { TestimonialInterface } from "@/Types";

// Testimony component
const Testimony = ({ description }: TestimonialInterface) => {
  return (
    <div className="relative flex flex-col border-2 border-white rounded-lg w-full md:w-[300px] lg:w-[350px] xl:w-[400px] aspect-video px-6 py-6">
      <p className="text-xl md:text-xl flex-1">{description}</p>
      <div className="flex items-center gap-1">
        <h2 className="text-lg text-right">Anonymous</h2>
      </div>
      <div className="absolute bottom-10 right-10 text-4xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

// TestimonialShowcase component
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
