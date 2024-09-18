"use client";

import React, { useEffect, useRef, useState } from "react";
import { CarouselProps } from "@/Types";

const Carousel = <T,>({
  gap,
  offset,
  paddingY,
  items,
  Component,
  speed = 1,
}: CarouselProps<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mouseHover, setMouseHover] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const totalWidth = carousel.scrollWidth;

      const startScrolling = () => {
        if (!mouseHover) {
          carousel.scrollLeft += speed * 1;
        }
      };
      carousel.addEventListener("scroll", () => {
        if (carousel.scrollLeft >= totalWidth / 2) {
          carousel.scrollLeft = 0;
        }
      });

      const scrollInterval = setInterval(startScrolling, 10);
      return () => clearInterval(scrollInterval);
    }
  }, [items, mouseHover]);

  return (
    <div
      ref={carouselRef}
      className={`overflow-x-scroll mx-auto no-scrollbar`}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div className={`flex ${gap} w-max ${offset} ${paddingY}`}>
        {[...items, ...items].map((item, idx) => (
          <Component key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
