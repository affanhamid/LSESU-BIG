"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GalleryEventInterface, GalleryPhotoInterface } from "../Types";

export const Photo = ({ imageLink, title, link }: GalleryPhotoInterface) => {
  return (
    <Link href={link}>
      <div className="group cursor-pointer transform transition-transform duration-200 mr-3 mb-4 border-2 border-black relative rounded-lg overflow-hidden">
        <img
          src={imageLink}
          alt={title}
          className="object-cover group-hover:brightness-75 w-full h-auto max-h-60"
        />
        <p className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center text-white p-10 text-center bg-black bg-opacity-50">
          <span>{title}</span>
        </p>
      </div>
    </Link>
  );
};

const Gallery = ({
  events,
  scrollToggle,
}: {
  events: GalleryEventInterface[];
  scrollToggle: number;
}) => {
  const [scrollable, setScrollable] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (scroll > scrollToggle) {
        setScrollable(true);
      } else {
        setScrollable(false);
      }
    });
  }, []);
  return (
    <div className="flex justify-center">
      <div
        className={`relative h-[75vh] ${
          scrollable ? "overflow-y-scroll" : "overflow-y-hidden"
        } w-full flex flex-wrap justify-center my-20`}
      >
        {events.map((event: GalleryEventInterface, idx: number) => (
          <div className="flex-initial" key={idx}>
            <Photo
              imageLink={event.imageLink}
              link={event.postLink}
              title={event.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
