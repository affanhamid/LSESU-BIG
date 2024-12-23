"use client";

import React, { useEffect, useRef } from "react";
import { CarouselProps } from "../Types/types";
import Mentor from "./Mentor";

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
        carousel.scrollLeft += 680;
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
      };
      const scrollInterval = setInterval(startScrolling, 3000);
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

const MentorShowcase = ({ mentors }: { mentors: any }) => {
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
