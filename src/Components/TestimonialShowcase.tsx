"use client";

import React, { useEffect, useRef } from "react";
import { CarouselProps } from "@/Types/types";
import Testimony from "./Testimony";

const Carousel: React.FC<CarouselProps> = ({
  gap,
  offset,
  paddingY,
  items,
  Component,
  animate,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const startScrolling = () => {
        carousel.scrollLeft += 1;
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
      };
      const scrollInterval = setInterval(startScrolling, 50);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div ref={carouselRef} className={`overflow-x-scroll mx-auto no-scrollbar`}>
      <div className={`flex ${gap} w-max ${offset} ${paddingY}`}>
        {items.map((item, idx) => (
          <Component key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialShowcase = ({ testimonials }: { testimonials: any }) => {
  return (
    <div className="px-4 md:px-10 lg:px-40">
      <Carousel
        gap="gap-4 md:gap-10 lg:gap-20"
        offset="pl-4 md:pl-8 lg:pl-12"
        paddingY="pt-10 pb-10"
        items={testimonials}
        Component={Testimony}
      />
    </div>
  );
};

export default TestimonialShowcase;
