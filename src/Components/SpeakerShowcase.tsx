"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Speaker } from "./Speaker";
import { CarouselProps } from "@/Types/types";

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
    let scrollDirection = 1;
    if (carousel) {
      const startScrolling = () => {
        carousel.scrollLeft += scrollDirection * 1;
        if (carousel.scrollLeft <= 30) {
          scrollDirection = 1;
        }
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          scrollDirection = -1;
        }
      };
      const scrollInterval = setInterval(startScrolling, 20);
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

const SpeakerShowcase = ({ showcaseSpeakers }: { showcaseSpeakers: any }) => {
  return (
    <section className="text-white pt-20 pb-10">
      <h1 className="text-7xl text-bold text-center">Past Speakers</h1>
      <div className="my-40 px-56">
        <Carousel
          gap="gap-8"
          offset="pl-6"
          paddingY={""}
          items={showcaseSpeakers}
          Component={Speaker}
          animate={true}
        />
        <Link href="/past-speakers">
          <p className="mt-5 underline text-lg">See All Speakers</p>
        </Link>
      </div>
    </section>
  );
};

export default SpeakerShowcase;
