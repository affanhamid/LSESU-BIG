"use client";

import React, { useEffect, useRef } from "react";
import { CarouselProps } from "../Types/types";
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
        carousel.scrollLeft += 650;
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = -100;
        }
      };
      const scrollInterval = setInterval(startScrolling, 2000);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      className={`overflow-x-scroll mx-auto no-scrollbar scroll-smooth`}
    >
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
