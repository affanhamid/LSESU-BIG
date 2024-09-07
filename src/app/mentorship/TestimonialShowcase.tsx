"use client";
import Carousel from "../../Components/Carousel";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimony = ({ description }: { description: string }) => {
  return (
    <div className="relative flex flex-col border-2 border-white rounded-lg w-[300px] ml:w-[400px] break:w-[500px] aspect-video px-14 py-14">
      <p className="text-xl ml:text-3xl flex-1">{description}</p>
      <div className="flex items-center gap-1">
        <h2 className="text-lg text-right">Anonymous</h2>
      </div>
      <div className="absolute bottom-10 right-10 text-4xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

const TestimonialShowcase = ({ testimonials }: { testimonials: any }) => {
  return (
    <div className="w-[300px] ml:w-[400px] break:w-[500px] overflow-hidden mx-auto">
      <Carousel
        gap="gap-20"
        offset="pl-0"
        paddingY="pt-20 pb-10"
        items={testimonials}
        Component={Testimony}
      />
    </div>
  );
};

export default TestimonialShowcase;
