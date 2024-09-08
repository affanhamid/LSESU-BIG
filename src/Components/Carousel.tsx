"use client";

import React, { useEffect, useRef } from "react";
import { CarouselProps } from "@/Types";

const Carousel = <T,>({
  gap,
  offset,
  paddingY,
  items,
  Component,
}: CarouselProps<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const totalWidth = carousel.scrollWidth;

      const startScrolling = () => {
        carousel.scrollLeft += 1;
        // If it has scrolled past the first set of items, move the scroll position to create the loop effect
        if (carousel.scrollLeft >= totalWidth / 2) {
          carousel.scrollLeft = 0;
        }
      };

      const scrollInterval = setInterval(startScrolling, 10);
      return () => clearInterval(scrollInterval);
    }
  }, [items]);

  return (
    <div ref={carouselRef} className={`overflow-x-scroll mx-auto no-scrollbar`}>
      <div className={`flex ${gap} w-max ${offset} ${paddingY}`}>
        {[...items, ...items].map((item, idx) => (
          <Component key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
